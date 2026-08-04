// Design Ref: DESIGN.md §1.2 — full list of one category's issues, no display cap.
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, type Category } from "@/types/issue";
import { issuesForLatestDate, latestDate } from "@/data/issues";
import { IssueCard } from "@/components/IssueCard";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.toLowerCase() }));
}

function findCategory(param: string): Category | undefined {
  return CATEGORIES.find((category) => category.toLowerCase() === param);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryParam } = await params;
  const category = findCategory(categoryParam);
  if (!category) notFound();

  const categoryIssues = issuesForLatestDate().filter(
    (issue) => issue.category === category
  );
  const updatedDate = latestDate();

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="border-t-4 border-b-2 border-black py-3 sm:py-4">
        <Link href="/" className="text-sm underline underline-offset-2">
          &larr; Home
        </Link>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          {category}
        </h1>
        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
          Updated: {updatedDate}
        </p>
      </header>

      <div className="divide-y divide-neutral-200">
        {categoryIssues.map((issue) => (
          <IssueCard key={issue.slug} issue={issue} />
        ))}
      </div>
    </main>
  );
}
