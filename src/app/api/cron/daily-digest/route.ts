// Design Ref: DESIGN.md addendum — daily digest send. Scheduled via
// vercel.json's `crons` entry. Currently a no-op past the subscriber-fetch
// step because src/lib/email.ts isn't wired to a real provider yet (user
// chose to defer that decision) — safe to deploy as-is, just won't send mail.
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { sendDailyDigest } from "@/lib/email";
import { issues, issuesForLatestDate } from "@/data/issues";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("subscribers").select("email");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const emails = (data ?? []).map((row) => row.email as string);
  await sendDailyDigest(emails, issuesForLatestDate(issues));

  return NextResponse.json({ subscriberCount: emails.length });
}
