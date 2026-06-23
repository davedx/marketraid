import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MarketRaidGame } from "./MarketRaidGame";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MarketRaidGame />
  </StrictMode>
);
