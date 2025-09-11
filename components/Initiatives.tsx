"use client";

import Link from "next/link";
import ImageComponent from "@/components/ImageComponent";
import {initiatives} from "@/lib/images";

// export default function Initiatives() {
//     return (
//         <section id="initiatives" className="bg-gray-50 py-16 md:py-24 px-6 h-dvh">
//             <div className="max-w-5xl mx-auto">
//                 <h2 className={`text-3xl md:text-4xl font-semibold mb-10 text-center text-green-700`}>
//                     Our Initiatives
//                 </h2>
//                 <div className="flex flex-col items-center sm:flex-row sm:justify-end gap-y-12 sm:gap-x-12">
//                     {initiatives.map((item) => (
//                         <div key={item.title} className="flex flex-col items-center text-center">
//                             <Link href={item.link}>
//                                 <ImageComponent
//                                     imagePath={item.img}
//                                     width={200}
//                                     height={200}
//                                     alt={item.title}
//                                     className="rounded-full w-40 h-40 object-cover border-4 border-green-300 shadow-md"
//                                 />
//                                 <h3 className={`font-bold text-lg mt-4 text-green-800`}>{item.title}</h3>
//                                 <p className={`text-gray-600 text-sm mt-1 max-w-xs`}>{item.desc}</p>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
export default function Initiatives() {
    return (
        <section
            id="initiatives"
            className="bg-gray-50 py-16 md:py-24 px-6"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-green-700">
                    Our Initiatives
                </h2>

                {/* Responsive Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center">
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
                                <h3 className="font-bold text-lg mt-4 text-green-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1 max-w-xs">
                                    {item.desc}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

