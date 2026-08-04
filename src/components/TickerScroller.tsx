"use client";

// Design Ref: DESIGN.md addendum — swipeable ticker with arrow buttons
// (user request, capture3.jpg: circular ‹ › buttons at the end of the bar).
import { useRef } from "react";
import type { Indicator } from "@/lib/market-data";

const SCROLL_STEP = 240;

export function TickerScroller({ indicators }: { indicators: Indicator[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * SCROLL_STEP,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-1.5">
      <div
        ref={scrollerRef}
        className="flex flex-1 gap-6 overflow-x-auto whitespace-nowrap text-xs sm:text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {indicators.map((indicator) => {
          const isUp = indicator.changePercent >= 0;
          return (
            <span key={indicator.label} className="flex shrink-0 items-center gap-1.5">
              <span className="font-semibold">{indicator.label}</span>
              <span>
                {indicator.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span className={isUp ? "text-green-400" : "text-red-400"}>
                {isUp ? "▲" : "▼"} {Math.abs(indicator.changePercent).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
      <div className="flex shrink-0 gap-1">
        <button
          type="button"
          aria-label="Scroll indicators left"
          onClick={() => scroll(-1)}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 text-xs"
        >
          &#8249;
        </button>
        <button
          type="button"
          aria-label="Scroll indicators right"
          onClick={() => scroll(1)}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 text-xs"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
