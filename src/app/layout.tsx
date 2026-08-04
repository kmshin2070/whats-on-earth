import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MarketTicker } from "@/components/MarketTicker";
import { NavBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Design Ref: DESIGN.md addendum — masthead-only font, WSJ-style traditional
// serif nameplate look (user request). Applied only to the site title, not
// other headlines (those keep the generic font-serif stack).
const mastheadFont = Playfair_Display({
  variable: "--font-masthead",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "What's on Earth",
  description:
    "Daily Macro, Markets, and Business economic issues with cross-verified source links.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${mastheadFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MarketTicker />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
