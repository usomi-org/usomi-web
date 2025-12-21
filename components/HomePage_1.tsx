import Link from "next/link";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

export default function HP_1() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Slideshow */}
                <BackgroundSlideshow />

                {/* Foreground Content */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-xl">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Usomi
                            </h1>
                            <div className="w-24 h-1 bg-yellow-500 my-6 rounded-full"></div>

                            <p className="text-lg md:text-xl max-w-md leading-relaxed mb-2">
                                <span className="text-2xl md:text-3xl font-bold text-green-900">
                                    Empowering Farmers
                                </span>
                            </p>
                            <p className="text-lg md:text-xl max-w-md leading-relaxed">
                                with{" "}
                                <span className="font-semibold ">data</span>,{" "}
                                <span className="font-semibold ">technology</span>
                                {" "}and{" "}
                                <span className="font-semibold ">market access</span>.
                                We transform agriculture into opportunity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Link
                                    href="#initiatives"
                                    className="px-6 py-3 bg-yellow-500 text-green-900 rounded-xl shadow hover:bg-yellow-600 transition font-semibold text-center"
                                >
                                    Explore Our Initiatives
                                </Link>
                                <Link
                                    href="#"
                                    className="px-6 py-3 bg-white/80 text-green-800 rounded-xl shadow hover:bg-white transition font-semibold text-center backdrop-blur-sm"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Funding Announcement Banner */}
                {/*<div className="absolute top-20 left-0 right-0 z-20">*/}
                {/*    <div className="max-w-7xl mx-auto px-6">*/}
                {/*        <div className="bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4 shadow-md inline-block">*/}
                {/*            <span className="text-green-800 font-medium">*/}
                {/*                Announcing our next round of funding.{" "}*/}
                {/*                <Link href="#" className="text-yellow-600 hover:text-yellow-700 underline">*/}
                {/*                    Read more →*/}
                {/*                </Link>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>

            {/* Rest of your sections */}
            {/* <Initiatives /> */}
            {/* <About /> */}
            {/* <ContactSection /> */}
        </div>
    );
}