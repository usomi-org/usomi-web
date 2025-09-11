"use client";

// import { RightSide } from "@/components/RightSide";
// import { LeftSide } from "@/components/LeftSide";
import { RightSide1 } from "@/components/RightSide";
import { LeftSide1 } from "@/components/LeftSide";
import Initiatives from "@/components/Initiatives";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
// import {Poppins, Lato, JetBrains_Mono} from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
// const lato = Lato({ subsets: ["latin"], weight: ["400"] });
// const jetbrains = JetBrains_Mono({subsets: ["latin"],variable: "--font-jetbrains",});
// relative  flex h-screen lg:h-screen overflow-hidden lg:flex-row
// export default function HomePage() {
//     return (
//         <div className="flex flex-col">
//             {/*<section className="relative md:h-screen h-screen lg:flex-row lg:w-1/2 ">*/}
//             {/*    /!*<div className="flex flex-col lg:flex-row">*!/*/}
//             {/*        <LeftSide1/>*/}
//             {/*        <RightSide1/>*/}
//             {/*    /!*</div>*!/*/}
//             {/*</section>*/}
//             <section className="flex flex-col lg:flex-row h-screen">
//                 <div className="lg:w-1/2">
//                     <LeftSide1 />
//                 </div>
//                 <div className="lg:w-1/2 mt-6 lg:mt-0">
//                     <RightSide1 />
//                 </div>
//             </section>
//             {/* Initiatives */}
//             <section className="h-screen">
//                 <Initiatives/>
//             </section>
//
//             {/* About */}
//             {/*<section className="h-screen">*/}
//                 <About/>
//             {/*</section>*/}
//             {/* Contact */}
//             <ContactSection/>
//         </div>
//     );
// }
// export default function HomePage() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section - Fixed for mobile/desktop responsiveness */}
//       <section className="relative flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">
//         <LeftSide1 />
//         <RightSide1 />
//       </section>
//
//       {/* Initiatives */}
//       <Initiatives />
//       {/* About */}
//       <About />
//       {/* Contact */}
//       <ContactSection />
//     </div>
//   );
// }

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row h-auto lg:h-screen">
                {/* Left Side: Always Visible */}
                <div className="lg:w-1/2 flex">
                    <LeftSide1 />
                </div>

                {/* Right Side: Hidden on Mobile */}
                <div className="hidden lg:flex lg:w-1/2">
                    <RightSide1 />
                </div>
            </section>

            {/* Initiatives Section */}
            <Initiatives />

            {/* About Section */}
            <About />

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}

