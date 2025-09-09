"use client";

import ImageComponent from "@/components/ImageComponent";
import {Poppins, Lato, JetBrains_Mono} from "next/font/google";
import Link from "next/link";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import SerratedDivider from "@/components/SerratedDivider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const jetbrains = JetBrains_Mono({subsets: ["latin"],variable: "--font-jetbrains",});

export default function HomePage() {


    const initiatives = [
        { title: "UsomiRubi", img: "/usomi_18.jpg", desc: "Making markets work for farmers.", link: "/rubi" },
        { title: "UsomiLulu", img: "/usomi_19.jpg", desc: "Making data work for farmers.", link: "/lulu" },
        { title: "UsomiGenomics", img: "/usomi_17.jpg", desc: "Making genetics work for farmers.", link: "/genomics" },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen flex overflow-hidden">
                <LeftSide/>
                <RightSide/>
                <SerratedDivider/>
            </section>


            {/* Initiatives */}
            <section id="our-initiatives" className="bg-gray-50 py-16 md:py-24 px-6 h-dvh">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-semibold mb-10 text-center text-green-700`}>
                        Our Initiatives
                    </h2>
                    <div className="flex flex-col items-center sm:flex-row sm:justify-end gap-y-12 sm:gap-x-12">
                        {initiatives.map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center">
                                <Link href={item.link}>
                                    <ImageComponent
                                        imagePath={item.img}
                                        width={200}
                                        height={200}
                                        alt={item.title}
                                        className="rounded-full w-40 h-40 object-cover border-4 border-green-300 shadow-md"
                                    />
                                    <h3 className={`font-bold text-lg mt-4 text-green-800`}>{item.title}</h3>
                                    <p className={`text-gray-600 text-sm mt-1 max-w-xs`}>{item.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="bg-white py-20 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl md:text-5xl font-semibold mb-6 text-green-800`}>About Us</h2>
                    <p className={`text-gray-700 text-lg leading-relaxed`}>
                        Usomi bridges the gap between agricultural research and everyday farming practice.
                        We design data-driven solutions that improve the livelihoods of farmers across the region.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-green-700 py-20 md:py-32 text-white text-center px-6">
                <h2 className={`${poppins.className} text-4xl md:text-5xl font-semibold mb-4`}>Contact Us</h2>
                <p className={`${lato.className} max-w-md mx-auto mb-8 text-lg`}>
                    Reach us via email at{" "}
                    <span className="font-semibold text-yellow-300">info@usomi.com</span> or visit our offices to learn more.
                </p>
                <a
                    href="mailto:info@usomi.com"
                    className="bg-yellow-400 text-green-800 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition"
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
}
