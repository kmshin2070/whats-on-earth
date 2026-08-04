# PLAN — Global Economic News Scrap Service

> Source: `PRD.md` (full spec) / `prd_lite.md` (condensed)
> Feature scope: PRD §5 Must-have — (1) category-based daily issue updates, (2) linked source articles.
> Revised after design-validator cross-check against `DESIGN.md` — see inline notes marked "(validator)".

## Cycle goal

Ship a working Next.js MVP that displays daily Macro / Markets / Business economic issues, each backed by 1–3 credible-source article links, in a WSJ-style responsive layout — ready to deploy on Vercel.

## Success criteria

- [ ] Each of the 3 categories (Macro, Markets, Business) shows at least 3 issues; 9+ issues total.
- [ ] Every issue has 1–3 displayed links to articles from the approved outlet list (FT, WSJ, The Economist, Reuters, Bloomberg, Nikkei Asia, NYT, Washington Post, SCMP, The Guardian).
- [ ] 100% of issues are cross-verified against an independent second source before being included — recorded even when only 1 link is displayed (validator #1).
- [ ] Every issue satisfies PRD §5-1's include/exclude selection criteria (validator #2).
- [ ] The above numeric/whitelist rules are enforced by a build-time check, not just by convention (validator #3, #4).
- [ ] A user can scan all 3 categories' key issues in under 5 minutes (single page or clear category navigation, no login wall).
- [ ] Layout matches the WSJ-style direction (white background, black text, newspaper-like structure) and is responsive on desktop and mobile.
- [ ] No verbatim article excerpts anywhere — summaries are neutral digests only (PRD §7 copyright rule; validator #9).
- [ ] App builds and deploys successfully on Vercel.

## Task order

1. Scaffold the Next.js project (TypeScript, App Router) inside `my-app`; confirm `.env` stays listed in `.gitignore` and add a `.env.example` documenting required variable names without values (validator #10).
2. Define the shared data types: `Outlet` (union of the 10 approved outlets), `Source` (outlet + url), `Issue` (category, title, summary, date, `sources`: 1–3 displayed `Source[]`, `crossCheck`: 1+ verifying source recorded even if not displayed, `selectionRationale`: which PRD §5-1 include criterion it satisfies) (validator #1, #2, #4).
3. Set up the route structure: Home (`/`) plus one route per category (`/macro`, `/markets`, `/business`). Home *is* the all-categories view — no separate filter component (validator #6).
4. Build the Issue Card component (title, neutral factual summary — no original analysis or opinion, category tag, date) with static mock data (validator #8).
5. Build the source-links sub-component: renders the issue's `sources` (1–3 links), each opening in a new tab with `rel="noopener noreferrer"`, outlet name shown, no verbatim excerpts (validator #9).
6. Wire navigation between Home and the three category pages via links (not client-side filtering) on top of the mock data (validator #6).
7. Apply the WSJ-style design system (typography, white/black palette, newspaper grid) across the pages built so far.
8. Verify responsive behavior on desktop and mobile breakpoints.
9. Add a build-time data validation check (e.g. zod schema over the data module) that fails the build if: any category has fewer than 3 issues, any issue has 0 or more than 3 displayed sources, any issue is missing a `crossCheck` entry, or any outlet isn't in the approved list (validator #3).
10. Populate real data: curate today's issues against PRD §5-1's include/exclude criteria, cross-verify each against an independent source (fill `crossCheck`), and write summaries as neutral digests of what the cited sources reported — minimum 3 issues per category (validator #2, #8).
11. Wire `.env`-based configuration for any external source/LLM call, only if one is introduced for issue sourcing.
12. Set up Vercel deployment (Vercel CLI, auth via `.env`'s `VERCEL_TOKEN`) and confirm a live build.
