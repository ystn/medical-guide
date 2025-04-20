import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MockDataProvider } from "@/lib/mock-data-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Guide",
  description: "your Ai powred medical guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scheme-only-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MockDataProvider>{children}</MockDataProvider>
      </body>
    </html>
  );
}
