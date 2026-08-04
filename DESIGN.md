# DESIGN — Global Economic News Scrap Service

> Source: `PLAN.md` (task order) / `PRD.md` (spec).
> Goal for this design: everything here must be buildable and deployable to Vercel today — no infra that needs provisioning time.
> Revised after design-validator cross-check against `PRD.md`/`PLAN.md` — see inline notes marked "(validator)".

## 1. Screens (what shows up where)

### 1.0 Shared chrome (every page — added in the layout-upgrade pass)
- **Market ticker** (top, full width, black bar): live index/FX/commodity/yield quotes (S&P 500, Nasdaq, FTSE 100, EUR/USD, Crude Oil, 10Y US Treasury), green/red arrow by direction, plus **‹ › scroll buttons** at the right end so the row is swipeable/clickable on any device (user request, capture3.jpg) — `src/components/TickerScroller.tsx` is a client component that owns the scroll ref and buttons; `MarketTicker.tsx` stays a server component that only fetches the data. Not a PRD Issue — a standalone visual element the user asked for after reviewing WSJ/FT/Bloomberg screenshots.
- **Nav bar**: Home / Macro / Markets / Business links + the search button (1.6), always visible, under the ticker.
- Both render in `src/app/layout.tsx`, so every route (Home + all 3 category pages) gets them without duplicating markup.

### 1.1 Home (`/`)
- **Masthead** (top, full width): site title, "Updated: {latest issue date across all data}" (not "today's date" — a static build can't guarantee the date matches the visitor's day) (validator #5), WSJ-style rule line under it.
- **Featured story** (see 1.4): the day's one featured issue, run large with a photo, directly under the masthead.
- **Three newspaper-style columns, side by side on desktop (stacked on mobile), in this order**: Macro → Markets → Business — updated from the original stacked-sections layout to read more like a real front page (user request, screenshots: WSJ/FT/Bloomberg).
  - Each column has a heading (category name) and a "View all" link to that category's page.
  - Each column shows up to 5 Issue Cards (see 1.3), with a guaranteed minimum of 3 enforced by the build-time validation in §3, newest/most important first (validator #12 — resolves the earlier "minimum 3" vs "no cap" ambiguity: Home caps display at 5, the category page shows the full list). The featured issue is excluded from its column's list (it's already shown above, once).
- All content and UI copy is English; page sets `<html lang="en">` (validator #11).
- Purpose: a user reads top-to-bottom and gets all 3 categories' key issues without clicking — satisfies the "5-minute scan" success criterion.

### 1.2 Category page (`/macro`, `/markets`, `/business`)
- Same masthead.
- Single-category heading + full list of that category's issues for the latest date present in the data (see §2 date-scoping rule) — no display cap here.
- Back-to-home link.
- Purpose: deep-dive / bookmarkable view per category; not required for the 5-minute scan but keeps URLs shareable.

### 1.3 Issue Card (shared component, not a route)
- Title (issue headline, 1 line) — **links to the issue's detail page** (1.5) (user request).
- Summary: 3–5 sentences (user request; up from the original 1–3), a **neutral factual digest of what the cited sources reported** — no original analysis, opinion, or "why it matters" commentary, and never a verbatim excerpt from any article (PRD §6 no-original-journalism / §7 copyright rule; validator #8, #9). Clamped to 3 lines on the card (`line-clamp-3`) since it's now long enough to overflow a compact card.
- Category tag + date.
- Source list: the issue's `sources` field, 1–3 links, outlet restricted to the approved-outlet union type (§2), each rendered with `target="_blank" rel="noopener noreferrer"`, outlet name shown.
- Not displayed on the card, but present in the data: `crossCheck`, at least one independent verifying source recorded even when only 1 source is shown in the card — this is what makes the "100% cross-verified" claim auditable rather than just asserted (validator #1).

### 1.4 Featured story (Home only, not a route)
- User request: "select one news among 9+ news every day, increase its size, attach a related photo"; then "locate the title and summarization to the right side of the image" (capture3.jpg — Bloomberg-style hero).
- Exactly one `Issue` per day has `featured: true` (enforced by the build-time validation in §3). Rendered large, image on the left / category+date+headline+summary+sources on the right on desktop (`sm:flex-row`), stacked on mobile where there's no room for two columns.
- **Photo sourcing**: deliberately NOT the source outlet's actual article photo — that image belongs to the outlet, and re-publishing it would be the same kind of copyright problem PRD §7 already flags for article text. Uses a deterministic placeholder (`src/lib/photo.ts`, seeded by the issue's slug via `picsum.photos`) instead. If real editorial photography is wanted later, that requires either a licensing arrangement with the outlets or a stock-photo subscription — a separate decision, not made here.

### 1.5 Issue detail page (`/{category}/{slug}`)
- User request: clicking a title should open "the entire news scrap," and cards were only showing the outlet name, not any detail.
- Shows the content in **3 explicit parts** (user request, per the `sample` reference file), in this order: category/date, full headline, the same placeholder photo as 1.4 (for visual consistency, all issues get one, not just the featured story), then **Summary** (`Issue.summary`), then the **Detail** body (`Issue.detail`, 5–7 paragraphs, one `<p>` per array entry — article-length, still no-analysis/no-verbatim-excerpt per PRD §6/§7), then **Keywords** (`Issue.keywords`, 5+ tags), then the full source list.
- Does not show `crossCheck` or `selectionRationale` — those stay internal/auditable-only, consistent with 1.3.

### 1.6 Search (available from every page via the nav bar)
- User request: a magnifying-glass button that opens a search field to find an issue by keyword; pressing Enter opens a dedicated results page (capture4.jpg/capture5.jpg), not just an inline dropdown.
- `src/components/SearchBox.tsx` (client): the magnifying-glass button still opens a live-filtered dropdown for quick jump-to-item (kept from the previous pass — not asked to remove). Pressing **Enter** now additionally navigates to `/search?q=...`.
- `src/app/search/page.tsx` (server-rendered, reads `searchParams.q`): full results list — thumbnail photo (same placeholder scheme as 1.4/1.5), title (links to the issue detail page), category/date, summary (line-clamped to 2 lines). Includes its own search box at the top so a user can re-search from the results page directly (works even without JS, since it's a plain `<form action="/search">`).
- `src/lib/search-issues.ts`: shared match logic used by both the dropdown and the results page — title, summary, every `detail` paragraph, and every `keyword`, case-insensitive substring match. No backend/API, consistent with the MVP's static-data approach.
- This page is server-rendered on demand (`ƒ`), not statically generated like the Issue pages, because it depends on the `q` query param — the one other deviation from full static generation besides the ticker (§3).

### 1.7 Subscribe (`/subscribe`, button in the nav bar next to search)
- User request: a "Subscribe" button that opens a page with an email field; submitting stores the email, confirms success, and the site should email that day's issues to subscribers daily.
- This is the first genuine **write path** in the app and the first real **database**, both previously out of scope (§1.6's "no write path" note) — introduced because the user explicitly asked for it. PRD's non-goals (§6) list paid subscriptions and accounts as out of scope, not a free email digest, so this doesn't contradict PRD, but it is new ground for this build.
- **Storage**: an existing Supabase project (already active on the account, found via `supabase projects list` with the `SUPABASE_ACCESS_TOKEN` already in `.env` per this project's working rules — no new project was created) now holds one table, `public.subscribers (id uuid pk, email text unique, created_at timestamptz)`, RLS enabled with no public policies. `src/lib/supabase.ts` creates a server-only client (`import "server-only"`) using the `service_role` key (`SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_URL`, added to `.env`/`.env.example`) — that key must never reach client-side code.
- **Flow**: `src/app/subscribe/page.tsx` renders the form; `src/app/subscribe/actions.ts` is a Server Action (`"use server"`) that validates the email, inserts it, handles the Postgres unique-violation (`23505`) as "already subscribed" rather than an error, and redirects back to `/subscribe?status=...` for a plain-language result banner. Works without client JS (progressive enhancement via a native `<form action={...}>`).
- **Email sending — deliberately not wired yet**: confirmation emails and the daily digest both require a transactional email provider (Resend, SendGrid, etc.), and no such API key exists in `.env`. Asked the user; they chose to ship the form + storage now and decide on a provider later. `src/lib/email.ts` has the two functions (`sendConfirmationEmail`, `sendDailyDigest`) with the real call sites already wired in (`subscribe` action, and the cron route below) — they currently just `console.warn` and no-op if `RESEND_API_KEY` (placeholder name) isn't set, so nothing is silently faked. The `/subscribe` success message says as much rather than claiming an email was sent.
- **Daily digest delivery**: `src/app/api/cron/daily-digest/route.ts` reads all subscriber emails from Supabase and calls `sendDailyDigest` with today's issues; `vercel.json` schedules it once daily via Vercel Cron (`0 13 * * *` UTC — adjust as needed). Optionally gated by a `CRON_SECRET` env var so the route can't be triggered by anyone who finds the URL. This route is safe to deploy now — it'll just no-op past the subscriber fetch until an email provider is wired in.
- **Google Sheet mirror** (user request, specific sheet URL provided): on every successful (non-duplicate) subscribe, `src/lib/google-sheets.ts` best-effort-appends `[email, date]` to that sheet via a Google service account JWT + the Sheets API `values:append` REST endpoint (`google-auth-library` for signing, no need for the full `googleapis` package). Supabase stays the source of truth for duplicate detection — the sheet append never blocks or fails the subscribe flow, it just logs if it can't run.
  - **Live and verified**: `GOOGLE_SERVICE_ACCOUNT_EMAIL` / `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` are set in `.env`, the Sheets API is enabled on the service account's Google Cloud project, and the sheet is shared with that service account. `GOOGLE_SHEETS_RANGE=시트1!A:B` — the sheet's actual first-tab name is "시트1", not the English default "Sheet1", so the env-var override (§ tech stack) was necessary. Confirmed end-to-end with a real append (landed in the row right after the sheet's existing header row, `E-mail address` / `subscribe date`) and cleaned up the test row afterward.

No other screens (no login, no settings, no user accounts) — matches PRD's explicit non-goals. Search, issue detail, and subscribe are new as of this pass; subscribe is the one that does introduce a write path and a database, both flagged above.

## 2. Data model

```ts
type Outlet =
  | "Financial Times" | "The Wall Street Journal" | "The Economist"
  | "Reuters" | "Bloomberg" | "Nikkei Asia" | "The New York Times"
  | "The Washington Post" | "South China Morning Post" | "The Guardian";
// validator #4 — outlet is a closed union, not a free-form string,
// so an unapproved source is a type error, not just a convention.

type Source = { outlet: Outlet; url: string };

type Issue = {
  slug: string;               // unique, used for /{category}/{slug} routing (§1.5)
  category: "Macro" | "Markets" | "Business";
  title: string;
  summary: string;             // 3-5 sentences, neutral digest for cards — see §1.3
  detail: [string, string, string, string, string, ...string[]]; // 5-7 paragraphs — see §1.5
  keywords: [string, string, string, string, string, ...string[]]; // 5+ tags — see §1.5
  date: string;                // ISO date
  sources: [Source, ...Source[]];      // 1–3 displayed links
  crossCheck: [Source, ...Source[]];   // >=1 verifying source, may overlap with `sources`
  selectionRationale: string;  // which PRD §5-1 include criterion this issue satisfies
  featured?: boolean;          // exactly one true per day (§1.4), enforced by validation
};
```

**Slug uniqueness + exactly-one-featured (validation additions)**: the build-time check in §3 also rejects duplicate `slug` values and fails unless exactly one issue dated `latestDate` has `featured: true`.

**Date scoping (validator #7)**: `issues.ts` keeps every entry added over time (no daily overwrite). Both Home and the category pages filter to `date === latestDate` across the dataset, where `latestDate = max(issue.date)`. This keeps a same-day static build correct today and leaves room for a future "archive" view without changing the type.

**Build-time validation (validator #3)**: a small check (e.g. zod schema, or plain assertions) runs over the `Issue[]` data module at build time and fails the build if: any category has fewer than 3 issues for `latestDate`, any issue has 0 or more than 3 `sources`, any issue has an empty `crossCheck`, or any `outlet` value isn't in the `Outlet` union. This turns PRD's numeric/whitelist rules into an enforced gate instead of an unverified claim.

## 3. Data flow (input → processing → output)

```
[Input]                       [Processing]                          [Output]
Editor curates today's     →  1. Build-time validation over      →  Next.js pages statically
issues against PRD §5-1        Issue[] (see §2) — fails the         rendered at build time
include/exclude criteria,      build on any rule violation          (App Router, RSC) → deployed
cross-verifies each against    2. Filter to latestDate               as static HTML/CSS on
an independent source          3. Group by category, generate        Vercel's CDN
(fills `crossCheck`) before      Home + 3 category routes
entry into issues.ts
```

- **Input**: for the MVP, issues are authored directly into the typed data file (`src/data/issues.ts`) — each entry cross-verified per PRD's rule and screened against the §5-1 include/exclude criteria before it's added (PLAN step 10). No scraping/LLM pipeline is built today (PLAN step 11 is the placeholder for a future automated source).
- **Processing**: the build-time validation (§2) runs first; if it passes, Next.js reads the data module, filters to `latestDate`, groups by category, and statically generates the Home and 3 category pages (`generateStaticParams` for `/[category]`). No client-side fetching, no server API route needed for the MVP.
- **Output**: fully static pages served from Vercel's edge/CDN — fast, no server runtime cost, matches "deploy today" constraint.
- **Update cadence**: refreshing daily = appending to the data file and redeploying (`vercel --prod` or a git push if connected to Vercel Git integration). The masthead date always reflects the data's own `latestDate`, so a stale build reads as stale rather than lying about "today" (validator #5). No cron/backend needed yet.
- **Deviation — market ticker only**: `src/lib/market-data.ts` fetches real quotes from Yahoo Finance's public chart endpoint (no API key) with a 60s ISR revalidate window (`next: { revalidate: 60 }`), so that one component is not purely static like the Issue pages. A failed/blocked fetch returns an empty list and the ticker renders nothing rather than breaking the page. This is scoped to the ticker only — Issue data, routes, and everything else in §2/§3 above are unchanged.

## 4. Tech stack

**Base (locked, per PRD/CLAUDE.md)**: Next.js (App Router) + TypeScript, deployed to Vercel.

| Layer | Choice | Why (1 line) |
|---|---|---|
| Framework | Next.js 14+, App Router | Already locked by PRD; single project serves pages, deploys directly to Vercel. |
| Language | TypeScript | Encodes the `Outlet`/`Issue` shape from §2 so a bad entry is a compile error. |
| Data source (MVP) | Static typed module (`src/data/issues.ts`) | No DB to provision — fastest path to a same-day deploy; matches PRD's no-login/no-DB scope. |
| Data validation | zod (or hand-written assertions) over the data module at build time | Enforces the numeric/whitelist rules from §2 that TypeScript's structural types alone can't check (e.g. "at least 3 per category") (validator #3). |
| Rendering | Static Generation (default App Router behavior, no `fetch`/dynamic APIs) | Zero server runtime needed, fastest and cheapest on Vercel. |
| Deployment | Vercel CLI, auth via `.env`'s `VERCEL_TOKEN` | Matches PRD §8 and PLAN.md step 12. |

**Proposed addition** (not yet decided — flagging for your call):

| Addition | Why (1 line) |
|---|---|
| Tailwind CSS | Fastest way to hit the WSJ look (serif headlines, black/white, tight grid, responsive) without hand-rolling a CSS system today. |

If you'd rather not add Tailwind, plain CSS Modules work too — it only changes step 7 of PLAN.md, nothing structural.

## 5. Out of scope for this design (confirmed via PRD/PLAN)

No auth, no database, no API routes, no comments/likes, no push notifications, no payment, no verbatim article reproduction — none of these appear in any screen or data flow above.
