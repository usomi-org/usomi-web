"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/dna_1.jpg"; // <-- drop your genetics photo here (public/images/)

const livestockSections = [
    {
        title: "DNA Profiling",
        content: (
            <p>
                This service allows farmers to identify the breed composition of their animals and
                keep a genomic profile for future reference. Based on DNA profile data, genetic
                purity (or admixture) can be determined.
            </p>
        ),
    },
    {
        title: "Genetic Stock Identification",
        content: (
            <p>
                This service allows distinguishing between closely related species, strains, or
                ecotypes. It&apos;s critical for maintaining breed quality and authenticity.
            </p>
        ),
    },
    {
        title: "Parentage Testing",
        content: (
            <>
                <p>
                    We offer verification of parentage and identity in horses, cattle, pigs, sheep,
                    goats, and dogs.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Identify parents of each offspring.</li>
                    <li>Determine natural vs. assisted mating.</li>
                    <li>Identify sires with best/worst performing offspring.</li>
                </ul>
            </>
        ),
    },
    {
        title: "Testing for Disease Loci",
        content: (
            <>
                <p>
                    We provide analyses for multiple genetic abnormalities and conditions in cattle,
                    including: Neuropathic Hydrocephalus (NH), Arthrogryposis Multiplex (AM),
                    Osteopetrosis (OS), Tibial Hemimelia (TH), Coat Color Dilution (DL) and more.
                </p>
            </>
        ),
    },
];

const cropSections = [
    {
        title: "Variety Identification",
        content: <p>Identify crop varieties using DNA markers to ensure genetic accuracy.</p>,
    },
    {
        title: "Pathogen Identification",
        content: <p>Detect and manage seed-borne diseases to maintain healthy yields.</p>,
    },
    {
        title: "Genetic Purity Testing",
        content: <p>Assess genetic purity of seeds using molecular markers.</p>,
    },
    {
        title: "Virus Indexing",
        content: <p>Screen crops for viral pathogens that could affect productivity.</p>,
    },
    {
        title: "Advanced Genomic Tests",
        content: (
            <ul className="list-disc pl-6 space-y-1">
                <li>Genotyping by Sequencing (GBS)</li>
                <li>Genomic Data Analysis / Population Studies</li>
                <li>Whole Genome Sequencing (WGS) & Bioinformatics</li>
            </ul>
        ),
    },
];

export default function GeneticsPage() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen md:mt-1 -mt-1">
            {/* HERO - editable image + overlay + text on top */}
            <header className="relative h-64 md:h-[460px]">
                <Image
                    src={HERO_IMAGE}
                    alt="Genetics hero"
                    fill
                    className="object-cover"
                    priority
                />

                {/* dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

                {/* overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4 md:px-8">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">
                            USOMI GENETICS
                        </h1>
                        <p className="mt-3 text-sm md:text-lg text-white max-w-3xl mx-auto">
                            Genetic testing services to ensure the right crop varieties and livestock breeds for your production system.
                        </p>

                        <div className="mt-4 flex justify-center gap-3">
                            <Link href="/#contact" className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-semibold">
                                Contact
                            </Link>

                        </div>
                    </div>
                </div>
            </header>

            {/* Overview Section */}
            <section id="services" className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                    USOMI Genomics provides laboratory diagnostics and tissue culture services to
                    help farmers stay ahead of diseases, pests, and production challenges.
                    Contact us for bacterial, viral, and fungal diagnostics in vegetables and ornamental crops.
                </p>

                <Image
                    src={HERO_IMAGE}
                    alt="Genetics hero"
                    className="rounded-xl flex justify-center object-cover"
                    priority
                    width={500}
                    height={400}
                />
            </section>

            {/* Livestock Genetics Section */}
            <section className="bg-black border-t border-yellow-100 py-10 md:py-16">
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Livestock Genetic Services</h2>

                    <div className="space-y-3">
                        {livestockSections.map(({ title, content }) => (
                            <div key={title} className="border rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection(title)}
                                    className={`w-full text-left px-5 py-3 font-semibold flex justify-between items-center hover:cursor-pointer ${
                                        openSection === title ? "bg-yellow-500 text-white" : "bg-white text-black"
                                    }`}
                                >
                                    {title}
                                    <span className="ml-4">{openSection === title ? "−" : "+"}</span>
                                </button>

                                {openSection === title && (
                                    <div className="bg-white px-5 py-4 text-gray-700 text-sm md:text-base">
                                        {content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crop Genetics Section */}
            <section className="bg-white py-10 md:py-16">
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Crop Genetics Services</h2>
                    <p className="text-gray-700 mb-6">Our crop genetics division uses molecular tools to ensure seed quality and pathogen-free planting materials.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {cropSections.map(({ title, content }) => (
                            <div key={title} className="border border-green-200 bg-green-50 rounded-xl p-5">
                                <h3 className="font-semibold text-green-900 mb-2">{title}</h3>
                                <div className="text-gray-700 text-sm">{content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white text-center py-12 md:py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">Ready to Get Started?</h2>
                    <p className="text-gray-300 mb-6">Contact our laboratory team today to learn more about genetic testing and order diagnostics for your farm.</p>
                    <Link href="/#contact" className="bg-yellow-400 text-green-900 px-5 py-3 rounded-full font-semibold">Contact Us</Link>
                </div>
            </section>
        </div>
    );
}
