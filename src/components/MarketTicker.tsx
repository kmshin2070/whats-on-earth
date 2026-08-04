// Design Ref: DESIGN.md addendum — FT/Bloomberg-style index ticker bar.
// Server Component: fetches data, hands it to the client-side scroller.
import { getMarketIndicators } from "@/lib/market-data";
import { TickerScroller } from "./TickerScroller";

export async function MarketTicker() {
  const indicators = await getMarketIndicators();
  if (indicators.length === 0) return null;

  return (
    <div className="border-b border-neutral-800 bg-black text-white">
      <TickerScroller indicators={indicators} />
    </div>
  );
}
