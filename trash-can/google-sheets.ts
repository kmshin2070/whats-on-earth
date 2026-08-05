// Design Ref: DESIGN.md addendum — subscriber list mirrored to a Google
// Sheet (user request, specific sheet URL provided). Best-effort: Supabase
// (src/lib/supabase.ts) stays the source of truth for duplicate-detection;
// this just appends a row so the sheet stays a readable, always-current copy.
// NOT WIRED YET at runtime until GOOGLE_SERVICE_ACCOUNT_EMAIL and
// GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY exist in .env — see .env.example.
import "server-only";
import { JWT } from "google-auth-library";

const SPREADSHEET_ID = "1Bx5G6ofokpvR4lgX4NTNAF5y-GnAYzMcRl065GLtT1Q";
const DEFAULT_RANGE = "Sheet1!A:B";

export async function appendSubscriberRow(
  email: string,
  subscribedDate: string
): Promise<void> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!clientEmail || !privateKey) {
    console.warn(
      "[google-sheets] Skipped — GOOGLE_SERVICE_ACCOUNT_EMAIL/GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY not set in .env yet."
    );
    return;
  }

  const range = process.env.GOOGLE_SHEETS_RANGE || DEFAULT_RANGE;

  try {
    const jwt = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const { token } = await jwt.getAccessToken();

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
        range
      )}:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [[email, subscribedDate]] }),
      }
    );

    if (!res.ok) {
      console.error(
        `[google-sheets] append failed (${res.status}): ${await res.text()}`
      );
    }
  } catch (err) {
    console.error("[google-sheets] append threw:", err);
  }
}
