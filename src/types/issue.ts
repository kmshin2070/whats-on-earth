// Design Ref: DESIGN.md §2 — closed Outlet union enforces the approved-outlet
// whitelist (PRD §5-2) at the type level, not just by convention. Declared as
// a runtime array so the zod schema in lib/validate-issues.ts can reuse it.
export const OUTLETS = [
  "Financial Times",
  "The Wall Street Journal",
  "The Economist",
  "Reuters",
  "Bloomberg",
  "Nikkei Asia",
  "The New York Times",
  "The Washington Post",
  "South China Morning Post",
  "The Guardian",
] as const;
export type Outlet = (typeof OUTLETS)[number];

export const CATEGORIES = ["Macro", "Markets", "Business"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Source = {
  outlet: Outlet;
  url: string;
};

export type Issue = {
  // Stable id for URLs (/{category}/{slug}) and React keys — user request:
  // clickable titles need a page to link to.
  slug: string;
  category: Category;
  title: string;
  // User request: content is composed of 3 parts (see sample) — summary,
  // detail, keywords. Still a neutral digest, no original analysis/opinion,
  // never a verbatim excerpt (PRD §6, §7; DESIGN §1.3) — just longer than
  // the original 1-3 sentence version.
  // Part 1: 3-5 sentences, shown on cards and as the lead-in on the detail page.
  summary: string;
  // Part 2: 5-7 paragraphs, article-length detail — shown only on the detail page.
  detail: [string, string, string, string, string, ...string[]];
  // Part 3: 5+ topical tags — shown on the detail page, also searchable.
  keywords: [string, string, string, string, string, ...string[]];
  date: string; // ISO date, e.g. "2026-08-04"
  // Plan SC: 1-3 displayed links (PRD §5-2)
  sources: [Source, ...Source[]];
  // Plan SC: >=1 independent verifying source, may overlap with `sources`,
  // recorded even when not displayed — makes "100% cross-verified" auditable.
  crossCheck: [Source, ...Source[]];
  // Which PRD §5-1 include criterion this issue satisfies.
  selectionRationale: string;
  // Exactly one issue per day is featured — user request: pick one story
  // and run it large with a photo, like a front-page lead story.
  featured?: boolean;
};
