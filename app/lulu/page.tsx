"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

type BenefitKey =
    | "Producers"
    | "Suppliers"
    | "PolicyMakers"
    | "ExtensionOfficers"
    | "ResearchNGOs"
    | "Coops";

const BENEFITS: Record<BenefitKey, { title: string; subtitle:string, bullets: string[] }> = {
    Producers: {
        title: "Producers",
        subtitle:"Lulu is ideal for smallholder farmers:",
        bullets: [
            "Targets rural farmers and is accessible on both android smartphones and feature phones.",
            "Virtual purchase of inputs at lower prices based on a group purchasing strategy.",
            "Collects data from farmers and converts these into actionable feedback in near real-time.",
            "Accepts bulk data input for data already in electronic format.",
            "Activity calendars for extension staff and can serve as a tool to monitor field staff.",
            "Visualization platform to monitor trends and production patterns.",
            "Advisory information module that allow subscription to specific topics for best management. Additionally, it has inbuilt calendars that send information on what to do by default and free of charge."
        ],
    },
    Suppliers: {
        title: "Suppliers / Manufacturers",
        subtitle:"Input suppliers/manufacturers:",
        bullets: [
            "Enhanced reach to remote customers.",
            "Service delivery tracking.",
            "Easy customer tracking and linkages.",
            "Effective advertisement and farmer feedback platform."
        ],
    },
    PolicyMakers: {
        title: "Policy Makers",
        subtitle:"Policy Makers:",
        bullets: [
            "Traceability of produce/inputs.",
            "Service delivery tracking.",
            "Disease monitoring.",
            "Yield estimates /projections.",
            "Benefit /subsidy distribution and targeting."
        ],
    },
    ExtensionOfficers: {
        title: "Extension Officers",
        subtitle:"Extension officers",
        bullets: [
            "Precise farmer targeting",
            "Access to farmer and individual animal/crop case history.",
            "Activity planning/Event calendars.",
            "Income through commissions/bonuses."
        ],
    },
    ResearchNGOs: {
        title: "Research Projects / NGOs",
        subtitle:"Research Projects / NGOs",
        bullets: [
            "Access to curated data.",
            "Native farmer research networks.",
            "Data collection / Analysis service.",
            "Effective outreach/feedback platform.",
        ],
    },
    Coops: {
        title: "Cooperatives & Associations",
        subtitle:"Producers, Cooperatives and Associations:",
        bullets: [
            "Accurate production/treatment calendars.",
            "Input purchasing/Delivery.",
            "Advisory/E-Extension Service-Digital Education.",
            "Data driven decision support.",
            "Production records for loan processing.",
        ],
    },
};

export default function LuluPage() {
    const keys = Object.keys(BENEFITS) as BenefitKey[];
    const [active, setActive] = useState<BenefitKey>("Producers");

    return (
        <div className="min-h-screen bg-white mt-10 text-gray-900">
            {/* HERO */}
            <header className="relative">
                <div className="h-64 md:h-[420px] w-full relative overflow-hidden bg-black">
                    <Image
                        src="/usomi_9.jpg"
                        alt="Lulu hero"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-6">
                            <h1 className="text-yellow-500 text-2xl md:text-4xl font-extrabold">USOMI LULU</h1>
                            <p className="font-semibold mt-3 text-sm md:text-lg max-w-2xl mx-auto">
                                The Farmer’s Best Companion — a digital decision support platform for precision farming.
                            </p>

                            <div className="mt-4 flex items-center justify-center gap-3">
                                {/*<Link href="#" className="inline-block bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-semibold">*/}
                                {/*    Get it on Google Play*/}
                                {/*</Link>*/}
                                <Link href="/#components" className="hover:bg-yellow-50/30 inline-block bg-white/20 text-white px-4 py-2 rounded-full border border-white/30">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* DESCRIPTION + IMAGE */}
            <section id="components" className="py-10 md:py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-green-800">Components of Lulu®</h2>
                        <p className="mt-4 text-gray-700">
                            A data-driven decision support platform: farmers provide production records, the system analyses
                            data and returns trends, diagnostics and actionable feedback in near real-time. The input fulfilment
                            platform allows farmers to order inputs and pay via mobile money — items are sourced from registered agro-retailers.
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>• Performance tracking & benchmarking</li>
                            <li>• Mobile purchasing & delivery</li>
                            <li>• Advisory alerts & remedial suggestions</li>
                            <li>• Data for extension and research</li>
                        </ul>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden border border-green-50 shadow">
                        <Image src="/data-collection_1.jpg" alt="Lulu components" width={900} height={600} className="object-cover w-full h-56 md:h-72" />
                    </div>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: -20 }} // Initial state
                animate={{ opacity: 1, y: 0 }}   // Animation target state
                transition={{ duration: 0.5 }} // Animation duration
            >
            {/* BENEFITS - columns that act like table headers */}
            <section className="py-10 md:py-16 bg-black text-white rounded-xl mb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-2xl text-center font-semibold">Benefits of Lulu &reg;</h3>
                    <div className="mx-auto h-1 w-20 bg-green-200 my-4 rounded" />

                    {/* Column-like clickable list */}
                    <div className="hidden md:grid md:grid-cols-6 gap-4 mb-6">
                        {keys.map((k) => (
                            <button
                                key={k}
                                onClick={() => setActive(k)}
                                className={`py-6 px-3 text-center rounded-t-lg transition hover:cursor-pointer ${
                                    active === k
                                        ? "bg-white text-green-900 font-semibold shadow-inner"
                                        : "bg-white/5 text-white/80 hover:bg-white/10"
                                }`}
                            >
                                <div className="text-sm">{BENEFITS[k].title}</div>
                            </button>
                        ))}
                    </div>

                    {/* Mobile/touch friendly: horizontal scroller */}
                    <div className="md:hidden flex gap-3 overflow-x-auto pb-2 mb-6">
                        {keys.map((k) => (
                            <button
                                key={k}
                                onClick={() => setActive(k)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm border transition ${
                                    active === k ? "bg-yellow-400 text-green-900 border-yellow-400" : "bg-white/5 text-white/80 border-white/10"
                                }`}
                            >
                                {BENEFITS[k].title}
                            </button>
                        ))}
                    </div>

                    {/* Active panel: shows bullets */}
                    <div className="bg-white text-gray-800 rounded-b-lg p-6 md:p-8">
                        <h4 className="font-semibold text-lg">{BENEFITS[active].subtitle}</h4>

                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
                            {BENEFITS[active].bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            </motion.div>

            {/* IMAGE GRID / placeholder area */}
            {/*<section className="py-10">*/}
            {/*    <div className="max-w-6xl mx-auto px-6">*/}
            {/*        <h3 className="text-2xl text-green-800 font-semibold text-center">Lulu in Action</h3>*/}
            {/*        <div className="mx-auto h-1 w-20 bg-green-200 my-4 rounded" />*/}

            {/*        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">*/}
            {/*            {[*/}
            {/*                "/usomi_1.jpg",*/}
            {/*                "/images/lulu-2.jpg",*/}
            {/*                "/images/lulu-3.jpg",*/}
            {/*                "/images/lulu-4.jpg",*/}
            {/*                "/images/lulu-5.jpg",*/}
            {/*                "/images/lulu-6.jpg",*/}
            {/*                "/images/lulu-7.jpg",*/}
            {/*                "/images/lulu-8.jpg",*/}
            {/*            ].map((src) => (*/}
            {/*                <div key={src} className="rounded-md overflow-hidden border border-green-50">*/}
            {/*                    <Image src={src} alt="lulu" width={600} height={450} className="object-cover w-full h-36 sm:h-44" />*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* CTA + download *!/*/}
            {/*<section className="py-12 bg-green-50">*/}
            {/*    <div className="max-w-6xl mx-auto px-6 text-center">*/}
            {/*        <h4 className="text-xl font-semibold text-green-800">Lulu — the farmer’s best companion</h4>*/}
            {/*        <p className="mt-2 text-gray-700 max-w-2xl mx-auto">Record, monitor and improve farm performance. Order inputs and get them delivered.</p>*/}

            {/*        <div className="mt-6 flex items-center justify-center gap-3">*/}
            {/*            <Link href="#" className="bg-yellow-400 text-green-900 px-5 py-3 rounded-full font-semibold">Get it on Google Play</Link>*/}
            {/*            <Link href="#benefits" className="border border-green-200 px-5 py-3 rounded-full text-green-800">Explore benefits</Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    );
}
