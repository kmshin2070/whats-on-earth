"use client";

// Design Ref: DESIGN.md addendum — client-side search over all issues,
// toggled by a magnifying-glass button (user request). No backend: the
// MVP's whole dataset is already static and small, so filtering in the
// browser is enough.
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { issues } from "@/data/issues";
import { searchIssues } from "@/lib/search-issues";

export function SearchBox() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(
    () => searchIssues(issues, query).slice(0, 10),
    [query]
  );

  return (
    <div className="relative ml-auto">
      <button
        type="button"
        aria-label={open ? "Close search" : "Open search"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-6 w-6 items-center justify-center"
      >
        {/* magnifying glass icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-72 border border-neutral-300 bg-white p-2 shadow-lg sm:w-96">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "Enter" && query.trim()) {
                setOpen(false);
                router.push(`/search?q=${encodeURIComponent(query.trim())}`);
              }
            }}
            placeholder="Search issues..."
            className="w-full border border-neutral-300 px-2 py-1 text-sm normal-case"
          />
          {query.trim() && (
            <ul className="mt-2 max-h-80 divide-y divide-neutral-200 overflow-y-auto">
              {results.length === 0 && (
                <li className="py-2 text-sm text-neutral-500">No matches.</li>
              )}
              {results.map((issue) => (
                <li key={issue.slug}>
                  <Link
                    href={`/${issue.category.toLowerCase()}/${issue.slug}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm normal-case hover:underline"
                  >
                    <span className="text-xs uppercase text-neutral-500">
                      {issue.category} &middot; {issue.date}
                    </span>
                    <br />
                    {issue.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
