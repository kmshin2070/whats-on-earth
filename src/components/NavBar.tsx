// Design Ref: DESIGN.md addendum — WSJ/FT-style top section nav + search.
import Link from "next/link";
import { CATEGORIES } from "@/types/issue";
import { SearchBox } from "./SearchBox";

export function NavBar() {
  return (
    <nav className="border-b border-neutral-300 bg-white">
      <div className="mx-auto flex max-w-5xl items-center gap-5 overflow-x-auto px-4 py-2 text-sm font-medium tracking-wide whitespace-nowrap uppercase">
        <Link href="/">Home</Link>
        {CATEGORIES.map((category) => (
          <Link key={category} href={`/${category.toLowerCase()}`}>
            {category}
          </Link>
        ))}
        <SearchBox />
        <Link href="/subscribe" className="shrink-0">
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
