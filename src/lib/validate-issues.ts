// Plan Ref: PLAN.md step 9 — build-time gate for PRD's numeric/whitelist
// rules. Called from src/data/issues.ts at module-load time, so a violation
// throws during `next build` (and in `next dev`) instead of shipping silently.
import { z } from "zod";
import { CATEGORIES, OUTLETS, type Issue } from "@/types/issue";

const sourceSchema = z.object({
  outlet: z.enum(OUTLETS),
  url: z.url(),
});

const issueSchema = z.object({
  slug: z.string().min(1),
  category: z.enum(CATEGORIES),
  title: z.string().min(1),
  summary: z.string().min(1),
  detail: z.array(z.string().min(1)).min(5).max(7),
  keywords: z.array(z.string().min(1)).min(5),
  date: z.string(),
  sources: z.array(sourceSchema).min(1).max(3),
  crossCheck: z.array(sourceSchema).min(1),
  selectionRationale: z.string().min(1),
  featured: z.boolean().optional(),
});

const MIN_ISSUES_PER_CATEGORY = 3;

export function validateIssues(issues: Issue[]): void {
  for (const issue of issues) {
    const result = issueSchema.safeParse(issue);
    if (!result.success) {
      throw new Error(
        `Invalid issue "${issue.title}": ${result.error.message}`
      );
    }
  }

  const slugs = issues.map((issue) => issue.slug);
  const duplicateSlug = slugs.find((slug, i) => slugs.indexOf(slug) !== i);
  if (duplicateSlug) {
    throw new Error(`Duplicate issue slug: "${duplicateSlug}" — slugs must be unique for /{category}/{slug} routing.`);
  }

  const latest = issues.reduce(
    (max, issue) => (issue.date > max ? issue.date : max),
    issues[0]?.date ?? ""
  );

  for (const category of CATEGORIES) {
    const count = issues.filter(
      (issue) => issue.category === category && issue.date === latest
    ).length;
    if (count < MIN_ISSUES_PER_CATEGORY) {
      throw new Error(
        `Category "${category}" has only ${count} issue(s) for ${latest}; ` +
          `PRD requires at least ${MIN_ISSUES_PER_CATEGORY}.`
      );
    }
  }

  const featuredCount = issues.filter(
    (issue) => issue.featured && issue.date === latest
  ).length;
  if (featuredCount !== 1) {
    throw new Error(
      `Expected exactly 1 featured issue for ${latest}, found ${featuredCount}.`
    );
  }
}
