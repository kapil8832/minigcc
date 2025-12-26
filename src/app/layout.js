import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "MiniGCC | Stepping stone to a GCC in India",
  description:
    "MiniGCC helps mid-sized companies build captive-lite teams in India in just 3 months as a stepping stone to a full Global Capability Centre.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <Link href="/" className="flex items-baseline gap-2">
                <span className="text-xl font-semibold tracking-tight">
                  MiniGCC
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Stepping stone to a GCC in India
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/#how-it-works" className="text-slate-300 hover:text-white">
                  How it works
                </Link>
                <Link href="/pricing" className="text-slate-300 hover:text-white">
                  Pricing
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About
                </Link>
                <Link href="/#faq" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                    Schedule a strategy call
                  </Button>
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-slate-800">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} MiniGCC. All rights reserved.</p>
              <p>Captive-lite GCC launchpad for mid-sized global companies.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
