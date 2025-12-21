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

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <head>
            {/* explicit viewport to be safe */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        {/* overflow-x-hidden helps stop accidental horizontal scroll at high zoom while you fix elements */}
        <body className={`${jetbrains.variable} text-gray-900 overflow-x-hidden`}>
        <Navbar_2 />

        {/* main container: max width + padding so content scales and doesn't hug the viewport edges */}
        <main className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Helpful tip: if you have flex children that hold long text, add `min-w-0` to them */}
            {children}
        </main>

        <footer className="border-t border-green-200">
            <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center">
                &copy; Copyright {new Date().getFullYear()} Usomi Limited. All Rights Reserved.
                <span className="mx-2">•</span>
                <Link className="text-yellow-500 underline" href="/privacy-policy">Privacy Policy</Link>
                <span className="mx-2">|</span>
                <Link className="text-yellow-500 underline" href="/terms-and-conditions">Terms and conditions of Use</Link>
            </div>
        </footer>
        </body>
        </html>
    );
}
