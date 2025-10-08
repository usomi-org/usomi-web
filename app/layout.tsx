import "./globals.css";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import React from "react";
import { Metadata } from "next";
import Navbar_2 from "@/components/navbars/Navbar_2";

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
      <body className={`${jetbrains.variable} text-gray-900`}>
        <Navbar_2 />
        <main className="mx-auto">{children}</main>

        <footer className="border-t border-green-200 md:">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center">
              &copy; Copyright {new Date().getFullYear()} Usomi Limited. All Rights
            Reserved.
            <Link className="text-yellow-500 underline" href="/privacy-policy">
              {" "}
              Privacy Policy
            </Link>
            |
            <Link
              className="text-yellow-500 underline"
              href="/terms-and-conditions"
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
