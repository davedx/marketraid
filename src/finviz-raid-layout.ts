// Finviz-style fixed market-map layout derived from the supplied 1215x677 screenshot.
// Coordinates are absolute SVG viewBox units. Render with: <svg viewBox="0 0 1215 677">.
// Note: tiny unlabeled/illegible micro-tiles in the screenshot are intentionally omitted; add them as stock ids when you have source constituent data.

export const MAP_WIDTH = 1215;
export const MAP_HEIGHT = 677;

export type SectorId =
  | "technology"
  | "communication-services"
  | "consumer-cyclical"
  | "financial"
  | "industrials"
  | "consumer-defensive"
  | "healthcare"
  | "energy"
  | "utilities"
  | "real-estate"
  | "basic-materials";

export type SectorLayout = {
  id: SectorId;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type StockLayout = {
  id: string;
  ticker: string;
  sector: SectorId;
  industry?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  labelSize?: "xl" | "lg" | "md" | "sm" | "xs";
};

export const sectors: SectorLayout[] = [
  { id: "technology", label: "TECHNOLOGY", x: 0, y: 0, w: 450, h: 677 },
  { id: "communication-services", label: "COMMUNICATION SERVICES", x: 450, y: 0, w: 278, h: 329 },
  { id: "financial", label: "FINANCIAL", x: 450, y: 329, w: 278, h: 348 },
  { id: "consumer-cyclical", label: "CONSUMER CYCLICAL", x: 728, y: 0, w: 269, h: 329 },
  { id: "industrials", label: "INDUSTRIALS", x: 728, y: 329, w: 297, h: 217 },
  { id: "consumer-defensive", label: "CONSUMER DEFENSIVE", x: 728, y: 546, w: 269, h: 131 },
  { id: "healthcare", label: "HEALTHCARE", x: 997, y: 0, w: 218, h: 319 },
  { id: "energy", label: "ENERGY", x: 1025, y: 319, w: 190, h: 126 },
  { id: "utilities", label: "UTILITIES", x: 1025, y: 445, w: 114, h: 142 },
  { id: "real-estate", label: "REAL ESTATE", x: 1139, y: 445, w: 76, h: 142 },
  { id: "basic-materials", label: "BASIC MATERIALS", x: 997, y: 587, w: 218, h: 90 },
];

export const stocks: StockLayout[] = [
  // Technology / Semiconductors
  { id: "NVDA", ticker: "NVDA", sector: "technology", industry: "Semiconductors", x: 0, y: 29, w: 214, h: 267, labelSize: "xl" },
  { id: "AVGO", ticker: "AVGO", sector: "technology", industry: "Semiconductors", x: 214, y: 29, w: 142, h: 147, labelSize: "lg" },
  { id: "MU", ticker: "MU", sector: "technology", industry: "Semiconductors", x: 356, y: 29, w: 92, h: 147, labelSize: "md" },
  { id: "AMD", ticker: "AMD", sector: "technology", industry: "Semiconductors", x: 214, y: 176, w: 83, h: 120, labelSize: "md" },
  { id: "INTC", ticker: "INTC", sector: "technology", industry: "Semiconductors", x: 297, y: 176, w: 59, h: 120, labelSize: "sm" },
  { id: "TXN", ticker: "TXN", sector: "technology", industry: "Semiconductors", x: 356, y: 176, w: 51, h: 61, labelSize: "xs" },
  { id: "QCOM", ticker: "QCOM", sector: "technology", industry: "Semiconductors", x: 407, y: 176, w: 41, h: 61, labelSize: "xs" },
  { id: "ADI", ticker: "ADI", sector: "technology", industry: "Semiconductors", x: 356, y: 237, w: 51, h: 61, labelSize: "xs" },
  { id: "NXPI", ticker: "NXPI", sector: "technology", industry: "Semiconductors", x: 421, y: 237, w: 27, h: 36, labelSize: "xs" },

  // Technology / Software + consumer electronics
  { id: "MSFT", ticker: "MSFT", sector: "technology", industry: "Software - Infrastructure", x: 0, y: 309, w: 174, h: 183, labelSize: "xl" },
  { id: "ORCL", ticker: "ORCL", sector: "technology", industry: "Software - Infrastructure", x: 174, y: 309, w: 99, h: 61, labelSize: "md" },
  { id: "PLTR", ticker: "PLTR", sector: "technology", industry: "Software - Infrastructure", x: 174, y: 370, w: 62, h: 62, labelSize: "sm" },
  { id: "PANW", ticker: "PANW", sector: "technology", industry: "Software - Infrastructure", x: 236, y: 370, w: 37, h: 62, labelSize: "xs" },
  { id: "CRWD", ticker: "CRWD", sector: "technology", industry: "Software - Infrastructure", x: 174, y: 432, w: 47, h: 38, labelSize: "xs" },
  { id: "SNPS", ticker: "SNPS", sector: "technology", industry: "Software - Infrastructure", x: 221, y: 432, w: 52, h: 38, labelSize: "xs" },
  { id: "FTNT", ticker: "FTNT", sector: "technology", industry: "Software - Infrastructure", x: 174, y: 470, w: 47, h: 22, labelSize: "xs" },
  { id: "AAPL", ticker: "AAPL", sector: "technology", industry: "Consumer Electronics", x: 0, y: 493, w: 273, h: 184, labelSize: "xl" },

  // Technology / Chips equipment, hardware, comms, software apps
  { id: "LRCX", ticker: "LRCX", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 273, y: 310, w: 60, h: 80, labelSize: "sm" },
  { id: "AMAT", ticker: "AMAT", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 333, y: 310, w: 60, h: 80, labelSize: "sm" },
  { id: "KLAC", ticker: "KLAC", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 393, y: 310, w: 55, h: 59, labelSize: "xs" },
  { id: "TER", ticker: "TER", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 393, y: 369, w: 28, h: 21, labelSize: "xs" },
  { id: "SNX", ticker: "SNX", sector: "technology", industry: "Computer Hardware", x: 273, y: 403, w: 68, h: 63, labelSize: "sm" },
  { id: "DELL", ticker: "DELL", sector: "technology", industry: "Computer Hardware", x: 341, y: 403, w: 38, h: 63, labelSize: "xs" },
  { id: "STX", ticker: "STX", sector: "technology", industry: "Computer Hardware", x: 273, y: 466, w: 58, h: 75, labelSize: "sm" },
  { id: "WDC", ticker: "WDC", sector: "technology", industry: "Computer Hardware", x: 273, y: 541, w: 68, h: 75, labelSize: "sm" },
  { id: "ANET", ticker: "ANET", sector: "technology", industry: "Computer Hardware", x: 341, y: 466, w: 38, h: 75, labelSize: "xs" },
  { id: "UBER", ticker: "UBER", sector: "technology", industry: "Software - Application", x: 379, y: 403, w: 37, h: 47, labelSize: "xs" },
  { id: "CRM", ticker: "CRM", sector: "technology", industry: "Software - Application", x: 416, y: 403, w: 32, h: 47, labelSize: "xs" },
  { id: "CDNS", ticker: "CDNS", sector: "technology", industry: "Software - Application", x: 379, y: 450, w: 37, h: 47, labelSize: "xs" },
  { id: "NOW", ticker: "NOW", sector: "technology", industry: "Software - Application", x: 416, y: 450, w: 32, h: 47, labelSize: "xs" },
  { id: "ADBE", ticker: "ADBE", sector: "technology", industry: "Software - Application", x: 379, y: 497, w: 37, h: 34, labelSize: "xs" },
  { id: "INTU", ticker: "INTU", sector: "technology", industry: "Software - Application", x: 416, y: 497, w: 32, h: 34, labelSize: "xs" },
  { id: "ROP", ticker: "ROP", sector: "technology", industry: "Software - Application", x: 416, y: 531, w: 32, h: 34, labelSize: "xs" },
  { id: "CSCO", ticker: "CSCO", sector: "technology", industry: "Communication Equipment", x: 273, y: 564, w: 68, h: 66, labelSize: "sm" },
  { id: "APH", ticker: "APH", sector: "technology", industry: "Electronic Components", x: 397, y: 550, w: 51, h: 61, labelSize: "sm" },
  { id: "GLW", ticker: "GLW", sector: "technology", industry: "Electronic Components", x: 397, y: 611, w: 25, h: 30, labelSize: "xs" },
  { id: "TEL", ticker: "TEL", sector: "technology", industry: "Electronic Components", x: 422, y: 611, w: 26, h: 30, labelSize: "xs" },
  { id: "IBM", ticker: "IBM", sector: "technology", industry: "Information Technology Services", x: 341, y: 548, w: 56, h: 69, labelSize: "sm" },
  { id: "ACN", ticker: "ACN", sector: "technology", industry: "Information Technology Services", x: 341, y: 617, w: 27, h: 37, labelSize: "xs" },
  { id: "BR", ticker: "BR", sector: "technology", industry: "Information Technology Services", x: 368, y: 617, w: 29, h: 37, labelSize: "xs" },
  { id: "LITE", ticker: "LITE", sector: "technology", industry: "Communication Equipment", x: 273, y: 630, w: 34, h: 25, labelSize: "xs" },
  { id: "CIEN", ticker: "CIEN", sector: "technology", industry: "Communication Equipment", x: 307, y: 630, w: 34, h: 25, labelSize: "xs" },
  { id: "MSI", ticker: "MSI", sector: "technology", industry: "Communication Equipment", x: 273, y: 655, w: 34, h: 22, labelSize: "xs" },
  { id: "HPE", ticker: "HPE", sector: "technology", industry: "Communication Equipment", x: 307, y: 655, w: 34, h: 22, labelSize: "xs" },
  { id: "COHR", ticker: "COHR", sector: "technology", industry: "Scientific & Technical Instruments", x: 341, y: 654, w: 56, h: 23, labelSize: "xs" },

  // Communication Services
  { id: "GOOGL", ticker: "GOOGL", sector: "communication-services", industry: "Internet Content & Information", x: 452, y: 29, w: 205, h: 232, labelSize: "xl" },
  { id: "META", ticker: "META", sector: "communication-services", industry: "Internet Content & Information", x: 657, y: 29, w: 70, h: 232, labelSize: "sm" },
  { id: "NFLX", ticker: "NFLX", sector: "communication-services", industry: "Entertainment", x: 452, y: 276, w: 48, h: 53, labelSize: "xs" },
  { id: "DIS", ticker: "DIS", sector: "communication-services", industry: "Entertainment", x: 500, y: 276, w: 37, h: 53, labelSize: "xs" },
  { id: "WBD", ticker: "WBD", sector: "communication-services", industry: "Entertainment", x: 537, y: 276, w: 31, h: 53, labelSize: "xs" },
  { id: "TMUS", ticker: "TMUS", sector: "communication-services", industry: "Telecom Services", x: 568, y: 276, w: 50, h: 53, labelSize: "xs" },
  { id: "VZ", ticker: "VZ", sector: "communication-services", industry: "Telecom Services", x: 618, y: 276, w: 36, h: 53, labelSize: "xs" },
  { id: "T", ticker: "T", sector: "communication-services", industry: "Telecom Services", x: 654, y: 276, w: 24, h: 53, labelSize: "xs" },
  { id: "APP", ticker: "APP", sector: "communication-services", industry: "Advertising Agencies", x: 678, y: 276, w: 49, h: 35, labelSize: "xs" },
  { id: "EA", ticker: "EA", sector: "communication-services", industry: "Electronic Gaming", x: 678, y: 311, w: 49, h: 18, labelSize: "xs" },

  // Financials
  { id: "JPM", ticker: "JPM", sector: "financial", industry: "Banks - Diversified", x: 452, y: 361, w: 70, h: 110, labelSize: "md" },
  { id: "BAC", ticker: "BAC", sector: "financial", industry: "Banks - Diversified", x: 522, y: 361, w: 83, h: 55, labelSize: "md" },
  { id: "WFC", ticker: "WFC", sector: "financial", industry: "Banks - Diversified", x: 522, y: 416, w: 83, h: 55, labelSize: "sm" },
  { id: "C", ticker: "C", sector: "financial", industry: "Banks - Diversified", x: 522, y: 471, w: 83, h: 54, labelSize: "md" },
  { id: "BRK-B", ticker: "BRK-B", sector: "financial", industry: "Insurance - Diversified", x: 452, y: 487, w: 118, h: 89, labelSize: "md" },
  { id: "MS", ticker: "MS", sector: "financial", industry: "Capital Markets", x: 452, y: 602, w: 43, h: 75, labelSize: "xs" },
  { id: "GS", ticker: "GS", sector: "financial", industry: "Capital Markets", x: 495, y: 602, w: 42, h: 75, labelSize: "xs" },
  { id: "SCHW", ticker: "SCHW", sector: "financial", industry: "Capital Markets", x: 537, y: 602, w: 41, h: 45, labelSize: "xs" },
  { id: "BLK", ticker: "BLK", sector: "financial", industry: "Asset Management", x: 578, y: 490, w: 32, h: 48, labelSize: "xs" },
  { id: "KKR", ticker: "KKR", sector: "financial", industry: "Asset Management", x: 610, y: 490, w: 30, h: 48, labelSize: "xs" },
  { id: "APO", ticker: "APO", sector: "financial", industry: "Asset Management", x: 640, y: 490, w: 38, h: 48, labelSize: "xs" },
  { id: "BX", ticker: "BX", sector: "financial", industry: "Asset Management", x: 578, y: 538, w: 32, h: 53, labelSize: "xs" },
  { id: "STT", ticker: "STT", sector: "financial", industry: "Asset Management", x: 610, y: 538, w: 30, h: 53, labelSize: "xs" },
  { id: "V", ticker: "V", sector: "financial", industry: "Credit Services", x: 605, y: 360, w: 79, h: 85, labelSize: "lg" },
  { id: "MA", ticker: "MA", sector: "financial", industry: "Credit Services", x: 684, y: 360, w: 43, h: 85, labelSize: "sm" },
  { id: "AXP", ticker: "AXP", sector: "financial", industry: "Credit Services", x: 605, y: 445, w: 72, h: 46, labelSize: "sm" },
  { id: "COF", ticker: "COF", sector: "financial", industry: "Credit Services", x: 677, y: 445, w: 50, h: 46, labelSize: "xs" },
  { id: "SPGI", ticker: "SPGI", sector: "financial", industry: "Financial Data", x: 678, y: 489, w: 27, h: 43, labelSize: "xs" },
  { id: "CME", ticker: "CME", sector: "financial", industry: "Financial Data", x: 705, y: 489, w: 22, h: 43, labelSize: "xs" },
  { id: "ICE", ticker: "ICE", sector: "financial", industry: "Financial Data", x: 678, y: 532, w: 27, h: 43, labelSize: "xs" },
  { id: "MCO", ticker: "MCO", sector: "financial", industry: "Financial Data", x: 705, y: 532, w: 22, h: 43, labelSize: "xs" },
  { id: "CB", ticker: "CB", sector: "financial", industry: "Insurance", x: 578, y: 591, w: 37, h: 42, labelSize: "xs" },
  { id: "TRV", ticker: "TRV", sector: "financial", industry: "Insurance", x: 615, y: 591, w: 35, h: 42, labelSize: "xs" },
  { id: "PGR", ticker: "PGR", sector: "financial", industry: "Insurance", x: 650, y: 591, w: 29, h: 42, labelSize: "xs" },
  { id: "ALL", ticker: "ALL", sector: "financial", industry: "Insurance", x: 578, y: 633, w: 37, h: 44, labelSize: "xs" },
  { id: "PNC", ticker: "PNC", sector: "financial", industry: "Banks - Regional", x: 679, y: 591, w: 32, h: 31, labelSize: "xs" },
  { id: "USB", ticker: "USB", sector: "financial", industry: "Banks - Regional", x: 711, y: 591, w: 16, h: 31, labelSize: "xs" },
  { id: "TFC", ticker: "TFC", sector: "financial", industry: "Banks - Regional", x: 679, y: 622, w: 32, h: 31, labelSize: "xs" },
  { id: "MTB", ticker: "MTB", sector: "financial", industry: "Banks - Regional", x: 679, y: 653, w: 32, h: 24, labelSize: "xs" },

  // Consumer Cyclical
  { id: "AMZN", ticker: "AMZN", sector: "consumer-cyclical", industry: "Internet Retail", x: 732, y: 30, w: 162, h: 174, labelSize: "xl" },
  { id: "TSLA", ticker: "TSLA", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 894, y: 30, w: 101, h: 174, labelSize: "lg" },
  { id: "GM", ticker: "GM", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 894, y: 204, w: 50, h: 25, labelSize: "xs" },
  { id: "F", ticker: "F", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 944, y: 204, w: 51, h: 25, labelSize: "xs" },
  { id: "HD", ticker: "HD", sector: "consumer-cyclical", industry: "Home Improvement Retail", x: 732, y: 219, w: 68, h: 67, labelSize: "md" },
  { id: "LOW", ticker: "LOW", sector: "consumer-cyclical", industry: "Home Improvement Retail", x: 800, y: 219, w: 26, h: 67, labelSize: "xs" },
  { id: "BKNG", ticker: "BKNG", sector: "consumer-cyclical", industry: "Travel Services", x: 826, y: 219, w: 38, h: 50, labelSize: "xs" },
  { id: "ABNB", ticker: "ABNB", sector: "consumer-cyclical", industry: "Travel Services", x: 864, y: 219, w: 31, h: 50, labelSize: "xs" },
  { id: "RCL", ticker: "RCL", sector: "consumer-cyclical", industry: "Travel Services", x: 826, y: 269, w: 69, h: 31, labelSize: "xs" },
  { id: "MAR", ticker: "MAR", sector: "consumer-cyclical", industry: "Lodging", x: 895, y: 219, w: 32, h: 31, labelSize: "xs" },
  { id: "HLT", ticker: "HLT", sector: "consumer-cyclical", industry: "Lodging", x: 927, y: 219, w: 30, h: 31, labelSize: "xs" },
  { id: "AZO", ticker: "AZO", sector: "consumer-cyclical", industry: "Auto Parts", x: 957, y: 219, w: 38, h: 31, labelSize: "xs" },
  { id: "MCD", ticker: "MCD", sector: "consumer-cyclical", industry: "Restaurants", x: 732, y: 286, w: 63, h: 42, labelSize: "sm" },
  { id: "YUM", ticker: "YUM", sector: "consumer-cyclical", industry: "Restaurants", x: 795, y: 286, w: 31, h: 42, labelSize: "xs" },
  { id: "CMG", ticker: "CMG", sector: "consumer-cyclical", industry: "Restaurants", x: 826, y: 300, w: 23, h: 28, labelSize: "xs" },
  { id: "TJX", ticker: "TJX", sector: "consumer-cyclical", industry: "Apparel Retail", x: 849, y: 300, w: 48, h: 28, labelSize: "sm" },
  { id: "NKE", ticker: "NKE", sector: "consumer-cyclical", industry: "Footwear & Accessories", x: 966, y: 254, w: 29, h: 24, labelSize: "xs" },

  // Industrials
  { id: "GE", ticker: "GE", sector: "industrials", industry: "Aerospace & Defense", x: 732, y: 357, w: 47, h: 74, labelSize: "md" },
  { id: "RTX", ticker: "RTX", sector: "industrials", industry: "Aerospace & Defense", x: 732, y: 431, w: 47, h: 48, labelSize: "sm" },
  { id: "BA", ticker: "BA", sector: "industrials", industry: "Aerospace & Defense", x: 779, y: 357, w: 46, h: 49, labelSize: "xs" },
  { id: "LMT", ticker: "LMT", sector: "industrials", industry: "Aerospace & Defense", x: 825, y: 357, w: 41, h: 49, labelSize: "xs" },
  { id: "HWM", ticker: "HWM", sector: "industrials", industry: "Aerospace & Defense", x: 779, y: 406, w: 39, h: 35, labelSize: "xs" },
  { id: "GD", ticker: "GD", sector: "industrials", industry: "Aerospace & Defense", x: 779, y: 441, w: 39, h: 38, labelSize: "xs" },
  { id: "NOC", ticker: "NOC", sector: "industrials", industry: "Aerospace & Defense", x: 818, y: 406, w: 24, h: 35, labelSize: "xs" },
  { id: "LHX", ticker: "LHX", sector: "industrials", industry: "Aerospace & Defense", x: 818, y: 441, w: 24, h: 38, labelSize: "xs" },
  { id: "CAT", ticker: "CAT", sector: "industrials", industry: "Farm & Heavy Construction", x: 868, y: 357, w: 55, h: 62, labelSize: "md" },
  { id: "DE", ticker: "DE", sector: "industrials", industry: "Farm & Heavy Construction", x: 923, y: 357, w: 43, h: 62, labelSize: "xs" },
  { id: "PCAR", ticker: "PCAR", sector: "industrials", industry: "Farm & Heavy Construction", x: 923, y: 419, w: 43, h: 27, labelSize: "xs" },
  { id: "UNP", ticker: "UNP", sector: "industrials", industry: "Railroads", x: 966, y: 357, w: 34, h: 55, labelSize: "xs" },
  { id: "NSC", ticker: "NSC", sector: "industrials", industry: "Railroads", x: 1000, y: 357, w: 25, h: 55, labelSize: "xs" },
  { id: "GEV", ticker: "GEV", sector: "industrials", industry: "Specialty Industrial Machinery", x: 732, y: 480, w: 51, h: 49, labelSize: "sm" },
  { id: "ETN", ticker: "ETN", sector: "industrials", industry: "Specialty Industrial Machinery", x: 732, y: 529, w: 51, h: 17, labelSize: "xs" },
  { id: "EMR", ticker: "EMR", sector: "industrials", industry: "Specialty Industrial Machinery", x: 783, y: 480, w: 45, h: 35, labelSize: "xs" },
  { id: "ITW", ticker: "ITW", sector: "industrials", industry: "Specialty Industrial Machinery", x: 828, y: 480, w: 39, h: 35, labelSize: "xs" },
  { id: "CMI", ticker: "CMI", sector: "industrials", industry: "Specialty Industrial Machinery", x: 783, y: 515, w: 45, h: 31, labelSize: "xs" },
  { id: "CARR", ticker: "CARR", sector: "industrials", industry: "Building Products", x: 867, y: 431, w: 34, h: 35, labelSize: "xs" },
  { id: "TT", ticker: "TT", sector: "industrials", industry: "Building Products", x: 867, y: 399, w: 28, h: 32, labelSize: "xs" },
  { id: "JCI", ticker: "JCI", sector: "industrials", industry: "Building Products", x: 895, y: 399, w: 28, h: 32, labelSize: "xs" },
  { id: "PWR", ticker: "PWR", sector: "industrials", industry: "Engineering & Construction", x: 923, y: 399, w: 30, h: 37, labelSize: "xs" },
  { id: "FIX", ticker: "FIX", sector: "industrials", industry: "Engineering & Construction", x: 953, y: 399, w: 35, h: 37, labelSize: "xs" },
  { id: "HON", ticker: "HON", sector: "industrials", industry: "Conglomerates", x: 988, y: 399, w: 37, h: 37, labelSize: "xs" },
  { id: "WM", ticker: "WM", sector: "industrials", industry: "Waste Management", x: 909, y: 455, w: 39, h: 39, labelSize: "xs" },
  { id: "RSG", ticker: "RSG", sector: "industrials", industry: "Waste Management", x: 948, y: 455, w: 32, h: 39, labelSize: "xs" },
  { id: "UPS", ticker: "UPS", sector: "industrials", industry: "Integrated Freight", x: 867, y: 494, w: 41, h: 35, labelSize: "xs" },
  { id: "FDX", ticker: "FDX", sector: "industrials", industry: "Integrated Freight", x: 908, y: 494, w: 41, h: 35, labelSize: "xs" },
  { id: "VRT", ticker: "VRT", sector: "industrials", industry: "Electrical Equipment", x: 908, y: 529, w: 41, h: 17, labelSize: "xs" },
  { id: "URI", ticker: "URI", sector: "industrials", industry: "Rental & Leasing", x: 949, y: 529, w: 31, h: 17, labelSize: "xs" },

  // Consumer Defensive
  { id: "WMT", ticker: "WMT", sector: "consumer-defensive", industry: "Discount Stores", x: 732, y: 564, w: 77, h: 113, labelSize: "lg" },
  { id: "COST", ticker: "COST", sector: "consumer-defensive", industry: "Discount Stores", x: 809, y: 564, w: 44, h: 83, labelSize: "xs" },
  { id: "TGT", ticker: "TGT", sector: "consumer-defensive", industry: "Discount Stores", x: 809, y: 647, w: 44, h: 30, labelSize: "xs" },
  { id: "KO", ticker: "KO", sector: "consumer-defensive", industry: "Beverages - Non-Alcoholic", x: 853, y: 564, w: 52, h: 68, labelSize: "md" },
  { id: "PEP", ticker: "PEP", sector: "consumer-defensive", industry: "Beverages - Non-Alcoholic", x: 905, y: 564, w: 48, h: 68, labelSize: "sm" },
  { id: "PG", ticker: "PG", sector: "consumer-defensive", industry: "Household & Personal Products", x: 853, y: 632, w: 52, h: 45, labelSize: "md" },
  { id: "CL", ticker: "CL", sector: "consumer-defensive", industry: "Household & Personal Products", x: 905, y: 632, w: 25, h: 45, labelSize: "xs" },
  { id: "PM", ticker: "PM", sector: "consumer-defensive", industry: "Tobacco", x: 953, y: 564, w: 44, h: 68, labelSize: "sm" },

  // Healthcare
  { id: "LLY", ticker: "LLY", sector: "healthcare", industry: "Drug Manufacturers - General", x: 997, y: 30, w: 81, h: 139, labelSize: "lg" },
  { id: "JNJ", ticker: "JNJ", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1078, y: 30, w: 76, h: 70, labelSize: "lg" },
  { id: "ABBV", ticker: "ABBV", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1154, y: 30, w: 61, h: 70, labelSize: "sm" },
  { id: "MRK", ticker: "MRK", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1078, y: 100, w: 39, h: 68, labelSize: "sm" },
  { id: "AMGN", ticker: "AMGN", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1117, y: 100, w: 43, h: 34, labelSize: "xs" },
  { id: "PFE", ticker: "PFE", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1160, y: 100, w: 55, h: 34, labelSize: "xs" },
  { id: "GILD", ticker: "GILD", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1117, y: 134, w: 43, h: 34, labelSize: "xs" },
  { id: "BMY", ticker: "BMY", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1160, y: 134, w: 55, h: 34, labelSize: "xs" },
  { id: "UNH", ticker: "UNH", sector: "healthcare", industry: "Healthcare Plans", x: 997, y: 182, w: 49, h: 70, labelSize: "sm" },
  { id: "CVS", ticker: "CVS", sector: "healthcare", industry: "Healthcare Plans", x: 1046, y: 182, w: 30, h: 35, labelSize: "xs" },
  { id: "ELV", ticker: "ELV", sector: "healthcare", industry: "Healthcare Plans", x: 1076, y: 182, w: 24, h: 35, labelSize: "xs" },
  { id: "CI", ticker: "CI", sector: "healthcare", industry: "Healthcare Plans", x: 1046, y: 217, w: 30, h: 35, labelSize: "xs" },
  { id: "HUM", ticker: "HUM", sector: "healthcare", industry: "Healthcare Plans", x: 1076, y: 217, w: 24, h: 35, labelSize: "xs" },
  { id: "TMO", ticker: "TMO", sector: "healthcare", industry: "Diagnostics & Research", x: 1100, y: 182, w: 47, h: 48, labelSize: "sm" },
  { id: "DHR", ticker: "DHR", sector: "healthcare", industry: "Diagnostics & Research", x: 1100, y: 230, w: 47, h: 45, labelSize: "sm" },
  { id: "ISRG", ticker: "ISRG", sector: "healthcare", industry: "Medical Devices", x: 1175, y: 182, w: 40, h: 35, labelSize: "xs" },
  { id: "ABT", ticker: "ABT", sector: "healthcare", industry: "Medical Devices", x: 997, y: 285, w: 30, h: 34, labelSize: "xs" },
  { id: "SYK", ticker: "SYK", sector: "healthcare", industry: "Medical Devices", x: 1027, y: 285, w: 44, h: 34, labelSize: "xs" },
  { id: "BSX", ticker: "BSX", sector: "healthcare", industry: "Medical Devices", x: 1071, y: 285, w: 24, h: 34, labelSize: "xs" },
  { id: "MDT", ticker: "MDT", sector: "healthcare", industry: "Medical Devices", x: 1027, y: 319, w: 44, h: 24, labelSize: "xs" },
  { id: "VRTX", ticker: "VRTX", sector: "healthcare", industry: "Biotechnology", x: 1095, y: 285, w: 39, h: 34, labelSize: "xs" },
  { id: "MCK", ticker: "MCK", sector: "healthcare", industry: "Medical Distribution", x: 1134, y: 285, w: 40, h: 34, labelSize: "xs" },
  { id: "HCA", ticker: "HCA", sector: "healthcare", industry: "Medical Care Facilities", x: 1174, y: 285, w: 41, h: 34, labelSize: "xs" },

  // Energy
  { id: "XOM", ticker: "XOM", sector: "energy", industry: "Oil & Gas Integrated", x: 1025, y: 344, w: 91, h: 63, labelSize: "lg" },
  { id: "CVX", ticker: "CVX", sector: "energy", industry: "Oil & Gas Integrated", x: 1025, y: 407, w: 91, h: 38, labelSize: "md" },
  { id: "COP", ticker: "COP", sector: "energy", industry: "Oil & Gas E&P", x: 1116, y: 344, w: 39, h: 40, labelSize: "xs" },
  { id: "EOG", ticker: "EOG", sector: "energy", industry: "Oil & Gas E&P", x: 1116, y: 384, w: 39, h: 30, labelSize: "xs" },
  { id: "WMB", ticker: "WMB", sector: "energy", industry: "Oil & Gas Midstream", x: 1175, y: 344, w: 40, h: 40, labelSize: "xs" },
  { id: "OXY", ticker: "OXY", sector: "energy", industry: "Oil & Gas E&P", x: 1116, y: 414, w: 39, h: 31, labelSize: "xs" },
  { id: "BKR", ticker: "BKR", sector: "energy", industry: "Oil & Gas Equipment", x: 1195, y: 414, w: 20, h: 31, labelSize: "xs" },

  // Utilities
  { id: "NEE", ticker: "NEE", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 469, w: 45, h: 45, labelSize: "sm" },
  { id: "SO", ticker: "SO", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1070, y: 469, w: 30, h: 45, labelSize: "xs" },
  { id: "DUK", ticker: "DUK", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1100, y: 469, w: 39, h: 45, labelSize: "xs" },
  { id: "AEP", ticker: "AEP", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 514, w: 24, h: 43, labelSize: "xs" },
  { id: "XEL", ticker: "XEL", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1049, y: 514, w: 26, h: 43, labelSize: "xs" },
  { id: "ED", ticker: "ED", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1075, y: 514, w: 24, h: 43, labelSize: "xs" },
  { id: "ETR", ticker: "ETR", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 557, w: 50, h: 30, labelSize: "xs" },
  { id: "CEG", ticker: "CEG", sector: "utilities", industry: "Utilities - Renewable", x: 1025, y: 571, w: 40, h: 16, labelSize: "xs" },
  { id: "SRE", ticker: "SRE", sector: "utilities", industry: "Utilities - Regulated Gas", x: 1075, y: 557, w: 28, h: 30, labelSize: "xs" },

  // Real Estate
  { id: "EQIX", ticker: "EQIX", sector: "real-estate", industry: "REIT - Specialty", x: 1139, y: 469, w: 37, h: 39, labelSize: "xs" },
  { id: "DLR", ticker: "DLR", sector: "real-estate", industry: "REIT - Specialty", x: 1176, y: 469, w: 39, h: 39, labelSize: "xs" },
  { id: "PLD", ticker: "PLD", sector: "real-estate", industry: "REIT - Industrial", x: 1139, y: 508, w: 37, h: 39, labelSize: "xs" },
  { id: "CCI", ticker: "CCI", sector: "real-estate", industry: "REIT - Specialty", x: 1176, y: 508, w: 39, h: 39, labelSize: "xs" },
  { id: "SPG", ticker: "SPG", sector: "real-estate", industry: "REIT - Retail", x: 1139, y: 547, w: 37, h: 40, labelSize: "xs" },
  { id: "O", ticker: "O", sector: "real-estate", industry: "REIT - Retail", x: 1176, y: 547, w: 20, h: 40, labelSize: "xs" },

  // Basic Materials
  { id: "LIN", ticker: "LIN", sector: "basic-materials", industry: "Specialty Chemicals", x: 997, y: 625, w: 49, h: 52, labelSize: "sm" },
  { id: "SHW", ticker: "SHW", sector: "basic-materials", industry: "Specialty Chemicals", x: 1046, y: 625, w: 30, h: 52, labelSize: "xs" },
  { id: "APD", ticker: "APD", sector: "basic-materials", industry: "Specialty Chemicals", x: 1076, y: 625, w: 29, h: 52, labelSize: "xs" },
  { id: "DD", ticker: "DD", sector: "basic-materials", industry: "Specialty Chemicals", x: 1105, y: 655, w: 24, h: 22, labelSize: "xs" },
  { id: "NUE", ticker: "NUE", sector: "basic-materials", industry: "Steel", x: 1186, y: 625, w: 29, h: 52, labelSize: "xs" },
  { id: "GOLD", ticker: "GOLD", sector: "basic-materials", industry: "Gold", x: 1129, y: 655, w: 57, h: 22, labelSize: "xs" },
  { id: "FCX", ticker: "FCX", sector: "basic-materials", industry: "Copper", x: 1158, y: 625, w: 28, h: 30, labelSize: "xs" },
];

export const stocksBySector = stocks.reduce<Record<SectorId, StockLayout[]>>((acc, stock) => {
  (acc[stock.sector] ??= []).push(stock);
  return acc;
}, {} as Record<SectorId, StockLayout[]>);
