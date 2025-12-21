"use client";

import Link from "next/link";
import Image from "next/image";
import FeatureCard from "@/components/cards/FeatureCard_1";
import Initiatives from "@/components/Initiatives";
import About from "@/components/About";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* ---------- TOP INTRO (about 1/3 of the viewport) ---------- */}
            <header className="w-full flex items-center justify-center">
                <div className="w-full max-w-6xl px-6 md:px-12 py-12 md:py-20">
                    <nav className="flex items-center justify-between mb-6">
                        {/* logo / nav placeholders — adapt to your nav */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-700" />
                            <span className="font-semibold text-lg">SawahNusa</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-sm">
                            <Link href="#" className="hover:underline">Home</Link>
                            <Link href="#about" className="hover:underline">About</Link>
                            <Link href="#initiatives" className="hover:underline">Service</Link>
                            <Link href="#shop" className="hover:underline">Shop</Link>
                            <Link href="#contact" className="px-4 py-2 bg-green-700 text-white rounded-full text-sm">Contact Us</Link>
                        </div>
                    </nav>

                    {/* Intro block: ~1/3 of the screen (use vh to approximate) */}
                    <div className="flex flex-col items-start gap-6"
                         style={{ minHeight: "32vh", maxHeight: "40vh" }}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            Enhancing Farmers' Capabilities<br/>with Advanced Technology.
                        </h1>

                        <p className="max-w-2xl text-gray-600 text-base md:text-lg">
                            Empowering farmers with innovative technology to increase productivity,
                            optimize resources, and achieve better yields.
                        </p>

                        <div className="flex gap-4 mt-2">
                            <Link
                                href="#contact"
                                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm shadow-sm hover:shadow-md transition"
                            >
                                Contact Us
                            </Link>

                            <Link
                                href="#initiatives"
                                className="px-6 py-3 bg-green-700 text-white rounded-full text-sm shadow hover:shadow-md transition"
                            >
                                Discover our product
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* ---------- LARGE IMAGE / VISUAL (starts around 40% from top) ---------- */}
            <section
                aria-hidden
                className="w-full flex justify-center -mt-4 md:-mt-8"
                style={{ scrollMarginTop: "40vh" }}
            >
                <div className="w-full max-w-6xl px-6 md:px-12">
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                        style={{ height: "60vh", minHeight: 420 }}
                    >
                        {/* Replace src with /images/hero-hero.png placed in public/images */}
                        <Image
                            src="/images/hero-hero.png"
                            alt="Aerial drone over crops"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Example decorative labels (simple, non-interactive) */}
                        <div className="absolute left-8 top-12 bg-white/90 text-sm px-3 py-1 rounded-md border border-white/60 shadow">
                            Nano Technology
                        </div>

                        <div className="absolute right-12 top-16 bg-white/90 text-sm px-3 py-1 rounded-md border border-white/60 shadow">
                            Propeller 8md
                        </div>

                        <div className="absolute left-1/2 bottom-16 translate-x-[-50%] bg-white/90 text-sm px-3 py-1 rounded-md border border-white/60 shadow">
                            FPV Camera
                        </div>

                        {/* small circular icons like the reference image */}
                        <div className="absolute left-6 bottom-6 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center border border-white/60 shadow">
                            🌿
                        </div>
                        <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center border border-white/60 shadow">
                            ✨
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- INITIATIVES + ABOUT (these start visually below the image) ---------- */}
            <main>
                <div id="initiatives" className="w-full max-w-6xl mx-auto px-6 md:px-12 -mt-8">
                    {/* small overlap so the initiatives feel connected to the image */}
                    <div className="bg-white pt-10 pb-16">
                        <h3 className="text-2xl font-bold mb-6">Our Initiatives</h3>

                        {/* Feature cards row (keeps your FeatureCard component) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FeatureCard
                                title="Data Analytics"
                                description="Advanced data collection and analysis for better decision making"
                            />
                            <FeatureCard
                                title="Market Access"
                                description="Connecting farmers directly to markets and buyers"
                            />
                            <FeatureCard
                                title="Technology"
                                description="Cutting-edge solutions for modern agriculture"
                            />
                        </div>
                    </div>
                </div>

                {/* Keep your components below */}
                <Initiatives />
                <About />
            </main>
        </div>
    );
}
