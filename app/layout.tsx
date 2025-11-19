import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "479 - Run With Us!",
  description: "479 Run Club is a community running club based in Northwest Arkansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
