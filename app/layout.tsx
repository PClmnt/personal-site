import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Peter Clement",
};

const Header = () => {
  return (
    <nav
      className="
      flex w-full max-w-3xl flex-row items-center gap-4 
      delay6 px-1 text-xs uppercase tracking-[0.1em] text-slate-300"
    >
      <Link href="/">About</Link>
      <span>|</span>
      <a href="/experience">Experience</a>
    </nav>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-zinc-50 font-sans dark:bg-black`}
      >
        <div className="flex items-center justify-center mt-5 mb-5">
          <Header />
        </div>
        <div className="flex items-center w-full max-w-3xl flex-row gap-4 px-1 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
