import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">

                {/* Left - Copyright */}
                <div className="text-center md:text-left">
                    © {new Date().getFullYear()} <span className="font-semibold text-green-800">Usomi Limited</span>.
                    All Rights Reserved.
                </div>

                {/* Center - Links */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/privacy/policy" className="text-yellow-500 hover:text-yellow-600 transition">
                        Privacy Policy
                    </Link>
                    <span className="hidden md:inline text-gray-400">|</span>
                    <Link href="/terms/and/conditions" className="text-yellow-500 hover:text-yellow-600 transition">
                        Terms & Conditions
                    </Link>
                </div>

                {/* Right - Socials */}
                <div className="flex items-center justify-center gap-5 text-green-800">
                    <Link href="https://instagram.com" aria-label="Instagram">
                        <FaInstagram className="w-5 h-5 hover:text-yellow-500 transition" />
                    </Link>
                    <Link href="https://twitter.com" aria-label="Twitter">
                        <FaTwitter className="w-5 h-5 hover:text-yellow-500 transition" />
                    </Link>
                    <Link href="https://facebook.com" aria-label="Facebook">
                        <FaFacebookF className="w-5 h-5 hover:text-yellow-500 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
