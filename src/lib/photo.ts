// Design Ref: DESIGN.md addendum (featured story) — a deterministic,
// license-safe placeholder photo per issue. We deliberately do NOT pull the
// actual photo from the linked article: that image belongs to the outlet
// (PRD §7 copyright rule covers text; the same reasoning applies to images),
// and this is a scrap-and-link service, not a photo re-publisher.
export function issuePhotoUrl(slug: string, width = 800, height = 450): string {
  return `https://picsum.photos/seed/${encodeURIComponent(slug)}/${width}/${height}`;
}
