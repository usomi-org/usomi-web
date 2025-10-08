"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed w-full py-0 top-0 z-40 bg-white">
            <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <rect width="24" height="24" rx="6" fill="#016630" />
                        <path d="M8 7V14C8 16 10 17 12 17C14 17 16 16 16 14V7" stroke="#efb100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-bold text-lg text-green-600">Usomi</span>
                </Link>


                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/" className="p-2 hover:bg-green-200 hover:rounded-full">Home</Link>
                    <Link href="/#about" className="p-2 hover:bg-green-200 hover:rounded-full">About</Link>
                    <Link href="/#initiatives" className="p-2 hover:bg-green-200 hover:rounded-full">Initiatives</Link>
                    <Link href="/#contact" className="px-4 py-2 bg-green-800 text-white rounded-full text-sm">Contact Us</Link>
                </div>


                {/* Mobile menu placeholder */}
                <div className="md:hidden">
                    <button aria-label="open menu" className="p-1 bg-white rounded-md">☰</button>
                </div>
            </nav>
        </header>
    );
}