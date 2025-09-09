// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Usomi",
  description: "Putting AgResearch into practice",
};

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} bg-white text-gray-900`}>
        <Navbar></Navbar>

        {/*max-w-7xl mx-auto */}

        <main className="px-4 py-10 max-w-10xl mx-auto">{children}</main>

        <footer className="border-t mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center text-black">
            © {new Date().getFullYear()} Usomi — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
