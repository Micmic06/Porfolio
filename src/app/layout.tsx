import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian M. Miclat - Tech Operations & Backend Admin",
  description: "IT Graduate specializing in SEO optimization, web development, lead generation, and tech operations. Expert in data analysis and digital marketing solutions.",
  keywords: ["tech operations", "backend admin", "SEO specialist", "web developer", "lead generation", "data analysis", "virtual assistant", "IT graduate"],
  authors: [{ name: "Christian M. Miclat" }],
  creator: "Christian M. Miclat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://christianmiclat.com",
    title: "Christian M. Miclat - Tech Operations & Backend Admin",
    description: "IT Graduate specializing in SEO optimization, web development, lead generation, and tech operations.",
    siteName: "Christian M. Miclat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian M. Miclat - Tech Operations & Backend Admin",
    description: "IT Graduate specializing in SEO optimization, web development, lead generation, and tech operations.",
    creator: "@christianmiclat",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}