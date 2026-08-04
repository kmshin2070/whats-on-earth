// Design Ref: DESIGN.md addendum — subscribe page (user request: a page with
// an email field + submit button, reached via a nav button next to search).
import { subscribe } from "./actions";

const STATUS_MESSAGES: Record<string, { tone: "ok" | "error"; text: string }> = {
  success: {
    tone: "ok",
    text: "You're on the list. (Email sending isn't connected yet, so no confirmation email will arrive right now — that's a follow-up once an email provider is chosen.)",
  },
  duplicate: { tone: "ok", text: "That email is already subscribed." },
  invalid: { tone: "error", text: "That doesn't look like a valid email address." },
  error: { tone: "error", text: "Something went wrong — please try again." },
};

export default async function SubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const message = status ? STATUS_MESSAGES[status] : undefined;

  return (
    <main className="mx-auto max-w-md px-4 py-10 sm:px-6">
      <h1 className="font-serif text-2xl font-bold sm:text-3xl">Subscribe</h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        Get every day&apos;s Macro, Markets, and Business issues by email.
      </p>

      {message && (
        <p
          className={`mt-4 border px-3 py-2 text-sm ${
            message.tone === "ok"
              ? "border-neutral-300 bg-neutral-50 text-neutral-800"
              : "border-red-300 bg-red-50 text-red-800"
          }`}
        >
          {message.text}
        </p>
      )}

      <form action={subscribe} className="mt-6 flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border border-neutral-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="shrink-0 border border-black px-4 py-2 text-sm font-medium uppercase"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
