// Design Ref: DESIGN.md addendum — email sending. NOT WIRED YET: the user
// chose to build the subscribe form + storage first and pick an email
// provider later (no RESEND_API_KEY/equivalent in .env yet). These functions
// are the integration point for that follow-up — call sites already exist
// (src/app/subscribe/actions.ts, src/app/api/cron/daily-digest/route.ts) so
// wiring a real provider later is a one-file change, not a redesign.
import "server-only";
import type { Issue } from "@/types/issue";

export async function sendConfirmationEmail(email: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      `[email] Skipped confirmation email to ${email} — no email provider configured yet.`
    );
    return;
  }
  throw new Error("Email provider not implemented yet.");
}

export async function sendDailyDigest(
  subscriberEmails: string[],
  issues: Issue[]
): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      `[email] Skipped daily digest of ${issues.length} issue(s) to ${subscriberEmails.length} subscriber(s) — no email provider configured yet.`
    );
    return;
  }
  throw new Error("Email provider not implemented yet.");
}
