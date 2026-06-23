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
  // TECHNOLOGY
  { id: "NVDA", ticker: "NVDA", sector: "technology", industry: "Semiconductors", x: 0, y: 16, w: 330, h: 185, labelSize: "xl" },
  { id: "AVGO", ticker: "AVGO", sector: "technology", industry: "Semiconductors", x: 330, y: 16, w: 120, h: 185, labelSize: "lg" },
  { id: "MU", ticker: "MU", sector: "technology", industry: "Semiconductors", x: 0, y: 201, w: 181, h: 79, labelSize: "md" },
  { id: "AMD", ticker: "AMD", sector: "technology", industry: "Semiconductors", x: 181, y: 201, w: 133, h: 79, labelSize: "md" },
  { id: "INTC", ticker: "INTC", sector: "technology", industry: "Semiconductors", x: 314, y: 201, w: 94, h: 79, labelSize: "sm" },
  { id: "TXN", ticker: "TXN", sector: "technology", industry: "Semiconductors", x: 408, y: 201, w: 42, h: 79, labelSize: "xs" },
  { id: "QCOM", ticker: "QCOM", sector: "technology", industry: "Semiconductors", x: 0, y: 280, w: 103, h: 26, labelSize: "xs" },
  { id: "ADI", ticker: "ADI", sector: "technology", industry: "Semiconductors", x: 0, y: 306, w: 103, h: 32, labelSize: "xs" },
  { id: "NXPI", ticker: "NXPI", sector: "technology", industry: "Semiconductors", x: 0, y: 338, w: 103, h: 10, labelSize: "xs" },
  { id: "MSFT", ticker: "MSFT", sector: "technology", industry: "Software - Infrastructure", x: 0, y: 348, w: 103, h: 329, labelSize: "xl" },
  { id: "ORCL", ticker: "ORCL", sector: "technology", industry: "Software - Infrastructure", x: 103, y: 280, w: 124, h: 53, labelSize: "md" },
  { id: "PLTR", ticker: "PLTR", sector: "technology", industry: "Software - Infrastructure", x: 227, y: 280, w: 78, h: 53, labelSize: "sm" },
  { id: "PANW", ticker: "PANW", sector: "technology", industry: "Software - Infrastructure", x: 305, y: 280, w: 47, h: 53, labelSize: "xs" },
  { id: "CRWD", ticker: "CRWD", sector: "technology", industry: "Software - Infrastructure", x: 352, y: 280, w: 37, h: 53, labelSize: "xs" },
  { id: "SNPS", ticker: "SNPS", sector: "technology", industry: "Software - Infrastructure", x: 389, y: 280, w: 40, h: 53, labelSize: "xs" },
  { id: "FTNT", ticker: "FTNT", sector: "technology", industry: "Software - Infrastructure", x: 429, y: 280, w: 21, h: 53, labelSize: "xs" },
  { id: "AAPL", ticker: "AAPL", sector: "technology", industry: "Consumer Electronics", x: 103, y: 333, w: 156, h: 344, labelSize: "xl" },
  { id: "LRCX", ticker: "LRCX", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 259, y: 333, w: 71, h: 71, labelSize: "sm" },
  { id: "AMAT", ticker: "AMAT", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 330, y: 333, w: 72, h: 71, labelSize: "sm" },
  { id: "KLAC", ticker: "KLAC", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 402, y: 333, w: 48, h: 71, labelSize: "xs" },
  { id: "TER", ticker: "TER", sector: "technology", industry: "Semiconductor Equipment & Materials", x: 259, y: 404, w: 15, h: 41, labelSize: "xs" },
  { id: "SNX", ticker: "SNX", sector: "technology", industry: "Computer Hardware", x: 274, y: 404, w: 113, h: 41, labelSize: "sm" },
  { id: "DELL", ticker: "DELL", sector: "technology", industry: "Computer Hardware", x: 387, y: 404, w: 63, h: 41, labelSize: "xs" },
  { id: "STX", ticker: "STX", sector: "technology", industry: "Computer Hardware", x: 259, y: 445, w: 67, h: 68, labelSize: "sm" },
  { id: "WDC", ticker: "WDC", sector: "technology", industry: "Computer Hardware", x: 326, y: 445, w: 80, h: 68, labelSize: "sm" },
  { id: "ANET", ticker: "ANET", sector: "technology", industry: "Computer Hardware", x: 406, y: 445, w: 44, h: 68, labelSize: "xs" },
  { id: "UBER", ticker: "UBER", sector: "technology", industry: "Software - Application", x: 259, y: 513, w: 42, h: 44, labelSize: "xs" },
  { id: "CRM", ticker: "CRM", sector: "technology", industry: "Software - Application", x: 259, y: 557, w: 42, h: 38, labelSize: "xs" },
  { id: "CDNS", ticker: "CDNS", sector: "technology", industry: "Software - Application", x: 259, y: 595, w: 42, h: 44, labelSize: "xs" },
  { id: "NOW", ticker: "NOW", sector: "technology", industry: "Software - Application", x: 259, y: 639, w: 42, h: 38, labelSize: "xs" },
  { id: "ADBE", ticker: "ADBE", sector: "technology", industry: "Software - Application", x: 301, y: 513, w: 54, h: 24, labelSize: "xs" },
  { id: "INTU", ticker: "INTU", sector: "technology", industry: "Software - Application", x: 355, y: 513, w: 48, h: 24, labelSize: "xs" },
  { id: "ROP", ticker: "ROP", sector: "technology", industry: "Software - Application", x: 403, y: 513, w: 47, h: 24, labelSize: "xs" },
  { id: "CSCO", ticker: "CSCO", sector: "technology", industry: "Communication Equipment", x: 301, y: 537, w: 58, h: 83, labelSize: "sm" },
  { id: "APH", ticker: "APH", sector: "technology", industry: "Electronic Components", x: 301, y: 620, w: 58, h: 57, labelSize: "sm" },
  { id: "GLW", ticker: "GLW", sector: "technology", industry: "Electronic Components", x: 359, y: 537, w: 44, h: 18, labelSize: "xs" },
  { id: "TEL", ticker: "TEL", sector: "technology", industry: "Electronic Components", x: 403, y: 537, w: 47, h: 18, labelSize: "xs" },
  { id: "IBM", ticker: "IBM", sector: "technology", industry: "Information Technology Services", x: 359, y: 555, w: 91, h: 45, labelSize: "sm" },
  { id: "ACN", ticker: "ACN", sector: "technology", industry: "Information Technology Services", x: 359, y: 600, w: 29, h: 37, labelSize: "xs" },
  { id: "BR", ticker: "BR", sector: "technology", industry: "Information Technology Services", x: 359, y: 637, w: 29, h: 40, labelSize: "xs" },
  { id: "LITE", ticker: "LITE", sector: "technology", industry: "Communication Equipment", x: 388, y: 600, w: 31, h: 29, labelSize: "xs" },
  { id: "CIEN", ticker: "CIEN", sector: "technology", industry: "Communication Equipment", x: 419, y: 600, w: 31, h: 29, labelSize: "xs" },
  { id: "MSI", ticker: "MSI", sector: "technology", industry: "Communication Equipment", x: 388, y: 629, w: 33, h: 24, labelSize: "xs" },
  { id: "HPE", ticker: "HPE", sector: "technology", industry: "Communication Equipment", x: 388, y: 653, w: 33, h: 24, labelSize: "xs" },
  { id: "COHR", ticker: "COHR", sector: "technology", industry: "Scientific & Technical Instruments", x: 421, y: 629, w: 29, h: 48, labelSize: "xs" },

  // COMMUNICATION SERVICES
  { id: "GOOGL", ticker: "GOOGL", sector: "communication-services", industry: "Internet Content & Information", x: 450, y: 16, w: 278, h: 190, labelSize: "xl" },
  { id: "META", ticker: "META", sector: "communication-services", industry: "Internet Content & Information", x: 450, y: 206, w: 147, h: 123, labelSize: "sm" },
  { id: "NFLX", ticker: "NFLX", sector: "communication-services", industry: "Entertainment", x: 597, y: 206, w: 55, h: 51, labelSize: "xs" },
  { id: "DIS", ticker: "DIS", sector: "communication-services", industry: "Entertainment", x: 597, y: 257, w: 55, h: 39, labelSize: "xs" },
  { id: "WBD", ticker: "WBD", sector: "communication-services", industry: "Entertainment", x: 597, y: 296, w: 55, h: 33, labelSize: "xs" },
  { id: "TMUS", ticker: "TMUS", sector: "communication-services", industry: "Telecom Services", x: 652, y: 206, w: 76, h: 39, labelSize: "xs" },
  { id: "VZ", ticker: "VZ", sector: "communication-services", industry: "Telecom Services", x: 652, y: 245, w: 46, h: 46, labelSize: "xs" },
  { id: "T", ticker: "T", sector: "communication-services", industry: "Telecom Services", x: 698, y: 245, w: 30, h: 46, labelSize: "xs" },
  { id: "APP", ticker: "APP", sector: "communication-services", industry: "Advertising Agencies", x: 652, y: 291, w: 50, h: 38, labelSize: "xs" },
  { id: "EA", ticker: "EA", sector: "communication-services", industry: "Electronic Gaming", x: 702, y: 291, w: 26, h: 38, labelSize: "xs" },

  // FINANCIAL
  { id: "JPM", ticker: "JPM", sector: "financial", industry: "Banks - Diversified", x: 450, y: 345, w: 100, h: 91, labelSize: "md" },
  { id: "BAC", ticker: "BAC", sector: "financial", industry: "Banks - Diversified", x: 550, y: 345, w: 60, h: 91, labelSize: "md" },
  { id: "WFC", ticker: "WFC", sector: "financial", industry: "Banks - Diversified", x: 610, y: 345, w: 60, h: 91, labelSize: "sm" },
  { id: "C", ticker: "C", sector: "financial", industry: "Banks - Diversified", x: 670, y: 345, w: 58, h: 91, labelSize: "md" },
  { id: "BRK-B", ticker: "BRK-B", sector: "financial", industry: "Insurance - Diversified", x: 450, y: 436, w: 84, h: 150, labelSize: "md" },
  { id: "MS", ticker: "MS", sector: "financial", industry: "Capital Markets", x: 450, y: 586, w: 84, h: 46, labelSize: "xs" },
  { id: "GS", ticker: "GS", sector: "financial", industry: "Capital Markets", x: 450, y: 632, w: 84, h: 45, labelSize: "xs" },
  { id: "SCHW", ticker: "SCHW", sector: "financial", industry: "Capital Markets", x: 534, y: 436, w: 54, h: 41, labelSize: "xs" },
  { id: "BLK", ticker: "BLK", sector: "financial", industry: "Asset Management", x: 588, y: 436, w: 45, h: 41, labelSize: "xs" },
  { id: "KKR", ticker: "KKR", sector: "financial", industry: "Asset Management", x: 633, y: 436, w: 42, h: 41, labelSize: "xs" },
  { id: "APO", ticker: "APO", sector: "financial", industry: "Asset Management", x: 675, y: 436, w: 53, h: 41, labelSize: "xs" },
  { id: "BX", ticker: "BX", sector: "financial", industry: "Asset Management", x: 534, y: 477, w: 33, h: 61, labelSize: "xs" },
  { id: "STT", ticker: "STT", sector: "financial", industry: "Asset Management", x: 567, y: 477, w: 30, h: 61, labelSize: "xs" },
  { id: "V", ticker: "V", sector: "financial", industry: "Credit Services", x: 597, y: 477, w: 131, h: 61, labelSize: "lg" },
  { id: "MA", ticker: "MA", sector: "financial", industry: "Credit Services", x: 534, y: 538, w: 60, h: 73, labelSize: "sm" },
  { id: "AXP", ticker: "AXP", sector: "financial", industry: "Credit Services", x: 534, y: 611, w: 60, h: 66, labelSize: "sm" },
  { id: "COF", ticker: "COF", sector: "financial", industry: "Credit Services", x: 594, y: 538, w: 70, h: 40, labelSize: "xs" },
  { id: "SPGI", ticker: "SPGI", sector: "financial", industry: "Financial Data", x: 664, y: 538, w: 35, h: 40, labelSize: "xs" },
  { id: "CME", ticker: "CME", sector: "financial", industry: "Financial Data", x: 699, y: 538, w: 29, h: 40, labelSize: "xs" },
  { id: "ICE", ticker: "ICE", sector: "financial", industry: "Financial Data", x: 594, y: 578, w: 43, h: 31, labelSize: "xs" },
  { id: "MCO", ticker: "MCO", sector: "financial", industry: "Financial Data", x: 594, y: 609, w: 43, h: 26, labelSize: "xs" },
  { id: "CB", ticker: "CB", sector: "financial", industry: "Insurance", x: 594, y: 635, w: 43, h: 42, labelSize: "xs" },
  { id: "TRV", ticker: "TRV", sector: "financial", industry: "Insurance", x: 637, y: 578, w: 50, h: 35, labelSize: "xs" },
  { id: "PGR", ticker: "PGR", sector: "financial", industry: "Insurance", x: 687, y: 578, w: 41, h: 35, labelSize: "xs" },
  { id: "ALL", ticker: "ALL", sector: "financial", industry: "Insurance", x: 637, y: 613, w: 49, h: 40, labelSize: "xs" },
  { id: "PNC", ticker: "PNC", sector: "financial", industry: "Banks - Regional", x: 637, y: 653, w: 49, h: 24, labelSize: "xs" },
  { id: "USB", ticker: "USB", sector: "financial", industry: "Banks - Regional", x: 686, y: 613, w: 42, h: 14, labelSize: "xs" },
  { id: "TFC", ticker: "TFC", sector: "financial", industry: "Banks - Regional", x: 686, y: 627, w: 42, h: 28, labelSize: "xs" },
  { id: "MTB", ticker: "MTB", sector: "financial", industry: "Banks - Regional", x: 686, y: 655, w: 42, h: 22, labelSize: "xs" },

  // CONSUMER CYCLICAL
  { id: "AMZN", ticker: "AMZN", sector: "consumer-cyclical", industry: "Internet Retail", x: 728, y: 16, w: 166, h: 205, labelSize: "xl" },
  { id: "TSLA", ticker: "TSLA", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 894, y: 16, w: 103, h: 205, labelSize: "lg" },
  { id: "GM", ticker: "GM", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 728, y: 221, w: 28, h: 53, labelSize: "xs" },
  { id: "F", ticker: "F", sector: "consumer-cyclical", industry: "Auto Manufacturers", x: 728, y: 274, w: 28, h: 55, labelSize: "xs" },
  { id: "HD", ticker: "HD", sector: "consumer-cyclical", industry: "Home Improvement Retail", x: 756, y: 221, w: 51, h: 108, labelSize: "md" },
  { id: "LOW", ticker: "LOW", sector: "consumer-cyclical", industry: "Home Improvement Retail", x: 807, y: 221, w: 40, h: 52, labelSize: "xs" },
  { id: "BKNG", ticker: "BKNG", sector: "consumer-cyclical", industry: "Travel Services", x: 807, y: 273, w: 40, h: 56, labelSize: "xs" },
  { id: "ABNB", ticker: "ABNB", sector: "consumer-cyclical", industry: "Travel Services", x: 847, y: 221, w: 42, h: 45, labelSize: "xs" },
  { id: "RCL", ticker: "RCL", sector: "consumer-cyclical", industry: "Travel Services", x: 847, y: 266, w: 42, h: 63, labelSize: "xs" },
  { id: "MAR", ticker: "MAR", sector: "consumer-cyclical", industry: "Lodging", x: 889, y: 221, w: 34, h: 34, labelSize: "xs" },
  { id: "HLT", ticker: "HLT", sector: "consumer-cyclical", industry: "Lodging", x: 889, y: 255, w: 34, h: 33, labelSize: "xs" },
  { id: "AZO", ticker: "AZO", sector: "consumer-cyclical", industry: "Auto Parts", x: 889, y: 288, w: 34, h: 41, labelSize: "xs" },
  { id: "MCD", ticker: "MCD", sector: "consumer-cyclical", industry: "Restaurants", x: 923, y: 221, w: 74, h: 43, labelSize: "sm" },
  { id: "YUM", ticker: "YUM", sector: "consumer-cyclical", industry: "Restaurants", x: 923, y: 264, w: 36, h: 43, labelSize: "xs" },
  { id: "CMG", ticker: "CMG", sector: "consumer-cyclical", industry: "Restaurants", x: 923, y: 307, w: 36, h: 22, labelSize: "xs" },
  { id: "TJX", ticker: "TJX", sector: "consumer-cyclical", industry: "Apparel Retail", x: 959, y: 264, w: 38, h: 43, labelSize: "sm" },
  { id: "NKE", ticker: "NKE", sector: "consumer-cyclical", industry: "Footwear & Accessories", x: 959, y: 307, w: 38, h: 22, labelSize: "xs" },

  // INDUSTRIALS
  { id: "GE", ticker: "GE", sector: "industrials", industry: "Aerospace & Defense", x: 728, y: 345, w: 64, h: 70, labelSize: "md" },
  { id: "RTX", ticker: "RTX", sector: "industrials", industry: "Aerospace & Defense", x: 728, y: 415, w: 64, h: 45, labelSize: "sm" },
  { id: "BA", ticker: "BA", sector: "industrials", industry: "Aerospace & Defense", x: 728, y: 460, w: 64, h: 46, labelSize: "xs" },
  { id: "LMT", ticker: "LMT", sector: "industrials", industry: "Aerospace & Defense", x: 728, y: 506, w: 64, h: 40, labelSize: "xs" },
  { id: "HWM", ticker: "HWM", sector: "industrials", industry: "Aerospace & Defense", x: 792, y: 345, w: 29, h: 60, labelSize: "xs" },
  { id: "GD", ticker: "GD", sector: "industrials", industry: "Aerospace & Defense", x: 792, y: 405, w: 29, h: 64, labelSize: "xs" },
  { id: "NOC", ticker: "NOC", sector: "industrials", industry: "Aerospace & Defense", x: 792, y: 469, w: 29, h: 37, labelSize: "xs" },
  { id: "LHX", ticker: "LHX", sector: "industrials", industry: "Aerospace & Defense", x: 792, y: 506, w: 29, h: 40, labelSize: "xs" },
  { id: "CAT", ticker: "CAT", sector: "industrials", industry: "Farm & Heavy Construction", x: 821, y: 345, w: 47, h: 95, labelSize: "md" },
  { id: "DE", ticker: "DE", sector: "industrials", industry: "Farm & Heavy Construction", x: 821, y: 440, w: 47, h: 74, labelSize: "xs" },
  { id: "PCAR", ticker: "PCAR", sector: "industrials", industry: "Farm & Heavy Construction", x: 821, y: 514, w: 47, h: 32, labelSize: "xs" },
  { id: "UNP", ticker: "UNP", sector: "industrials", industry: "Railroads", x: 868, y: 345, w: 51, h: 47, labelSize: "xs" },
  { id: "NSC", ticker: "NSC", sector: "industrials", industry: "Railroads", x: 919, y: 345, w: 38, h: 47, labelSize: "xs" },
  { id: "GEV", ticker: "GEV", sector: "industrials", industry: "Specialty Industrial Machinery", x: 957, y: 345, w: 68, h: 47, labelSize: "sm" },
  { id: "ETN", ticker: "ETN", sector: "industrials", industry: "Specialty Industrial Machinery", x: 868, y: 392, w: 43, h: 26, labelSize: "xs" },
  { id: "EMR", ticker: "EMR", sector: "industrials", industry: "Specialty Industrial Machinery", x: 868, y: 418, w: 43, h: 46, labelSize: "xs" },
  { id: "ITW", ticker: "ITW", sector: "industrials", industry: "Specialty Industrial Machinery", x: 868, y: 464, w: 43, h: 41, labelSize: "xs" },
  { id: "CMI", ticker: "CMI", sector: "industrials", industry: "Specialty Industrial Machinery", x: 868, y: 505, w: 43, h: 41, labelSize: "xs" },
  { id: "CARR", ticker: "CARR", sector: "industrials", industry: "Building Products", x: 911, y: 392, w: 46, h: 34, labelSize: "xs" },
  { id: "TT", ticker: "TT", sector: "industrials", industry: "Building Products", x: 957, y: 392, w: 34, h: 34, labelSize: "xs" },
  { id: "JCI", ticker: "JCI", sector: "industrials", industry: "Building Products", x: 991, y: 392, w: 34, h: 34, labelSize: "xs" },
  { id: "PWR", ticker: "PWR", sector: "industrials", industry: "Engineering & Construction", x: 911, y: 426, w: 34, h: 42, labelSize: "xs" },
  { id: "FIX", ticker: "FIX", sector: "industrials", industry: "Engineering & Construction", x: 945, y: 426, w: 39, h: 42, labelSize: "xs" },
  { id: "HON", ticker: "HON", sector: "industrials", industry: "Conglomerates", x: 984, y: 426, w: 41, h: 42, labelSize: "xs" },
  { id: "WM", ticker: "WM", sector: "industrials", industry: "Waste Management", x: 911, y: 468, w: 46, h: 43, labelSize: "xs" },
  { id: "RSG", ticker: "RSG", sector: "industrials", industry: "Waste Management", x: 911, y: 511, w: 46, h: 35, labelSize: "xs" },
  { id: "UPS", ticker: "UPS", sector: "industrials", industry: "Integrated Freight", x: 957, y: 468, w: 34, h: 55, labelSize: "xs" },
  { id: "FDX", ticker: "FDX", sector: "industrials", industry: "Integrated Freight", x: 991, y: 468, w: 34, h: 55, labelSize: "xs" },
  { id: "VRT", ticker: "VRT", sector: "industrials", industry: "Electrical Equipment", x: 957, y: 523, w: 39, h: 23, labelSize: "xs" },
  { id: "URI", ticker: "URI", sector: "industrials", industry: "Rental & Leasing", x: 996, y: 523, w: 29, h: 23, labelSize: "xs" },

  // CONSUMER DEFENSIVE
  { id: "WMT", ticker: "WMT", sector: "consumer-defensive", industry: "Discount Stores", x: 728, y: 562, w: 87, h: 115, labelSize: "lg" },
  { id: "COST", ticker: "COST", sector: "consumer-defensive", industry: "Discount Stores", x: 815, y: 562, w: 50, h: 84, labelSize: "xs" },
  { id: "TGT", ticker: "TGT", sector: "consumer-defensive", industry: "Discount Stores", x: 815, y: 646, w: 50, h: 31, labelSize: "xs" },
  { id: "KO", ticker: "KO", sector: "consumer-defensive", industry: "Beverages - Non-Alcoholic", x: 865, y: 562, w: 68, h: 60, labelSize: "md" },
  { id: "PEP", ticker: "PEP", sector: "consumer-defensive", industry: "Beverages - Non-Alcoholic", x: 865, y: 622, w: 68, h: 55, labelSize: "sm" },
  { id: "PG", ticker: "PG", sector: "consumer-defensive", industry: "Household & Personal Products", x: 933, y: 562, w: 64, h: 42, labelSize: "md" },
  { id: "CL", ticker: "CL", sector: "consumer-defensive", industry: "Household & Personal Products", x: 933, y: 604, w: 64, h: 20, labelSize: "xs" },
  { id: "PM", ticker: "PM", sector: "consumer-defensive", industry: "Tobacco", x: 933, y: 624, w: 64, h: 53, labelSize: "sm" },

  // HEALTHCARE
  { id: "LLY", ticker: "LLY", sector: "healthcare", industry: "Drug Manufacturers - General", x: 997, y: 16, w: 148, h: 97, labelSize: "lg" },
  { id: "JNJ", ticker: "JNJ", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1145, y: 16, w: 70, h: 97, labelSize: "lg" },
  { id: "ABBV", ticker: "ABBV", sector: "healthcare", industry: "Drug Manufacturers - General", x: 997, y: 113, w: 52, h: 105, labelSize: "sm" },
  { id: "MRK", ticker: "MRK", sector: "healthcare", industry: "Drug Manufacturers - General", x: 997, y: 218, w: 52, h: 65, labelSize: "sm" },
  { id: "AMGN", ticker: "AMGN", sector: "healthcare", industry: "Drug Manufacturers - General", x: 997, y: 283, w: 52, h: 36, labelSize: "xs" },
  { id: "PFE", ticker: "PFE", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1049, y: 113, w: 60, h: 40, labelSize: "xs" },
  { id: "GILD", ticker: "GILD", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1109, y: 113, w: 46, h: 40, labelSize: "xs" },
  { id: "BMY", ticker: "BMY", sector: "healthcare", industry: "Drug Manufacturers - General", x: 1155, y: 113, w: 60, h: 40, labelSize: "xs" },
  { id: "UNH", ticker: "UNH", sector: "healthcare", industry: "Healthcare Plans", x: 1049, y: 153, w: 49, h: 90, labelSize: "sm" },
  { id: "CVS", ticker: "CVS", sector: "healthcare", industry: "Healthcare Plans", x: 1049, y: 243, w: 49, h: 27, labelSize: "xs" },
  { id: "ELV", ticker: "ELV", sector: "healthcare", industry: "Healthcare Plans", x: 1049, y: 270, w: 49, h: 22, labelSize: "xs" },
  { id: "CI", ticker: "CI", sector: "healthcare", industry: "Healthcare Plans", x: 1049, y: 292, w: 49, h: 27, labelSize: "xs" },
  { id: "HUM", ticker: "HUM", sector: "healthcare", industry: "Healthcare Plans", x: 1098, y: 153, w: 32, h: 34, labelSize: "xs" },
  { id: "TMO", ticker: "TMO", sector: "healthcare", industry: "Diagnostics & Research", x: 1130, y: 153, w: 85, h: 34, labelSize: "sm" },
  { id: "DHR", ticker: "DHR", sector: "healthcare", industry: "Diagnostics & Research", x: 1098, y: 187, w: 71, h: 39, labelSize: "sm" },
  { id: "ISRG", ticker: "ISRG", sector: "healthcare", industry: "Medical Devices", x: 1169, y: 187, w: 46, h: 39, labelSize: "xs" },
  { id: "ABT", ticker: "ABT", sector: "healthcare", industry: "Medical Devices", x: 1098, y: 226, w: 35, h: 38, labelSize: "xs" },
  { id: "SYK", ticker: "SYK", sector: "healthcare", industry: "Medical Devices", x: 1098, y: 264, w: 35, h: 55, labelSize: "xs" },
  { id: "BSX", ticker: "BSX", sector: "healthcare", industry: "Medical Devices", x: 1133, y: 226, w: 36, h: 29, labelSize: "xs" },
  { id: "MDT", ticker: "MDT", sector: "healthcare", industry: "Medical Devices", x: 1169, y: 226, w: 46, h: 29, labelSize: "xs" },
  { id: "VRTX", ticker: "VRTX", sector: "healthcare", industry: "Biotechnology", x: 1133, y: 255, w: 54, h: 32, labelSize: "xs" },
  { id: "MCK", ticker: "MCK", sector: "healthcare", industry: "Medical Distribution", x: 1133, y: 287, w: 54, h: 32, labelSize: "xs" },
  { id: "HCA", ticker: "HCA", sector: "healthcare", industry: "Medical Care Facilities", x: 1187, y: 255, w: 28, h: 64, labelSize: "xs" },

  // ENERGY
  { id: "XOM", ticker: "XOM", sector: "energy", industry: "Oil & Gas Integrated", x: 1025, y: 335, w: 71, h: 110, labelSize: "lg" },
  { id: "CVX", ticker: "CVX", sector: "energy", industry: "Oil & Gas Integrated", x: 1096, y: 335, w: 62, h: 76, labelSize: "md" },
  { id: "COP", ticker: "COP", sector: "energy", industry: "Oil & Gas E&P", x: 1096, y: 411, w: 62, h: 34, labelSize: "xs" },
  { id: "EOG", ticker: "EOG", sector: "energy", industry: "Oil & Gas E&P", x: 1158, y: 335, w: 57, h: 28, labelSize: "xs" },
  { id: "WMB", ticker: "WMB", sector: "energy", industry: "Oil & Gas Midstream", x: 1158, y: 363, w: 57, h: 38, labelSize: "xs" },
  { id: "OXY", ticker: "OXY", sector: "energy", industry: "Oil & Gas E&P", x: 1158, y: 401, w: 38, h: 44, labelSize: "xs" },
  { id: "BKR", ticker: "BKR", sector: "energy", industry: "Oil & Gas Equipment", x: 1196, y: 401, w: 19, h: 44, labelSize: "xs" },

  // UTILITIES
  { id: "NEE", ticker: "NEE", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 461, w: 68, h: 38, labelSize: "sm" },
  { id: "SO", ticker: "SO", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1093, y: 461, w: 46, h: 38, labelSize: "xs" },
  { id: "DUK", ticker: "DUK", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 499, w: 40, h: 55, labelSize: "xs" },
  { id: "AEP", ticker: "AEP", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1025, y: 554, w: 40, h: 33, labelSize: "xs" },
  { id: "XEL", ticker: "XEL", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1065, y: 499, w: 39, h: 37, labelSize: "xs" },
  { id: "ED", ticker: "ED", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1104, y: 499, w: 35, h: 37, labelSize: "xs" },
  { id: "ETR", ticker: "ETR", sector: "utilities", industry: "Utilities - Regulated Electric", x: 1065, y: 536, w: 37, h: 51, labelSize: "xs" },
  { id: "CEG", ticker: "CEG", sector: "utilities", industry: "Utilities - Renewable", x: 1102, y: 536, w: 37, h: 22, labelSize: "xs" },
  { id: "SRE", ticker: "SRE", sector: "utilities", industry: "Utilities - Regulated Gas", x: 1102, y: 558, w: 37, h: 29, labelSize: "xs" },

  // REAL ESTATE
  { id: "EQIX", ticker: "EQIX", sector: "real-estate", industry: "REIT - Specialty", x: 1139, y: 461, w: 37, h: 46, labelSize: "xs" },
  { id: "DLR", ticker: "DLR", sector: "real-estate", industry: "REIT - Specialty", x: 1176, y: 461, w: 39, h: 46, labelSize: "xs" },
  { id: "PLD", ticker: "PLD", sector: "real-estate", industry: "REIT - Industrial", x: 1139, y: 507, w: 37, h: 45, labelSize: "xs" },
  { id: "CCI", ticker: "CCI", sector: "real-estate", industry: "REIT - Specialty", x: 1176, y: 507, w: 39, h: 45, labelSize: "xs" },
  { id: "SPG", ticker: "SPG", sector: "real-estate", industry: "REIT - Retail", x: 1139, y: 552, w: 49, h: 35, labelSize: "xs" },
  { id: "O", ticker: "O", sector: "real-estate", industry: "REIT - Retail", x: 1188, y: 552, w: 27, h: 35, labelSize: "xs" },

  // BASIC MATERIALS
  { id: "LIN", ticker: "LIN", sector: "basic-materials", industry: "Specialty Chemicals", x: 997, y: 603, w: 57, h: 74, labelSize: "sm" },
  { id: "SHW", ticker: "SHW", sector: "basic-materials", industry: "Specialty Chemicals", x: 1054, y: 603, w: 69, h: 38, labelSize: "xs" },
  { id: "APD", ticker: "APD", sector: "basic-materials", industry: "Specialty Chemicals", x: 1054, y: 641, w: 69, h: 36, labelSize: "xs" },
  { id: "DD", ticker: "DD", sector: "basic-materials", industry: "Specialty Chemicals", x: 1123, y: 603, w: 45, h: 19, labelSize: "xs" },
  { id: "NUE", ticker: "NUE", sector: "basic-materials", industry: "Steel", x: 1123, y: 622, w: 45, h: 55, labelSize: "xs" },
  { id: "GOLD", ticker: "GOLD", sector: "basic-materials", industry: "Gold", x: 1168, y: 603, w: 47, h: 44, labelSize: "xs" },
  { id: "FCX", ticker: "FCX", sector: "basic-materials", industry: "Copper", x: 1168, y: 647, w: 47, h: 30, labelSize: "xs" },

];

export const stocksBySector = stocks.reduce<Record<SectorId, StockLayout[]>>((acc, stock) => {
  (acc[stock.sector] ??= []).push(stock);
  return acc;
}, {} as Record<SectorId, StockLayout[]>);
