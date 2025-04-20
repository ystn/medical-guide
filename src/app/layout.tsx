import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { MockDataProvider } from "@/lib/mock-data-provider";
=======
import QueryProvider from "@/providers/query-provider";
>>>>>>> 0c1f63c9e211e12ad74b49ac76ece33c055d569d

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
<<<<<<< HEAD
    <html lang="en" className="dark scheme-only-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MockDataProvider>{children}</MockDataProvider>
      </body>
    </html>
=======
    <QueryProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </QueryProvider>
>>>>>>> 0c1f63c9e211e12ad74b49ac76ece33c055d569d
  );
}
