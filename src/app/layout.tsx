import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bluesky vs. Nostr",
  description: "Events from Bluesky and Nostr, side by side.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200`}
      >
        <header className="h-16 bg-slate-100 dark:bg-slate-700">
          <nav className="flex h-full">
            <nav className="flex justify-between items-center p-4 w-full">
              <h1 className="text-xl font-bold">
                <Link href="/">Bluesky vs. Nostr</Link>
              </h1>
              <div className="flex pr-4">
                <Link href="/about" className={`font-semibold`}>
                  About
                </Link>
              </div>
            </nav>
          </nav>
        </header>
        <div className="flex grow min-h-[calc(100vh_-_4rem)]">{children}</div>
      </body>
    </html>
  );
}
