# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository currently contains **planning documents only** — there is no application code, no `package.json`, and no build/lint/test tooling yet. Before writing code, check whether this is still the case (`ls` the repo root); if a Next.js app has since been scaffolded, update this file with real build/lint/test commands and architecture notes.

The `.bkit/` directory holds state for the bkit Vibecoding Kit plugin (PDCA workflow tracking). Per `.bkit/state/pdca-status.json`, the project is on pipeline phase 1 ("schema") at the "Dynamic" level (bkend.ai BaaS fullstack track) and has not yet completed onboarding.

## What this project is

A daily global economic news scrap service (글로벌 경제 이슈 스크랩 서비스). Full spec lives in `PRD.md` (detailed) and `prd_lite.md` (condensed); `taean` contains the PRD template/process notes used to produce them. Read `PRD.md` before implementing features — do not re-derive requirements from memory.

Core concept: every day, surface at least 3 curated issues each for three categories — **Macro** (monetary/fiscal policy, rates, inflation, trade, geopolitics), **Markets** (equities, bonds, FX, commodities, crypto), **Business** (corporate earnings, industry trends, supply chains, M&A) — each backed by 1–3 links to cross-verified articles from credible outlets only (FT, WSJ, The Economist, Reuters, Bloomberg, Nikkei Asia, NYT, Washington Post, SCMP, The Guardian).

Hard constraints from the PRD — treat these as invariants, not suggestions:
- Every issue must be cross-verified across independent sources before publishing; never publish unverified/unconfirmed claims.
- Minor events, single-company news without broader implications, and short-term market noise are explicitly out of scope for issue selection.
- No user accounts/login, no personalization, no comments/likes, no push notifications, no original journalism (scrap + link only), no paid subscription — these are explicitly excluded from this build.
- Content is English-language, publicly viewable, and collects no personal data (no login system).
- Design direction: WSJ-style — clean, trustworthy, newspaper-like layout; white background, black text; responsive desktop/mobile web (no native app).

## Planned stack

Next.js (chosen so a single project serves both the frontend and API routes, matching prior course exercises and the planned Vercel deployment) — per `PRD.md` §8. No other framework/library decisions are recorded yet; don't assume a state manager, CSS framework, or DB client until they're actually added to the project.

**Stack is locked**: the framework is Next.js and deployment target is Vercel, per the PRD. Do not propose switching frameworks or migrating off Next.js/Vercel, even if another stack seems technically better.

## Working rules

- **Language**: write all explanations, comments, and docstrings in English, regardless of the language the user writes in.
- **File location**: create new files only inside the `my-app` folder — never write files outside the project root.
- **Explain changes**: whenever you change code, state in one line what changed and why.
- **Secrets never leave `.env`**: `.env` and any other secret files, plus `node_modules/`, must stay listed in `.gitignore` and must never be committed.
- **Never surface tokens**: when a task needs external-service auth, don't ask the user for the token or print it in chat — read it from `.env` and use it directly.
  - Supabase work → install the Supabase CLI and authenticate with `SUPABASE_ACCESS_TOKEN` from `.env`.
  - Vercel work (e.g. deployment) → install the Vercel CLI and authenticate with `VERCEL_TOKEN` from `.env`.
- **No hard deletes**: when a file needs to be removed, don't delete it directly — create a `trash-can/` folder (inside `my-app`) and move the file there instead. The user reviews and deletes it themselves afterward.
- **Use installed subagents**: proactively use the already-installed subagents (bkit and others) whenever a task fits one, rather than doing everything inline.

## Secrets

`.env` is git-ignored and holds live-looking API keys/tokens (GitHub, Supabase, Vercel, OpenAI). Never read `.env` contents into a response, log them, or commit them. When code needs these values, reference `process.env.VAR_NAME` — do not inline secret values into source files.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
