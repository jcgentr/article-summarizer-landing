import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gistr - Get the gist of any web article",
  description:
    "Transform lengthy web articles into clear, concise summaries with AI. Save time and stay informed with Gistr's Chrome extension and web app.",
  keywords: [
    "article summarizer",
    "AI summary",
    "web article",
    "chrome extension",
    "reading assistant",
  ],
  openGraph: {
    title: "Gistr - Get the gist of any web article",
    description:
      "Transform lengthy web articles into clear, concise summaries with AI",
    type: "website",
    url: "https://www.getgistr.com/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gistr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gistr - Get the gist of any web article",
    description:
      "Transform lengthy web articles into clear, concise summaries with AI",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-1">{children}</main>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
