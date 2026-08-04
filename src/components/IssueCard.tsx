// Design Ref: DESIGN.md §1.3 — title, neutral summary, category/date, source links.
import Link from "next/link";
import type { Issue } from "@/types/issue";
import { SourceLinks } from "./SourceLinks";

export function IssueCard({ issue }: { issue: Issue }) {
  const href = `/${issue.category.toLowerCase()}/${issue.slug}`;
  return (
    <article className="py-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
        <span>{issue.category}</span>
        <span>&middot;</span>
        <time dateTime={issue.date}>{issue.date}</time>
      </div>
      <h3 className="mt-1 font-serif text-lg font-bold leading-snug sm:text-xl">
        <Link href={href} className="hover:underline">
          {issue.title}
        </Link>
      </h3>
      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-neutral-700">
        {issue.summary}
      </p>
      <div className="mt-2">
        <SourceLinks sources={issue.sources} />
      </div>
    </article>
  );
}
