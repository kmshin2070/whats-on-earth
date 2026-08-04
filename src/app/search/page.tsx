// Design Ref: DESIGN.md addendum — dedicated search results page (user
// request, capture4.jpg/capture5.jpg: pressing Enter opens a results page,
// not just a dropdown). Server-rendered so it also works without JS.
import Image from "next/image";
import Link from "next/link";
import { issues } from "@/data/issues";
import { issuePhotoUrl } from "@/lib/photo";
import { searchIssues } from "@/lib/search-issues";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchIssues(issues, q);

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      <form action="/search" className="flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search issues..."
          className="w-full border border-neutral-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="border border-black px-4 py-2 text-sm font-medium uppercase"
        >
          Search
        </button>
      </form>

      <h1 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
        {q ? (
          <>
            Results for <span className="italic">&ldquo;{q}&rdquo;</span>
          </>
        ) : (
          "Search"
        )}
      </h1>

      {q && (
        <p className="mt-1 text-sm text-neutral-500">
          {results.length} {results.length === 1 ? "match" : "matches"}
        </p>
      )}

      <div className="mt-4 divide-y divide-neutral-200">
        {q && results.length === 0 && (
          <p className="py-6 text-sm text-neutral-500">
            No issues match &ldquo;{q}&rdquo;.
          </p>
        )}
        {results.map((issue) => {
          const href = `/${issue.category.toLowerCase()}/${issue.slug}`;
          return (
            <article key={issue.slug} className="flex gap-4 py-4">
              <Link href={href} className="block w-28 shrink-0 sm:w-40">
                <Image
                  src={issuePhotoUrl(issue.slug, 400, 280)}
                  alt=""
                  width={400}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </Link>
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
                  <span>{issue.category}</span>
                  <span>&middot;</span>
                  <time dateTime={issue.date}>{issue.date}</time>
                </div>
                <h2 className="mt-1 font-serif text-lg font-bold leading-snug">
                  <Link href={href} className="hover:underline">
                    {issue.title}
                  </Link>
                </h2>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-700">
                  {issue.summary}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
