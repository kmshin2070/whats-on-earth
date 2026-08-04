// Design Ref: DESIGN.md addendum — one story per day runs large with a photo,
// front-page-lead style. Layout: image left, title+summary right on desktop
// (Bloomberg-style, per capture3.jpg), stacked on mobile.
import Image from "next/image";
import Link from "next/link";
import type { Issue } from "@/types/issue";
import { issuePhotoUrl } from "@/lib/photo";
import { SourceLinks } from "./SourceLinks";

export function FeaturedStory({ issue }: { issue: Issue }) {
  const href = `/${issue.category.toLowerCase()}/${issue.slug}`;
  return (
    <article className="border-b-2 border-black py-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href={href} className="block sm:w-1/2 sm:shrink-0">
          <Image
            src={issuePhotoUrl(issue.slug, 900, 630)}
            alt=""
            width={900}
            height={630}
            priority
            className="h-auto w-full object-cover"
          />
        </Link>
        <div className="sm:w-1/2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
            <span>{issue.category}</span>
            <span>&middot;</span>
            <time dateTime={issue.date}>{issue.date}</time>
          </div>
          <Link href={href} className="block">
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight hover:underline sm:text-3xl">
              {issue.title}
            </h2>
          </Link>
          <p className="mt-2 line-clamp-5 text-base leading-relaxed text-neutral-700">
            {issue.summary}
          </p>
          <div className="mt-3">
            <SourceLinks sources={issue.sources} />
          </div>
        </div>
      </div>
    </article>
  );
}
