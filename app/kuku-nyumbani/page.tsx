"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function KukuNyumbaniPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* HERO */}
            <header className="relative">
                <div className="h-72 md:h-[520px] w-full relative overflow-hidden">
                    <Image
                        src="/usomi_1.jpg"
                        alt="Kuku Nyumbani hero"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />

                    {/* title centered */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center text-white drop-shadow-lg px-4">
                            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                                KukuNyumbani
                            </h1>
                            <p className="text-white mt-3 text-sm md:text-lg max-w-2xl mx-auto">
                                A Usomi initiative ensuring consistent supply and linking smallholders to high-value poultry markets.
                            </p>
                        </div>
                    </div>
                </div>

                {/* black about card overlapping hero */}
                <div className="max-w-5xl mx-auto px-6 md:px-0 -mt-2 md:-mt-3">
                    <div className="bg-black/95 text-white rounded-md shadow-xl p-8 md:p-12">
                        <h2 className="text-xl md:text-2xl font-semibold text-center">About Our Initiative</h2>

                        <div className="mt-4 text-sm md:text-base text-gray-200 max-w-4xl mx-auto">
                            <p>
                                The KukuNyumbani Initiative is a program by USOMI Limited which seeks to ensure consistent
                                supply to the market of Kienyeji (indigenous) chicken while linking Kienyeji poultry farmers
                                to high-value markets. We focus on farmer training, improved inputs, and market connections.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* OBJECTIVES */}
            <section className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-2xl text-center text-green-800 font-semibold">Our Objectives</h3>
                    <div className="mx-auto h-1 w-20 bg-green-200 my-4 rounded" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <article className="bg-white rounded-lg shadow-lg p-6">
                            <h4 className="font-semibold text-lg text-gray-800 mb-3">Overall Objectives</h4>
                            <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
                                <li>The transformation of rural poultry production by enabling private sector-led multiplication and integrated delivery of chicks, feed, and vaccines.</li>
                                <li>Empower rural households to acquire improved health, nutrition, and secure livelihoods.</li>
                            </ol>
                        </article>

                        <article className="bg-white rounded-lg shadow-lg p-6">
                            <h4 className="font-semibold text-lg text-gray-800 mb-3">Specific Objectives</h4>
                            <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
                                <li>Identify and train farmers to become potential mother units.</li>
                                <li>Ensure farmer access to superior quality feeds and high-quality chicks.</li>
                                <li>Link farmers to effective support services to reduce mortalities and maximize performance.</li>
                                <li>Facilitate farmer access to high value poultry markets.</li>
                            </ol>
                        </article>
                    </div>
                </div>
            </section>

            {/* FEATURE ROW */}
            <section className="py-10 bg-yellow-500 mb-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="rounded-lg overflow-hidden bg-[url('/images/chicks-bg.jpg')] bg-center bg-cover p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center gap-4">

                                <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center shadow border-2 border-black">
                                        <span className="text-green-700 font-bold text-4xl">📄</span>
                                </div>
                                <Link
                                    href="https://usomi-web.s3.amazonaws.com/website/PROGRAM_DETAILS.pdf"
                                    target="_blank"
                                >
                                    <h5 className="hover:bg-green-500 font-semibold text-black border-0 rounded-full p-2 border-green-200 bg-green-600">Information</h5>
                                </Link>

                                <p className="text-1xl font-bold  text-white/90 max-w-xs">Get detailed information about the KukuNyumbani Initiative.</p>
                            </div>


                            <div className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-yellow-100 border-2 flex items-center justify-center shadow">
                                    <span className="text-green-700 font-bold text-4xl">🤝</span>
                                </div>
                                <Link
                                    href="/motherunit"
                                    >
                                <h5 className="hover:bg-green-500 font-semibold text-black border-0 rounded-full p-2 border-green-200 bg-green-600">Join us</h5>
                                </Link>
                                <p className="text-1xl font-bold text-white/90 max-w-xs">Sign up as a mother unit and access support services.</p>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow bg-yellow-100 border-2">
                                    <span className="text-green-700 font-bold text-4xl">💰</span>
                                </div>

                                <Link
                                    href="/"
                                    target="_blank"
                                    >
                                <h5 className="hover:bg-green-500 font-semibold text-black border-0 rounded-full p-2 border-green-200 bg-green-600">Buy Kienyeji Chicken</h5>
                                </Link>
                                <p className="text-1xl font-bold text-white/90 max-w-xs">We facilitate access to high-value markets for quality Kienyeji birds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*my country flag*/}
            <div className="mx-auto h-1 w-1/3 bg-black my-4 rounded" />
            <div className="mx-auto h-1 w-2/3 bg-red-600 my-4 rounded" />
            <div className="mx-auto h-1 w-1/2 bg-green-600 my-4 rounded" />

            {/* GALLERY */}
            <section className="py-12 bg-black text-white mb-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-2xl text-center font-semibold mb-4">Our Gallery</h3>
                    <div className="mx-auto h-1 w-20 bg-green-200 my-4 rounded" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                        {[
                            "/chicken1.jpg",
                            "/chicken2.jpg",
                            "/chicken3.jpg",
                            "/usomi_4.jpg",
                            "/chicken8.jpg",
                            "/farmer-eggs.jpg",
                            "/chicken6.jpg",
                            "/usomi_5.jpg"
                        ].map((src) => (
                            <div key={src} className="bg-white/5 p-1 rounded-sm overflow-hidden">
                                <Image src={src} alt="gallery" width={500} height={400} className="object-cover w-full h-44" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
