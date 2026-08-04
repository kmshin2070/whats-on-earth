// Design Ref: DESIGN.md addendum — issue detail page. User request: clicking
// a title should open the full scrap (fuller detail text, still all sources).
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, type Category } from "@/types/issue";
import { issues, findIssue } from "@/data/issues";
import { issuePhotoUrl } from "@/lib/photo";
import { SourceLinks } from "@/components/SourceLinks";

export function generateStaticParams() {
  return issues.map((issue) => ({
    category: issue.category.toLowerCase(),
    slug: issue.slug,
  }));
}

function findCategory(param: string): Category | undefined {
  return CATEGORIES.find((category) => category.toLowerCase() === param);
}

export default async function IssuePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categoryParam, slug } = await params;
  const category = findCategory(categoryParam);
  if (!category) notFound();

  const issue = findIssue(category, slug);
  if (!issue) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <Link
        href={`/${category.toLowerCase()}`}
        className="text-sm underline underline-offset-2"
      >
        &larr; {category}
      </Link>

      <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
        <span>{issue.category}</span>
        <span>&middot;</span>
        <time dateTime={issue.date}>{issue.date}</time>
      </div>

      <h1 className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-4xl">
        {issue.title}
      </h1>

      <Image
        src={issuePhotoUrl(issue.slug, 1200, 630)}
        alt=""
        width={1200}
        height={630}
        className="mt-4 h-auto w-full object-cover"
      />

      <div className="mt-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Summary
        </h2>
        <p className="mt-1 text-base leading-relaxed text-neutral-800">
          {issue.summary}
        </p>
      </div>

      <div className="mt-6 border-t border-neutral-300 pt-4">
        {issue.detail.map((paragraph, i) => (
          <p key={i} className="mt-4 text-base leading-relaxed text-neutral-800 first:mt-0">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 border-t border-neutral-300 pt-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Keywords
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {issue.keywords.map((keyword) => (
            <li
              key={keyword}
              className="border border-neutral-300 px-2 py-0.5 text-xs uppercase tracking-wide text-neutral-600"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-neutral-300 pt-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Sources
        </h2>
        <div className="mt-2">
          <SourceLinks sources={issue.sources} />
        </div>
      </div>
    </main>
  );
}
