"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLButtonElement | null>(null);

    // Close on outside click
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        function onEsc(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    // optional: open on hover (for desktop)
    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);

    return (
        <header className="fixed w-full top-0 z-40 bg-white">
            <nav className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
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
                            stroke="#F6E05E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="font-semibold text-lg text-green-900">Usomi</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="#" className="p-2 hover:bg-green-200 hover:rounded-full">
                        Home
                    </Link>
                    <Link href="#about" className="p-2 hover:bg-green-200 hover:rounded-full">
                        About
                    </Link>
                    <Link href="#initiatives" className="p-2 hover:bg-green-200 hover:rounded-full">
                        Initiatives
                    </Link>

                    {/* Dropdown wrapper: relative so the absolute menu positions correctly */}
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Toggle button */}
                        <button
                            ref={toggleRef}
                            aria-haspopup="menu"
                            aria-expanded={open}
                            onClick={() => setOpen((s) => !s)}
                            className="px-4 py-2 rounded-full transition-all duration-200 bg-transparent hover:bg-green-200 flex items-center gap-2"
                        >
                            Our Work
                            {/* small chevron */}
                            <svg
                                className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : "rotate-0"}`}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 8l5 5 5-5" stroke="#064E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Menu */}
                        <div
                            ref={dropdownRef}
                            role="menu"
                            aria-label="Our Work menu"
                            className={`absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm border border-green-100 transition-all duration-200 transform origin-top ${
                                open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                            } z-50`}
                        >
                            <Link
                                href="/rubi"
                                role="menuitem"
                                className="block rounded-t-xl px-4 py-3 hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                                onClick={() => setOpen(false)}
                            >
                                Data Collection and Analytics
                            </Link>

                            <Link
                                href="/lulu"
                                role="menuitem"
                                className="block px-4 py-3 hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                                onClick={() => setOpen(false)}
                            >
                                UsomiLulu
                            </Link>

                            <Link
                                href="/genomics"
                                role="menuitem"
                                className="block px-4 py-3 hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                                onClick={() => setOpen(false)}
                            >
                                Genetic Testing
                            </Link>

                            <Link
                                href="/kuku-nyumbani-initiatives"
                                role="menuitem"
                                className="block px-4 py-3 rounded-b-xl hover:bg-yellow-100 text-green-700 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Kuku Nyumbani initiative
                            </Link>
                        </div>
                    </div>

                    <Link href="#contact" className="px-4 py-2 bg-green-800 text-white rounded-full text-sm">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile menu placeholder (you can wire a dropdown / drawer later) */}
                <div className="md:hidden">
                    <button aria-label="open menu" className="p-2 bg-white/20 rounded-md">☰</button>
                </div>
            </nav>
        </header>
    );
}
