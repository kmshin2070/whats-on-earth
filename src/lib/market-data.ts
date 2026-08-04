// Design Ref: DESIGN.md addendum (layout upgrade) — live market ticker.
// Uses a real, keyless quote source (Yahoo Finance's public chart endpoint)
// with Next.js ISR (60s revalidate), unlike the Issue data which stays a
// fully static build-time file. A failed/blocked fetch degrades to an empty
// ticker rather than breaking the page.
export type Indicator = {
  label: string;
  price: number;
  changePercent: number;
};

const SYMBOLS: { symbol: string; label: string }[] = [
  { symbol: "^GSPC", label: "S&P 500" },
  { symbol: "^IXIC", label: "Nasdaq" },
  { symbol: "^FTSE", label: "FTSE 100" },
  { symbol: "EURUSD=X", label: "EUR/USD" },
  { symbol: "CL=F", label: "Crude Oil" },
  { symbol: "^TNX", label: "10Y US Treasury" },
];

async function fetchIndicator(
  symbol: string,
  label: string
): Promise<Indicator | null> {
  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
        symbol
      )}?interval=1d&range=1d`,
      {
        headers: { "User-Agent": "Mozilla/5.0" },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;

    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    const price = meta?.regularMarketPrice;
    const prevClose = meta?.chartPreviousClose;
    if (
      typeof price !== "number" ||
      typeof prevClose !== "number" ||
      prevClose === 0
    ) {
      return null;
    }

    return { label, price, changePercent: ((price - prevClose) / prevClose) * 100 };
  } catch {
    return null;
  }
}

export async function getMarketIndicators(): Promise<Indicator[]> {
  const results = await Promise.all(
    SYMBOLS.map(({ symbol, label }) => fetchIndicator(symbol, label))
  );
  return results.filter((indicator): indicator is Indicator => indicator !== null);
}
