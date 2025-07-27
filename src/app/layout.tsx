import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompt Injection Prevention in Next.js: Best Practices & Guide",
  description:
    "Comprehensive guide to prompt injection prevention in Next.js. Learn best practices, techniques, and tips to secure your Next.js applications against prompt injection attacks. Updated for 2025.",
  keywords: [
    "prompt injection prevention",
    "Next.js security",
    "Next.js guide",
    "prompt injection attacks",
    "web application security",
    "secure Next.js app",
    "AI prompt security",
    "2025",
  ],
  openGraph: {
    title: "Prompt Injection Prevention in Next.js: Best Practices & Guide",
    description:
      "Comprehensive guide to prompt injection prevention in Next.js. Learn best practices, techniques, and tips to secure your Next.js applications against prompt injection attacks.",
    url: "https://yourdomain.com/",
    siteName: "Prompt Injection Prevention Next.js",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Prompt Injection Prevention in Next.js",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Injection Prevention in Next.js: Best Practices & Guide",
    description:
      "Comprehensive guide to prompt injection prevention in Next.js. Learn best practices, techniques, and tips to secure your Next.js applications against prompt injection attacks.",
    images: ["/placeholder-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><text y='52' font-size='52'>⚡</text></svg>`}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
