// MarketRaidGame.tsx
import { useEffect, useMemo, useReducer, useRef } from "react";
import { MAP_WIDTH, MAP_HEIGHT, sectors, stocks } from "./finviz-raid-layout";

type SpellId = "flash_heal" | "greater_heal";

type SectorId = string;
type StockId = string;

type RectLayout = {
  id: string;
  label?: string;
  ticker?: string;
  sector?: SectorId;
  x: number;
  y: number;
  w: number;
  h: number;
};

type StockState = {
  hp: number;
  maxHp: number;
  alive: boolean;
  lastDamageAt?: number;
  lastHealAt?: number;
  lastSpokeAt?: number;
};

type ChatMessage = {
  id: string;
  ticker: string;
  text: string;
  at: number;
};

type CastState = {
  spellId: SpellId;
  targetId: StockId;
  startedAt: number;
  endsAt: number;
};

type GameState = {
  stocks: Record<StockId, StockState>;
  selectedStockId?: StockId;
  selectedSpellId: SpellId;
  cast?: CastState;
  margin: number;
  maxMargin: number;
  primarySectorId: SectorId;
  primarySectorUntil: number;
  nextDamageAt: number;
  nextFlavorAt: number;
  startedAt: number;
  now: number;
  gameOver: boolean;
  chat: ChatMessage[];
};

type Spell = {
  id: SpellId;
  name: string;
  castMs: number;
  healAmount: number;
  marginCost: number;
};

type Action =
  | { type: "TICK"; now: number; dt: number }
  | { type: "SELECT_SPELL"; spellId: SpellId }
  | { type: "CLICK_STOCK"; stockId: StockId; now: number }
  | { type: "CANCEL_CAST" }
  | { type: "RESTART"; now: number };

const SPELLS: Record<SpellId, Spell> = {
  flash_heal: {
    id: "flash_heal",
    name: "Flash Heal",
    castMs: 850,
    healAmount: 16,
    marginCost: 8,
  },
  greater_heal: {
    id: "greater_heal",
    name: "Greater Heal",
    castMs: 2100,
    healAmount: 38,
    marginCost: 18,
  },
};

const MARGIN_REGEN_PER_SECOND = 5;

// Things a panicked raider yells when they're hurting.
const CHAT_LINES = [
  "heal me!",
  "healer?!",
  "HEALS PLZ",
  "where are the heals?!",
  "am I gonna get a heal or what",
  "HEAL",
  "I'm low!!",
  "healer are you afk?",
  "can I get a heal here",
  "dying over here!!",
  "less dps more heals",
];
// Last words when a stock flatlines.
const DEATH_LINES = [
  "...",
  "ffs",
  "OMG HEALER",
  "no heals?? gg",
  "I'm dead lol",
  "report the healer",
  "1 heal wouldve saved me",
  "rip me",
  "uninstalling",
];
// Off-topic raid banter about 2026 market chaos. Said by a random raider.
const FLAVOR_LINES = [
  "Strait of Hormuz is OPEN again, oil tanking, dump it",
  "wait the Strait of Hormuz is CLOSED?? oil to the moon lmao",
  "Fed cut rates 50bps and I'm STILL bleeding out, explain that",
  "another AI bubble pop, I'm the real tank in this raid",
  "egg prices hit $14/dozen, even my stop-loss is crying",
  "jobs report revised down 900k AGAIN, who's writing these",
  "Bitcoin at 180k and I'm here getting globaled, cool cool",
  "tariffs back ON. no wait, OFF. no, ON. make up your mind",
  "10-year yield inverted again, we're so back / it's so over",
  "Treasury Secretary just tweeted, everyone brace",
  "gold at all-time high and I'm at all-time low, balanced",
  "they delayed the rate decision to 3am, who hurt the Fed",
  "NVDA beat earnings by 400% and somehow I still take damage",
  "rumor the gov is buying the dip, copium intensifies",
];
const CHAT_HP_THRESHOLD = 0.4; // only cry for heals below this
const CHAT_SPEAK_CHANCE = 0.22; // per damage event while hurt
const CHAT_SPEAK_COOLDOWN_MS = 4000; // don't let one stock spam
const CHAT_MAX_MESSAGES = 80;
const FLAVOR_MIN_MS = 7000;
const FLAVOR_MAX_MS = 16000;

let chatSeq = 0;

function appendChat(
  chat: ChatMessage[],
  ticker: string,
  text: string,
  now: number,
): ChatMessage[] {
  const message: ChatMessage = {
    id: `${ticker}-${now}-${chatSeq++}`,
    ticker,
    text,
    at: now,
  };
  return [...chat, message].slice(-CHAT_MAX_MESSAGES);
}

export function makeInitialState(now: number): GameState {
  const stockState = Object.fromEntries(
    stocks.map((stock: RectLayout) => [
      stock.id,
      {
        hp: 100,
        maxHp: 100,
        alive: true,
      },
    ]),
  );

  return {
    stocks: stockState,
    selectedSpellId: "flash_heal",
    margin: 100,
    maxMargin: 100,
    primarySectorId: randomSectorId(),
    primarySectorUntil: now + randomBetween(10_000, 20_000),
    nextDamageAt: now + 1000,
    nextFlavorAt: now + randomBetween(FLAVOR_MIN_MS, FLAVOR_MAX_MS),
    startedAt: now,
    now,
    gameOver: false,
    chat: [],
  };
}

export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "RESTART": {
      return makeInitialState(action.now);
    }

    case "SELECT_SPELL": {
      return {
        ...state,
        selectedSpellId: action.spellId,
      };
    }

    case "CANCEL_CAST": {
      return {
        ...state,
        cast: undefined,
      };
    }

    case "CLICK_STOCK": {
      if (state.gameOver) return state;

      const target = state.stocks[action.stockId];
      if (!target?.alive) return state;

      const spell = SPELLS[state.selectedSpellId];

      // Allow targeting even if margin is low, but do not start cast.
      if (state.margin < spell.marginCost) {
        return {
          ...state,
          selectedStockId: action.stockId,
        };
      }

      return {
        ...state,
        selectedStockId: action.stockId,
        cast: {
          spellId: spell.id,
          targetId: action.stockId,
          startedAt: action.now,
          endsAt: action.now + spell.castMs,
        },
      };
    }

    case "TICK": {
      if (state.gameOver) {
        return {
          ...state,
          now: action.now,
        };
      }

      let next: GameState = {
        ...state,
        now: action.now,
        margin: Math.min(
          state.maxMargin,
          state.margin + (MARGIN_REGEN_PER_SECOND * action.dt) / 1000,
        ),
      };

      if (next.cast && action.now >= next.cast.endsAt) {
        next = completeCast(next, action.now);
      }

      if (action.now >= next.primarySectorUntil) {
        next = {
          ...next,
          primarySectorId: randomSectorId(),
          primarySectorUntil: action.now + randomBetween(10_000, 20_000),
        };
      }

      if (action.now >= next.nextFlavorAt) {
        const speaker = randomItem(aliveStocks(next.stocks));
        next = {
          ...next,
          chat: speaker
            ? appendChat(
                next.chat,
                speaker.id,
                randomItem(FLAVOR_LINES) ?? "anyone else getting wrecked?",
                action.now,
              )
            : next.chat,
          nextFlavorAt: action.now + randomBetween(FLAVOR_MIN_MS, FLAVOR_MAX_MS),
        };
      }

      if (action.now >= next.nextDamageAt) {
        next = applyDamagePattern(next, action.now);
        next = {
          ...next,
          nextDamageAt: action.now + randomBetween(800, 1200),
        };
      }

      const aliveCount = Object.values(next.stocks).filter(
        (s) => s.alive,
      ).length;

      if (aliveCount === 0) {
        next = {
          ...next,
          gameOver: true,
          cast: undefined,
        };
      }

      return next;
    }

    default:
      return state;
  }
}

function completeCast(state: GameState, now: number): GameState {
  if (!state.cast) return state;

  const spell = SPELLS[state.cast.spellId];
  const target = state.stocks[state.cast.targetId];

  if (!target?.alive) {
    return {
      ...state,
      cast: undefined,
    };
  }

  if (state.margin < spell.marginCost) {
    return {
      ...state,
      cast: undefined,
    };
  }

  return {
    ...state,
    margin: Math.max(0, state.margin - spell.marginCost),
    cast: undefined,
    stocks: {
      ...state.stocks,
      [state.cast.targetId]: {
        ...target,
        hp: Math.min(target.maxHp, target.hp + spell.healAmount),
        lastHealAt: now,
      },
    },
  };
}

function applyDamagePattern(state: GameState, now: number): GameState {
  let next = state;

  // Frequent damage to the current primary sector.
  if (roll(0.55)) {
    const sectorStocks = aliveStocksInSector(
      state.primarySectorId,
      state.stocks,
    );
    const targets = sampleMany(sectorStocks, randomInt(3, 8));

    for (const target of targets) {
      next = damageStock(next, target.id, randomBetween(3, 8), now);
    }
  }

  // Occasional full-market splash.
  if (roll(0.1)) {
    const alive = aliveStocks(state.stocks);
    const targets = sampleMany(alive, Math.ceil(alive.length * 0.35));

    for (const target of targets) {
      next = damageStock(next, target.id, randomBetween(2, 5), now);
    }
  }

  // Focused big hit on one stock in the primary sector.
  if (roll(0.16)) {
    const sectorStocks = aliveStocksInSector(
      state.primarySectorId,
      state.stocks,
    );
    const target = randomItem(sectorStocks);

    if (target) {
      next = damageStock(next, target.id, randomBetween(12, 24), now);
    }
  }

  // Random off-sector damage.
  if (roll(0.22)) {
    const offSector = stocks.filter(
      (s: RectLayout) =>
        s.sector !== state.primarySectorId && state.stocks[s.id]?.alive,
    );

    const target = randomItem(offSector);

    if (target) {
      next = damageStock(next, target.id, randomBetween(3, 9), now);
    }
  }

  return next;
}

function damageStock(
  state: GameState,
  stockId: StockId,
  amount: number,
  now: number,
): GameState {
  const current = state.stocks[stockId];
  if (!current?.alive) return state;

  const nextHp = Math.max(0, current.hp - amount);
  const alive = nextHp > 0;

  let chat = state.chat;
  let lastSpokeAt = current.lastSpokeAt;

  if (!alive) {
    // A dying raider always gets a last word.
    chat = appendChat(chat, stockId, randomItem(DEATH_LINES) ?? "...", now);
    lastSpokeAt = now;
  } else {
    // Hurt raiders below the threshold may cry out for heals.
    const offCooldown =
      current.lastSpokeAt === undefined ||
      now - current.lastSpokeAt > CHAT_SPEAK_COOLDOWN_MS;

    if (
      nextHp / current.maxHp < CHAT_HP_THRESHOLD &&
      offCooldown &&
      roll(CHAT_SPEAK_CHANCE)
    ) {
      chat = appendChat(chat, stockId, randomItem(CHAT_LINES) ?? "heal me!", now);
      lastSpokeAt = now;
    }
  }

  return {
    ...state,
    chat,
    stocks: {
      ...state.stocks,
      [stockId]: {
        ...current,
        hp: nextHp,
        alive,
        lastDamageAt: now,
        lastSpokeAt,
      },
    },
  };
}

export function MarketRaidGame() {
  const [state, dispatch] = useReducer(reducer, undefined, () =>
    makeInitialState(performance.now()),
  );

  const aliveCount = useMemo(
    () => Object.values(state.stocks).filter((s) => s.alive).length,
    [state.stocks],
  );

  useEffect(() => {
    let frame = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = now - last;
      last = now;

      dispatch({ type: "TICK", now, dt });
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        dispatch({ type: "SELECT_SPELL", spellId: "flash_heal" });
      }

      if (event.key === "2") {
        dispatch({ type: "SELECT_SPELL", spellId: "greater_heal" });
      }

      if (event.key === "Escape") {
        dispatch({ type: "CANCEL_CAST" });
      }

      if (event.key.toLowerCase() === "r" && state.gameOver) {
        dispatch({ type: "RESTART", now: performance.now() });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [state.gameOver]);

  return (
    <div className="flex h-screen gap-3 bg-slate-950 p-3 text-white">
      <div className="flex min-w-0 flex-1 flex-col gap-3">
      <div className="flex items-center justify-between rounded border border-slate-700 bg-slate-900 px-3 py-2">
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-400">
            Market Raid
          </div>
          <div className="text-xl font-bold">S&amp;P 500 Healer Frame</div>
        </div>

        <div className="text-right">
          <div className="text-sm text-slate-400">Rotation out of</div>
          <div className="font-bold uppercase text-orange-300">
            {state.primarySectorId}
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-slate-400">Alive</div>
          <div className="font-bold">
            {aliveCount} / {stocks.length}
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded border border-slate-700 bg-black">
        <MarketRaidMap
          state={state}
          onStockClick={(stockId) =>
            dispatch({
              type: "CLICK_STOCK",
              stockId,
              now: performance.now(),
            })
          }
        />
      </div>

      <CastBar state={state} />

      <div className="grid grid-cols-[1fr_auto] gap-4">
        <MarginBar margin={state.margin} maxMargin={state.maxMargin} />

        <SpellBar
          selectedSpellId={state.selectedSpellId}
          onSelectSpell={(spellId) =>
            dispatch({ type: "SELECT_SPELL", spellId })
          }
        />
      </div>
      </div>

      <ChatPanel messages={state.chat} />

      {state.gameOver && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="max-w-xl rounded border border-red-500 bg-slate-950 p-8 text-center shadow-xl">
            <div className="mb-4 text-3xl font-black text-red-400">
              MARKET WIPE
            </div>
            <div className="mb-6 space-y-3 text-left text-sm leading-relaxed text-slate-300">
              <p>
                The last ticker flatlines and the floor goes silent. Every
                position you swore you could heal has bled out to zero, and the
                margin call that follows is not a phone up &mdash; it is a
                certified letter, a locksmith, and two polite men in windbreakers.
              </p>
              <p>
                Your broker has taken possession of the house. The locks are
                changed by noon. Your wife has changed the locks on the
                marriage too: she takes the kids, the dog, and the good
                blender, and leaves you the folding chair and the framed
                &ldquo;BUY THE DIP&rdquo; poster nobody else wanted. Your
                mother-in-law, who always knew, says nothing &mdash; which is
                worse.
              </p>
              <p>
                The Lamborghini was a lease. The yacht was a rendering. Your
                Robinhood notifications keep buzzing in a pocket that is no
                longer attached to any pants you own. The raid chat, once
                begging you for heals, has moved on to a new healer and is
                already talking about the Strait of Hormuz again.
              </p>
              <p className="italic text-slate-400">
                You are now, in the truest financial sense, fully diversified
                across nothing. Touch grass. Or click below and tell yourself
                this time will be different.
              </p>
            </div>
            <button
              className="rounded bg-red-600 px-4 py-2 font-bold hover:bg-red-500"
              onClick={() =>
                dispatch({ type: "RESTART", now: performance.now() })
              }
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChatPanel({ messages }: { messages: ChatMessage[] }) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  return (
    <div className="flex w-72 flex-col rounded border border-slate-700 bg-black/80 shadow-inner">
      <div className="border-b border-slate-700 bg-slate-900 px-3 py-2 text-sm font-bold uppercase tracking-wide text-slate-300">
        Raid Chat
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2 font-mono text-xs leading-relaxed">
        {messages.length === 0 ? (
          <div className="text-slate-600">The raid is quiet... for now.</div>
        ) : (
          messages.map((m) => (
            // Classic WoW /raid channel coral-orange — whole line one color.
            <div key={m.id} className="mb-0.5 text-[#ff7f4d]">
              [Raid] [{m.ticker}]: {m.text}
            </div>
          ))
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}

function MarketRaidMap({
  state,
  onStockClick,
}: {
  state: GameState;
  onStockClick: (stockId: StockId) => void;
}) {
  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className="h-full w-full select-none"
      preserveAspectRatio="xMinYMid meet"
    >
      <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="#111827" />

      {(sectors as RectLayout[]).map((sector) => (
        <SectorTile
          key={sector.id}
          sector={sector}
          active={sector.id === state.primarySectorId}
        />
      ))}

      {(stocks as RectLayout[]).map((stock) => (
        <StockTile
          key={stock.id}
          stock={stock}
          state={state.stocks[stock.id]}
          selected={state.selectedStockId === stock.id}
          now={state.now}
          onClick={() => onStockClick(stock.id)}
        />
      ))}
    </svg>
  );
}

function SectorTile({
  sector,
  active,
}: {
  sector: RectLayout;
  active: boolean;
}) {
  return (
    <g>
      <rect
        x={sector.x}
        y={sector.y}
        width={sector.w}
        height={sector.h}
        fill="#0f172a"
        stroke={active ? "#fb923c" : "#334155"}
        strokeWidth={active ? 4 : 2}
      />

      <rect
        x={sector.x}
        y={sector.y}
        width={sector.w}
        height={16}
        fill={active ? "#7c2d12" : "#1f2937"}
      />

      <text
        x={sector.x + 4}
        y={sector.y + 12}
        fill="white"
        fontSize={11}
        fontWeight={800}
        pointerEvents="none"
      >
        {sector.label ?? sector.id}
      </text>
    </g>
  );
}

function StockTile({
  stock,
  state,
  selected,
  now,
  onClick,
}: {
  stock: RectLayout;
  state?: StockState;
  selected: boolean;
  now: number;
  onClick: () => void;
}) {
  if (!state) return null;

  const hpRatio = clamp(state.hp / state.maxHp, 0, 1);
  const fillHeight = stock.h * hpRatio;
  const dead = !state.alive;

  const recentlyDamaged =
    state.lastDamageAt !== undefined && now - state.lastDamageAt < 180;

  const recentlyHealed =
    state.lastHealAt !== undefined && now - state.lastHealAt < 220;

  const showTicker = stock.w > 18 && stock.h > 14;
  const showHp = stock.w > 42 && stock.h > 34;

  return (
    <g
      onClick={dead ? undefined : onClick}
      style={{ cursor: dead ? "default" : "pointer" }}
    >
      <rect
        x={stock.x}
        y={stock.y}
        width={stock.w}
        height={stock.h}
        fill="#020617"
        stroke={selected ? "#facc15" : "#0f172a"}
        strokeWidth={selected ? 3 : 1}
      />

      <rect
        x={stock.x}
        y={stock.y + stock.h - fillHeight}
        width={stock.w}
        height={fillHeight}
        fill={healthColor(hpRatio)}
      />

      {recentlyDamaged && (
        <rect
          x={stock.x}
          y={stock.y}
          width={stock.w}
          height={stock.h}
          fill="#ffffff"
          opacity={0.22}
        />
      )}

      {recentlyHealed && (
        <rect
          x={stock.x + 1}
          y={stock.y + 1}
          width={Math.max(0, stock.w - 2)}
          height={Math.max(0, stock.h - 2)}
          fill="none"
          stroke="#bfdbfe"
          strokeWidth={3}
        />
      )}

      {hpRatio > 0 && hpRatio < 0.22 && (
        <rect
          x={stock.x + 1}
          y={stock.y + 1}
          width={Math.max(0, stock.w - 2)}
          height={Math.max(0, stock.h - 2)}
          fill="none"
          stroke="#fecaca"
          strokeWidth={2}
        />
      )}

      {dead && (
        <rect
          x={stock.x}
          y={stock.y}
          width={stock.w}
          height={stock.h}
          fill="#020617"
          opacity={0.92}
        />
      )}

      {showTicker && (
        <text
          x={stock.x + stock.w / 2}
          y={stock.y + stock.h / 2 - (showHp ? 7 : 0)}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={dead ? "#64748b" : "white"}
          fontWeight={900}
          fontSize={tickerFontSize(stock)}
          pointerEvents="none"
        >
          {stock.ticker ?? stock.id}
        </text>
      )}

      {showHp && (
        <text
          x={stock.x + stock.w / 2}
          y={stock.y + stock.h / 2 + 15}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={dead ? "#64748b" : "white"}
          fontWeight={800}
          fontSize={Math.max(9, Math.min(16, stock.w / 7))}
          pointerEvents="none"
        >
          {dead ? "WIPED" : `${Math.round(state.hp - state.maxHp)}%`}
        </text>
      )}
    </g>
  );
}

function CastBar({ state }: { state: GameState }) {
  const cast = state.cast;

  if (!cast) {
    return (
      <div className="h-8 overflow-hidden rounded border border-slate-700 bg-slate-900">
        <div className="flex h-full items-center justify-center text-sm text-slate-500">
          No active cast
        </div>
      </div>
    );
  }

  const spell = SPELLS[cast.spellId];
  const progress = clamp(
    (state.now - cast.startedAt) / (cast.endsAt - cast.startedAt),
    0,
    1,
  );

  return (
    <div className="relative h-8 overflow-hidden rounded border border-blue-300 bg-slate-900">
      <div
        className="absolute left-0 top-0 h-full bg-blue-500"
        style={{ width: `${progress * 100}%` }}
      />

      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
        {spell.name} → {cast.targetId}
      </div>
    </div>
  );
}

function MarginBar({
  margin,
  maxMargin,
}: {
  margin: number;
  maxMargin: number;
}) {
  const pct = clamp(margin / maxMargin, 0, 1);

  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-bold text-cyan-200">Margin</span>
        <span className="text-slate-300">
          ${Math.floor(margin)}M / ${maxMargin}M
        </span>
      </div>

      <div className="h-9 overflow-hidden rounded border border-cyan-700 bg-slate-900">
        <div
          className="h-full bg-cyan-500"
          style={{ width: `${pct * 100}%` }}
        />
      </div>
    </div>
  );
}

function SpellBar({
  selectedSpellId,
  onSelectSpell,
}: {
  selectedSpellId: SpellId;
  onSelectSpell: (spellId: SpellId) => void;
}) {
  return (
    <div className="flex gap-2">
      {(Object.values(SPELLS) as Spell[]).map((spell, index) => {
        const active = selectedSpellId === spell.id;

        return (
          <button
            key={spell.id}
            className={[
              "min-w-44 rounded border px-4 py-2 text-left",
              active
                ? "border-yellow-300 bg-yellow-900/50"
                : "border-slate-700 bg-slate-900 hover:bg-slate-800",
            ].join(" ")}
            onClick={() => onSelectSpell(spell.id)}
          >
            <div className="font-bold">
              {index + 1}. {spell.name}
            </div>
            <div className="text-xs text-slate-300">
              {spell.castMs / 1000}s · +${spell.healAmount}M · $
              {spell.marginCost}M margin
            </div>
          </button>
        );
      })}
    </div>
  );
}

function healthColor(hpRatio: number) {
  if (hpRatio <= 0) return "#020617";
  if (hpRatio < 0.2) return "#ef4444";
  if (hpRatio < 0.4) return "#f97316";
  if (hpRatio < 0.65) return "#eab308";
  return "#16a34a";
}

function tickerFontSize(stock: RectLayout) {
  const area = stock.w * stock.h;

  if (area > 45_000) return 36;
  if (area > 25_000) return 30;
  if (area > 12_000) return 22;
  if (area > 5_000) return 15;
  if (area > 2_000) return 11;

  return 8;
}

function aliveStocks(stockStates: Record<StockId, StockState>) {
  return stocks.filter((stock: RectLayout) => stockStates[stock.id]?.alive);
}

function aliveStocksInSector(
  sectorId: SectorId,
  stockStates: Record<StockId, StockState>,
) {
  return stocks.filter(
    (stock: RectLayout) =>
      stock.sector === sectorId && stockStates[stock.id]?.alive,
  );
}

function randomSectorId() {
  return randomItem(sectors as RectLayout[])?.id ?? "technology";
}

function randomItem<T>(items: T[]): T | undefined {
  return items[Math.floor(Math.random() * items.length)];
}

function sampleMany<T>(items: T[], count: number) {
  const copy = [...items];
  const result: T[] = [];

  while (copy.length > 0 && result.length < count) {
    const index = Math.floor(Math.random() * copy.length);
    const [item] = copy.splice(index, 1);
    result.push(item);
  }

  return result;
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number) {
  return Math.floor(randomBetween(min, max + 1));
}

function roll(probability: number) {
  return Math.random() < probability;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
