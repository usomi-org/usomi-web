"use client";

import React, { useState } from "react";
import MessagePopup from "@/components/cards/MessageCard";
import Link from "next/link";

export default function ContactUs_1() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [wordsLeft, setWordsLeft] = useState(150);
    const [openMsg, setOpenMsg] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "message") {
            const words = value.trim().split(/\s+/).filter(Boolean);
            const remaining = 150 - words.length;
            setWordsLeft(remaining >= 0 ? remaining : 0);
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // do your submit work (API, supabase, etc.) here
        setForm({ name: "", email: "", message: "" });
        setWordsLeft(150);
        setOpenMsg(true);
    };

    return (
        <section id="contact" className="bg-yellow-100/30 py-8 px-6 shadow-md">
            {/* Render as JSX and pass onClose to update parent state */}
            <MessagePopup
                open={openMsg}
                message="Thank you for contacting Usomi!"
                severity="success"
                autoCloseMs={2000}
                onClose={() => setOpenMsg(false)}
            />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center "  style={{minHeight:"50vh"}}>
                {/* Left side - contact info */}
                <div>
                    <h2 className="text-xl md:text-4xl font-bold text-green-900 mb-4">
                        Get in Touch with Usomi
                    </h2>
                    <p className="text-sm md:text-1xl text-gray-600 mb-6">
                        Whether you have a question about our initiatives, products, or want to collaborate —
                        we’d love to hear from you. Send us a message and we’ll respond as soon as we can.
                    </p>

                    <div className="text-sm md:text-1xl space-y-3 text-green-800">
                        <p><span className="font-semibold text-yellow-600">Email:</span> info@usomi.co.ke</p>
                        <p><span className="font-semibold text-yellow-600">Phone:</span> Kenya: +254 736 407985</p>
                        <p><span className="font-semibold text-yellow-600">Phone:</span> Uganda: +256 779 156815</p>
                        <p><span className="font-semibold text-yellow-600">Phone:</span> Tanzania: +255 752 905156</p>
                        <p><span className="font-semibold text-yellow-600">Location:</span> Hardy Shopping Centre , Ushirika Road , Karen , P.O. Box 105086-00101 , Nairobi Kenya </p>
                    </div>

                    <Link
                    href="https://www.google.com/maps/place/Giraffe+Centre/@-10.7681942,-19.438072,3z/data=!4m14!1m7!3m6!1s0x182f05a9a4e927d3:0xe161fe0b53c6351f!2sGiraffe+Centre!8m2!3d-1.3763639!4d36.7443169!16zL20vMDltOTBq!3m5!1s0x182f05a9a4e927d3:0xe161fe0b53c6351f!8m2!3d-1.3763639!4d36.7443169!16zL20vMDltOTBq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    >
                        <button className="hover:cursor-pointer rounded-xl bg-yellow-500 text-white px-4 py-1 mt-5 border-2 shadow-md border-green-700">See Us From Google Maps</button>
                    </Link>
                </div>

                {/* Right side - form */}
                <form
                    onSubmit={handleSubmit}
                    className="text-sm md:text-3xl bg-white shadow-lg rounded-2xl p-8 border border-green-100"
                >
                    <h3 className="text-1xl font-semibold text-green-900 mb-6">
                        Send us a Message
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-green-900 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="text-sm w-full px-4 py-2 border border-green-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-green-900 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="text-sm w-full px-4 py-2 border border-green-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-green-900 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="text-sm w-full px-4 py-2 border border-green-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
                            />
                            <span className="text-sm">words remaining: {wordsLeft}</span>
                        </div>

                        <button
                            type="submit"
                            className="hover:cursor-pointer text-sm md:w-40 w-30 bg-green-800 text-white py-2 rounded-full hover:bg-green-900 transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
