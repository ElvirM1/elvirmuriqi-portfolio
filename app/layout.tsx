import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Elvir Muriqi • Software Engineer",
  description:
    "Software Engineer building production-ready backend and full-stack applications with .NET, Python, React, and modern cloud tooling.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Elvir Muriqi • Software Engineer",
    description:
      "Software Engineer building production-ready backend and full-stack applications with .NET, Python, React, and modern cloud tooling.",
    siteName: "Elvir Muriqi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvir Muriqi • Software Engineer",
    description:
      "Software Engineer building production-ready backend and full-stack applications with .NET, Python, React, and modern cloud tooling.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${sora.variable} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
