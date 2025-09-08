"use client";
import { useState, useEffect } from "react";
import ImageComponent from "@/components/ImageComponent";
import {Poppins, Lato, JetBrains_Mono} from "next/font/google";
import { StockImages } from "@/lib/images";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const jetbrains = JetBrains_Mono({subsets: ["latin"],variable: "--font-jetbrains",});

export default function HomePage() {
    function shuffleArray<T>(array: T[]): T[] {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const [images, setImages] = useState(StockImages);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            if (counter >= images.length) {
                const shuffled = shuffleArray(images);
                setImages(shuffled);
                counter = 0;
                setCurrentImage(0);
            } else {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [images]);

    const initiatives = [
        { title: "UsomiRubi", img: "/usomi_18.jpg", desc: "Making markets work for farmers.", link: "/rubi" },
        { title: "UsomiLulu", img: "/usomi_19.jpg", desc: "Making data work for farmers.", link: "/lulu" },
        { title: "UsomiGenomics", img: "/usomi_17.jpg", desc: "Making genetics work for farmers.", link: "/genomics" },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen flex overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 bg-gradient-to-b from-green-100 to-white flex flex-col justify-center px-10 relative z-10">
                    <h1 className="text-6xl font-bold text-green-800">Usomi</h1>
                    <div className="w-20 h-1 bg-yellow-400 my-4"></div>
                    <p className="text-lg text-gray-700 max-w-md">
                        Putting AgResearch into practice. Harnessing data, research, and
                        technology to transform agriculture.
                    </p>
                    <a
                        href="#our-work"
                        className="mt-6 inline-block bg-yellow-400 text-green-900 px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition"
                    >
                        Explore Our Work
                    </a>
                </div>

                {/* Right Side (Slideshow) */}
                <div className="flex-1 relative">
                    {images.map((img, idx) => (
                        <ImageComponent
                            key={img}
                            imagePath={img}
                            alt="Slideshow"
                            width={1920}
                            height={1080}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                idx === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-l from-green-900/30 to-transparent"></div>
                </div>

                {/* Serrated Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-16">
                    <svg
                        className="h-full w-full text-green-100"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                    >
                        <polygon
                            fill="currentColor"
                            points="0,0 100,0 50,100 0,100"
                            opacity="0.5"
                        />
                    </svg>
                </div>
            </section>


            {/* Initiatives */}
            <section id="our-work" className="bg-gray-50 py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${poppins.className} text-3xl md:text-4xl font-semibold mb-10 text-center text-green-700`}>
                        Our Initiatives
                    </h2>
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-y-12 sm:gap-x-12">
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
                                    <h3 className={`${poppins.className} font-bold text-lg mt-4 text-green-800`}>{item.title}</h3>
                                    <p className={`${lato.className} text-gray-600 text-sm mt-1 max-w-xs`}>{item.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="bg-white py-20 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${poppins.className} text-4xl md:text-5xl font-semibold mb-6 text-green-800`}>About Us</h2>
                    <p className={`${lato.className} text-gray-700 text-lg leading-relaxed`}>
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
