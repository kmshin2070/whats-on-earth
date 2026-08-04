// Design Ref: DESIGN.md §1.1 (+ layout upgrade addendum) — Home leads with one
// featured story, then lays out Macro/Markets/Business as newspaper-style
// columns, up to 5 per column, minimum 3 guaranteed by the data validation
// added in PLAN step 9.
import Link from "next/link";
import { CATEGORIES } from "@/types/issue";
import { issuesForLatestDate, latestDate, getFeaturedIssue } from "@/data/issues";
import { IssueCard } from "@/components/IssueCard";
import { FeaturedStory } from "@/components/FeaturedStory";

const SECTION_DISPLAY_LIMIT = 5;

export default function Home() {
  const todaysIssues = issuesForLatestDate();
  const updatedDate = latestDate();
  const featured = getFeaturedIssue();

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="border-t-4 border-b-2 border-black py-3 text-center sm:py-4">
        <h1 className="font-[family-name:var(--font-masthead)] text-3xl font-bold tracking-tight sm:text-5xl">
          What&apos;s on Earth
        </h1>
        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
          Updated: {updatedDate}
        </p>
      </header>

      {featured && <FeaturedStory issue={featured} />}

      <div className="mt-4 grid grid-cols-1 divide-y divide-neutral-300 md:grid-cols-3 md:divide-x md:divide-y-0">
        {CATEGORIES.map((category) => {
          const categoryIssues = todaysIssues.filter(
            (issue) => issue.category === category && issue.slug !== featured?.slug
          );
          return (
            <section key={category} className="py-6 first:pt-0 md:px-6 md:py-0 md:first:pl-0 md:last:pr-0">
              <div className="flex items-baseline justify-between border-b border-black pb-1">
                <h2 className="font-serif text-lg font-bold uppercase tracking-wide sm:text-xl">
                  {category}
                </h2>
                <Link
                  href={`/${category.toLowerCase()}`}
                  className="text-sm underline underline-offset-2"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-neutral-200">
                {categoryIssues.slice(0, SECTION_DISPLAY_LIMIT).map((issue) => (
                  <IssueCard key={issue.slug} issue={issue} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
