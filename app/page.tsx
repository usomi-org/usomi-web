"use client";

import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import Initiatives_2 from "@/components/Initiatives";
import About from "@/components/About";
import {motion} from "framer-motion";
import ContactUs_1 from "@/components/contact/ContactUs_1";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">

            <section className="relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }} // Initial state
                    animate={{ opacity: 1, y: 0 }}   // Animation target state
                    transition={{ duration: 0.5 }} // Animation duration
                >
                <div
                    className="text-center max-w-6xl mx-auto px-6 md:px-12 pt-16"
                    style={{ minHeight: "30vh" }}
                >
                    <div className="pt-1 md:pt-6 relative z-30">

                        <div className="border w-12 md:w-24 border-green-200"/>

                        <h1 className="text-2xl md:text-6xl font-extrabold leading-tight text-black">
                            Putting AgResearch Into Practice
                        </h1>

                        <p className="text-1xl md:text-lg mt-5 text-gray-600 ">
                            Empowering farmers with innovative technology to increase
                            productivity, optimize resources, and achieve better yields.
                        </p>

                    </div>
                </div>
                </motion.div>


                <motion.div>
                <div
                    className="absolute left-0 right-0 mb-20"
                    style={{ top: "40vh", height: "100vh"}}
                >
                    {/* container centers content and controls max width */}
                    <div className="max-w-1xl mx-auto px-3 h-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                            {/* Slideshow itself (fills the rounded container) */}

                            <div className="absolute inset-0 z-10">
                                <BackgroundSlideshow />
                            </div>

                            {/* Overlay content on top of slideshow */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                    <About />
                            </div>

                        </div>
                    </div>
                </div>
                </motion.div>
            </section>

            {/* make page content start below the slideshow by adding top padding equal to slideshow bottom */}
            <main className="relative" style={{ paddingTop: "100vh" }}>
                <Initiatives_2/>
                <ContactUs_1 />
            </main>
        </div>
    );
}
