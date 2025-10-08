"use client";

import React from "react";
import Link from "next/link";

type Section = { id: string; title: string; content: React.ReactNode };

const SECTIONS: Section[] = [
    {
        id: "overview",
        title: "Overview",
        content: (
            <>
                <p className="mb-2">
                    We respect your privacy. This Privacy Policy explains how USOMI Limited ("USOMI", "we", "us") collects,
                    uses, discloses and protects personal information when you use our website and Lulu® application.
                </p>
                <p className="mb-2">
                    By accessing or using our services you accept this Privacy Policy. Please read it carefully.
                </p>
            </>
        ),
    },

    {
        id: "what-we-collect",
        title: "What personal information does Usomi collect?",
        content: (
            <>
                <p className="mb-2">
                    We collect information you provide when registering or using the service including: name, address,
                    telephone number, email address, age and gender. We may also collect data when you participate in
                    promotions, bidding, buying, selling or other transactions connected to your account.
                </p>

                <p className="mb-2">
                    Additional sources include:
                </p>

                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Information you provide to customer care for support or follow-up;</li>
                    <li>Data from cookies and similar technologies (pages viewed, links clicked);</li>
                    <li>Information from third parties or social networks if you connect those accounts to Lulu®.</li>
                </ul>
            </>
        ),
    },

    {
        id: "how-used",
        title: "How is personal information used?",
        content: (
            <>
                <p className="mb-2">We use collected data for the following purposes:</p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Provide and improve products and services;</li>
                    <li>Create and manage user accounts and profiles;</li>
                    <li>Process payments, deliveries and communicate about orders;</li>
                    <li>Contact users for service matters and permitted marketing communications;</li>
                    <li>Conduct research and analytics to improve experience and operations;</li>
                    <li>Detect, prevent and investigate fraud or breaches of our Terms of Use.</li>
                </ul>
            </>
        ),
    },

    {
        id: "cookies",
        title: "What about cookies?",
        content: (
            <>
                <p className="mb-2">
                    Cookies are small identifiers stored on your device that help us recognise your browser and personalise
                    your experience. They may save preferences or identify pages you visit.
                </p>
                <p className="mb-2">
                    You may disable cookies in your browser, but doing so may limit functionality of the site. Our cookies do
                    not contain personal details or viruses.
                </p>
            </>
        ),
    },

    {
        id: "security",
        title: "How secure is information about me?",
        content: (
            <>
                <p className="mb-2">
                    We implement reasonable technical, administrative, and organisational security procedures to protect your
                    personal information against unauthorised access, use or disclosure. However, no internet transmission is
                    completely secure — we cannot guarantee absolute security.
                </p>

                <p className="mb-2">
                    For shared or public devices, please sign out after using our services to protect your account.
                </p>
            </>
        ),
    },

    {
        id: "information-sharing",
        title: "Information sharing",
        content: (
            <>
                <p className="mb-2">
                    We may share information with affiliates and selected third parties to operate our services, comply with
                    legal obligations, enforce Terms of Use, or support marketing and fraud prevention.
                </p>

                <p className="mb-2">
                    We do not share private information with unrelated third parties except with your permission or as required
                    by law. When sharing, we limit disclosure to what is necessary for the purpose.
                </p>
            </>
        ),
    },

    {
        id: "user-control",
        title: "User control",
        content: (
            <>
                <p className="mb-2">
                    You can review and update personal information by signing in to your account. You may also update details
                    provided through identity providers (e.g., social logins) using their settings.
                </p>

                <p className="mb-2">
                    Where applicable, you may request access, correction or deletion of your data in accordance with applicable
                    laws and our account processes.
                </p>
            </>
        ),
    },

    {
        id: "changes",
        title: "Changes to this policy",
        content: (
            <>
                <p className="mb-2">
                    We may update this Privacy Policy from time to time. We will notify you of material changes and posting the
                    revised policy on the site. Continued use of our services after such changes constitutes acceptance of the
                    updated policy.
                </p>
            </>
        ),
    },

    {
        id: "contact",
        title: "Contact information",
        content: (
            <>
                <p className="mb-2">
                    If you have questions about this policy or require assistance, please contact us at:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Email: info@usomi.co.ke</li>
                    <li>Phone: +254 736 407985</li>
                    <li>Address: Nairobi, Kenya</li>
                </ul>
            </>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 md:mt-10 mt-15">
            {/* Hero */}
            <header className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                    <h1 className="text-yellow-500 text-2xl md:text-4xl font-extrabold mb-3">Privacy Policy</h1>
                    <p className="text-sm md:text-base text-gray-300 max-w-3xl">
                        We respect your privacy and are committed to protecting the personal information you share with us.
                        This policy explains what we collect, how we use it, and how you can manage your information.
                    </p>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="md:flex md:gap-10">
                    {/* TOC */}
                    <nav className="hidden md:block md:w-64 sticky top-28 self-start">
                        <div className="rounded-md bg-white border border-green-50 p-4 shadow-sm">
                            <h4 className="text-sm font-semibold text-green-800 mb-3">On this page</h4>
                            <ul className="text-sm space-y-2 list-decimal pl-4">
                                {SECTIONS.map((s, idx) => (
                                    <li key={s.id}>
                                        <a href={`#${s.id}`} className="text-gray-700 hover:text-green-800 transition">
                                            {s.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4">
                                <button
                                    onClick={() => window.print()}
                                    className="w-full inline-block px-3 py-2 rounded-full bg-yellow-400 text-green-900 font-semibold"
                                >
                                    Print / Save PDF
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Terms content */}
                    <article className="flex-1">
                        {SECTIONS.map((s, idx) => (
                            <section id={s.id} key={s.id} className="mb-10">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-2xl font-semibold text-green-800">
                                        {idx + 1}. {s.title}
                                    </h2>
                                    <a href={`#${s.id}`} className="text-sm text-gray-500 hover:text-green-700 hidden md:inline">
                                        Link
                                    </a>
                                </div>

                                <div className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed bg-white p-6 rounded-lg border border-green-50 shadow-sm">
                                    {s.content}
                                </div>
                            </section>
                        ))}

                        {/* Closing / contact CTA */}
                        <div className="mt-8 bg-white p-6 rounded-lg border border-green-50 shadow-sm">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Contact</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                If you need more help or have questions about this policy, contact us using the details in the contact section above.
                            </p>

                            <div className="flex gap-3 items-center">
                                <Link href="/#contact" className="px-4 py-2 rounded-full bg-green-800 text-white">Contact Us</Link>
                                <button onClick={() => window.print()} className="px-4 py-2 rounded-full bg-yellow-400 text-green-900">Print</button>
                            </div>
                        </div>
                    </article>
                </div>
            </main>

        </div>
    );
}
