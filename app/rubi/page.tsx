"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RubiPage() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-black via-green-900 to-yellow-500 text-white overflow-hidden">
                {/* Replace with your own hero image */}
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/data-collection_1.jpg" // <-- your image path here
                        alt="Rubi Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
                        USOMI RUBI
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white mt-2 font-medium">
                        THE SMART AGGREGATOR
                    </h2>
                    <p className="mt-6 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Rubi&reg; virtually aggregates farm produce across East Africa. Farmers benefit
                        from economies of scale and access to better-paying markets through smart,
                        transparent bidding and logistics coordination.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="bg-yellow-400 hover:bg-yellow-50 text-green-900 font-semibold px-5 py-2 rounded-full"
                        >
                            Try Rubi Today
                        </Link>
                        <Link
                            href="#services"
                            className="border border-yellow-300 hover:bg-yellow-50/20 text-yellow-300 font-semibold px-5 py-2 rounded-full"
                        >
                            Learn More
                        </Link>
                    </div>

                    <p className="font-bold mt-5 text-sm italic text-gray-300">
                        Available on Web, Android & USSD
                    </p>
                </div>

                {/* angled divider */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-green-100 blur-xl rotate-[-2deg] origin-bottom-left" />
            </section>

            {/* INTRO */}
            <section className="max-w-5xl mx-auto px-6 md:px-10 mt-12">
                <div className="text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Many farmers produce small quantities of commodities and are often locked out
                        of high-paying markets. Rubi® solves this by aggregating their produce,
                        enabling fair prices and easy access to service providers.
                    </p>
                </div>

            </section>

            {/* SERVICES */}
            <section
                id="services"
                className="bg-yellow-500 border-t rounded-xl border-green-100 mt-16 py-12 md:py-20"
            >
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-10">
                        Services Offered By Rubi&reg;
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Sale and purchase of farm produce.",
                            "Requisition for services (spraying, tilling, weeding, vaccination).",
                            "Aggregation of low produce volumes for better market prices.",
                            "Group access to animal health services.",
                            "Group access to machinery and logistics services.",
                            "Employment opportunity for tech-savvy youth.",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl border border-green-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <p className="text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW RUBI WORKS */}
            <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-10">
                    How Rubi&reg; Works
                </h2>

                <ol className="relative border-l-4 border-yellow-400 pl-6 space-y-8">
                    {[
                        "Rubi counts available produce in a given region.",
                        "When enough volume is reached, notifications go out to potential buyers.",
                        "Buyers bid, and the highest bidder gets the offer.",
                        "Farmers are informed of sale prices and receive 90% (after expenses).",
                        "Aggregators enroll as commodity supply specialists, vetted and certified locally.",
                        "Aggregators post available produce with price and harvest details.",
                        "They deliver produce of approved quality to collection centers and get paid a commission.",
                    ].map((step, index) => (
                        <li key={index} className="relative">
                            <div className="absolute -left-[30px] top-2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow" />
                            <p className="text-gray-800">{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* CTA */}
            <section className="bg-black text-center text-white py-14 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
                    Become a Smart Aggregator
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                    Join Rubi&reg; today and empower farmers across the region while earning through
                    modern digital agriculture.
                </p>
                <Link
                    href="/#contact"
                    className="bg-yellow-400 text-green-900 px-6 py-3 rounded-full font-semibold"
                >
                    Get Started
                </Link>
            </section>
        </div>
    );
}
