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

// const jetbrains = JetBrains_Mono({subsets: ["latin"],variable: "--font-jetbrains",});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} bg-white text-gray-900`}>
        <Navbar></Navbar>

        <main className="mx-auto">{children}</main>

        <footer className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center">
            © Copyright {new Date().getFullYear()} Usomi Limited. All Rights
            Reserved.
            <Link className="text-yellow-500 underline" href="privacy/policy">
              {" "}
              Privacy Policy
            </Link>
            |
            <Link
              className="text-yellow-500 underline"
              href="terms/and/conditions/"
            >
              {" "}
              Terms and conditions of Use{" "}
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
