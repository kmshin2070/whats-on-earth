"use server";

// Design Ref: DESIGN.md addendum — subscribe form submit handler.
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase";
import { sendConfirmationEmail } from "@/lib/email";
import { appendSubscriberRow } from "@/lib/google-sheets";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_PATTERN.test(email)) {
    redirect("/subscribe?status=invalid");
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("subscribers").insert({ email });

  if (error) {
    // Postgres unique_violation
    if (error.code === "23505") {
      redirect("/subscribe?status=duplicate");
    }
    console.error("[subscribe] insert failed:", error.message);
    redirect("/subscribe?status=error");
  }

  // Supabase is the source of truth (has the uniqueness check above); the
  // sheet append is a best-effort mirror and never blocks the redirect.
  const subscribedDate = new Date().toISOString().slice(0, 10);
  await appendSubscriberRow(email, subscribedDate);

  await sendConfirmationEmail(email);
  redirect("/subscribe?status=success");
}
