"use client";
import {motion} from 'framer-motion';
// export default function About() {
//     return (
//         <section className="bg-white py-20 md:py-32 px-6">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className={`text-4xl md:text-5xl font-semibold mb-6 text-green-800`}>About Us</h2>
//                 <p className={`text-gray-700 text-lg leading-relaxed`}>
//                     Usomi bridges the gap between agricultural research and everyday farming practice.
//                     We design data-driven solutions that improve the livelihoods of farmers across the region.
//                 </p>
//             </div>
//         </section>
//     );
// }

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }}   // Animation target state
            transition={{ duration: 0.5 }} // Animation duration
            whileHover={{ scale: 1.1 }}
        >
        <section id="about" className="py-16 md:py-28 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-yellow-500">
                    About Us
                </h2>
                <p className="font-bold text-base md:text-3xl leading-relaxed text-white">
                    USOMI Limited is a technical services provision company that seeks to address the poor adoption
                    of agricultural technologies and farming best practices. Our goal is to increase access to the right inputs,
                    markets and production maximization knowledge and information. Through our mobile and web platforms,
                    we help farmers purchase authentic high-quality inputs, provide a mechanism for data-driven bench marking
                    while also ensuring that farmers can aggregate their produce and sell directly to high value domestic and international markets.
                    We transform lives.
                </p>
            </div>
        </section>
        </motion.div>
    );
}
