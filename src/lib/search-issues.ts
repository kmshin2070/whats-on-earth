// Design Ref: DESIGN.md §1.6 — shared match logic for the nav dropdown and
// the /search results page, so the two stay consistent.
import type { Issue } from "@/types/issue";

export function searchIssues(issues: Issue[], query: string): Issue[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return issues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(q) ||
      issue.summary.toLowerCase().includes(q) ||
      issue.detail.some((paragraph) => paragraph.toLowerCase().includes(q)) ||
      issue.keywords.some((keyword) => keyword.toLowerCase().includes(q))
  );
}
