import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import RunCollage from "@/components/RunCollage";
import { Analytics } from "@vercel/analytics/next"

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
        <Analytics/>
        {/* Background collage */}
        <RunCollage />
        <Navbar />
        <div className="page-fade">
          <main className="max-w-7xl mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
