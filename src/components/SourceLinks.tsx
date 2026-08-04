// Design Ref: DESIGN.md §1.3 — 1-3 outbound links, never a verbatim excerpt.
import type { Source } from "@/types/issue";

export function SourceLinks({ sources }: { sources: Source[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
      {sources.map((source) => (
        <li key={source.url}>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {source.outlet}
          </a>
        </li>
      ))}
    </ul>
  );
}
