// components/Initiatives.tsx
"use client";

import Link from "next/link";
import ImageComponent from "@/components/ImageComponent";
import React from "react";
import {initiatives} from "@/lib/images";


export default function Initiatives_2() {
    return (
        <section id="initiatives" className="py-12 md:py-20 bg-transparent">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-green-800">
                    Our Initiatives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {initiatives.map((item) => (
                        <article
                            key={item.title}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4 md:p-6 flex flex-col items-center text-center"
                        >
                            <Link href={item.link} className="w-full">
                                <div className="w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-green-100 shadow-sm">
                                    {/* ImageComponent should support fill or width/height; using it keeps your project consistent */}
                                    <ImageComponent
                                        imagePath={item.img}
                                        width={200}
                                        height={200}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg md:text-xl font-semibold text-green-900">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 max-w-[22rem] mx-auto line-clamp-3">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-green-900 font-medium text-sm transition group-hover:scale-105">
                    Learn more
                  </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
