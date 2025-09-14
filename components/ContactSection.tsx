"use client";

// ${poppins.className}
// ${lato.className}
// export default function ContactSection() {
//     return (
//         <section id="contact" className="bg-green-700 py-20 md:py-32 text-white text-center px-6">
//             <h2 className={`text-4xl md:text-5xl font-semibold mb-4`}>Contact Us</h2>
//             <p className={`max-w-md mx-auto mb-8 text-lg`}>
//                 Reach us via email at{" "}
//                 <span className="font-semibold text-yellow-300">info@usomi.com</span> or visit our offices to learn more.
//             </p>
//             <a
//                 href="mailto:info@usomi.com"
//                 className="bg-yellow-400 text-green-800 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition"
//             >
//                 Get in Touch
//             </a>
//         </section>
//     );
// }

export default function ContactSection() {
    return (
        <section id="contact" className="bg-green-700 py-16 md:py-28 text-white text-center px-6">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">Contact Us</h2>
            <p className="max-w-md mx-auto mb-8 text-base md:text-lg">
                Reach us via email at{" "}
                <span className="font-semibold text-yellow-300">info@usomi.com</span> or visit our offices to learn more.
            </p>
            <a
                href="mailto:info@usomi.com"
                className="inline-block bg-yellow-400 text-green-800 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition"
            >
                Get in Touch
            </a>
        </section>
    );
}
