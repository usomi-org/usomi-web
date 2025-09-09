"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-20 mt-2 border-t-1 border-b-1 border-green-500 transition-all ${
                scrolled
                    ? "backdrop-blur-md shadow-md"
                    : "bg-green-50"
            }`}
        >
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
                <h2 className="text-green-800 font-bold text-xl">Usomi</h2>
                <ul className="flex space-x-8 text-green-700 font-medium">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li className="relative group">
                        <button className="hover:text-yellow-500">Our Work</button>
                        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
                            <Link href="/rubi" className="block px-4 py-2 hover:bg-green-50 text-1xl">
                                Data Collection and Analytics
                            </Link>
                            <Link href="/lulu" className="block px-4 py-2 hover:bg-green-50">
                                UsomiLulu
                            </Link>
                            <Link href="/genomics" className="block px-4 py-2 hover:bg-green-50">
                                Genetic Testing
                            </Link>

                            <Link href="/kuku-nyumbani-initiatives" className="block px-4 py-2 hover:bg-green-50">
                                Kuku Nyumbani initiative
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}
