"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [initiativesOpen, setInitiativesOpen] = useState(false); // desktop hover/focus
    const [mobileInitiativesOpen, setMobileInitiativesOpen] = useState(false); // mobile toggle

    return (
        <header className="fixed w-full shadow-md py-0 top-0 z-40 bg-white">
            <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                    >
                        <rect width="24" height="24" rx="6" fill="#016630" />
                        <path
                            d="M8 7V14C8 16 10 17 12 17C14 17 16 16 16 14V7"
                            stroke="#efb100"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="font-bold text-lg text-green-800">Usomi</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/" className="p-2 hover:bg-green-200 hover:rounded-full">
                        Home
                    </Link>
                    <Link href="/#about" className="p-2 hover:bg-green-200 hover:rounded-full">
                        About
                    </Link>

                    {/* Initiatives dropdown (desktop) */}
                    <div
                        className="relative"
                        onMouseEnter={() => setInitiativesOpen(true)}
                        onMouseLeave={() => setInitiativesOpen(false)}
                    >
                        <button
                            aria-expanded={initiativesOpen}
                            onFocus={() => setInitiativesOpen(true)}
                            onBlur={() => setInitiativesOpen(false)}
                            className="p-2 hover:bg-green-200 hover:rounded-full flex items-center gap-2"
                        >
                            Initiatives
                            <span className="text-xs">▾</span>
                        </button>

                        {initiativesOpen && (
                            <div className="absolute mt-0 right-0 w-52 rounded-xl shadow-lg bg-white border border-green-100 z-50 overflow-hidden">
                                <Link
                                    href="/lulu"
                                    className="block px-4 py-3 hover:bg-yellow-50 text-green-800 transition"
                                >
                                    Lulu
                                </Link>
                                <Link
                                    href="/rubi"
                                    className="block px-4 py-3 hover:bg-yellow-50 text-green-800 transition"
                                >
                                    Rubi
                                </Link>
                                <Link
                                    href="/kuku-nyumbani"
                                    className="block px-4 py-3 hover:bg-yellow-50 text-green-800 transition"
                                >
                                    Kuku Nyumbani
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/#contact"
                        className="px-4 py-2 bg-green-800 text-white rounded-full text-sm"
                    >
                        Contact Us
                    </Link>

                </div>

                {/* Hamburger Button (Mobile) */}
                <div className="md:hidden">
                    <button
                        aria-label="Toggle menu"
                        className="p-2 rounded-md"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "Close" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
                    <div className="flex flex-col px-6 py-4 space-y-3 text-sm">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-700">
                            Home
                        </Link>
                        <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-green-700">
                            About
                        </Link>

                        {/* Initiatives expandable on mobile */}
                        <div>
                            <button
                                onClick={() => setMobileInitiativesOpen((s) => !s)}
                                className="w-full flex items-center justify-between px-0 py-2 text-left hover:text-green-700"
                            >
                                <span>Initiatives</span>
                                <span className="text-sm">{mobileInitiativesOpen ? "▴" : "▾"}</span>
                            </button>

                            {mobileInitiativesOpen && (
                                <div className="mt-2 flex flex-col pl-4 space-y-2">
                                    <Link href="/lulu" onClick={() => setIsOpen(false)} className="hover:text-green-700">
                                        Lulu
                                    </Link>
                                    <Link href="/rubi" onClick={() => setIsOpen(false)} className="hover:text-green-700">
                                        Rubi
                                    </Link>
                                    <Link href="/kuku-nyumbani" onClick={() => setIsOpen(false)} className="hover:text-green-700">
                                        Kuku Nyumbani
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/#contact"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 bg-green-800 text-white rounded-full text-center text-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
