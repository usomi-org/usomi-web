"use client";

import React from "react";

type Section = { id: string; title: string; content: React.ReactNode };

const SECTIONS: Section[] = [
    {
        id: "introduction",
        title: "INTRODUCTION",
        content: (
            <>
                <p className="mb-3">
                    Welcome to <strong>www.usomi.com</strong>. These terms and conditions (&quot;Terms and Conditions&quot;)
                    describe the terms governing your use of the LULU Application and USOMI website including content,
                    updates and new releases (collectively, the &quot;Software&quot;) offered by USOMI LIMITED.
                </p>

                <p className="mb-3">
                    The Terms include, by reference, the USOMI LIMITED Privacy Statement and any additional third-party
                    terms that may apply. Review these Terms before using the Software. Clicking &quot;I Agree&quot; or installing
                    the Software indicates acceptance of these Terms. If you do not agree, do not use the Software.
                </p>
            </>
        ),
    },

    {
        id: "account-registration",
        title: "1. YOUR ACCOUNT AND REGISTRATION OBLIGATIONS",
        content: (
            <>
                <p className="mb-2">
                    When you register as a member on the USOMI website or any USOMI related software (“LULU”) you will
                    be required to provide registration data (username and password) and to keep it current and secure.
                </p>

                <ol className="list-decimal pl-6 text-sm space-y-2">
                    <li>Be responsible for maintaining confidentiality of your account and password and for all activity under your account.</li>
                    <li>Notify USOMI LIMITED immediately of any unauthorized use or security breach.</li>
                    <li>Not use another person&apos;s account without express permission.</li>
                    <li>Reimburse USOMI LIMITED for any improper or unauthorized use of your account.</li>
                    <li>Provide true, accurate, current and complete Registration Data and promptly update it as necessary.</li>
                </ol>

                <p className="mt-3 text-sm">
                    Additional points: usernames cannot include the word &quot;USOMI&quot;; USOMI may suspend or withdraw access for inaccurate information;
                    USOMI may verify identity and request documents when necessary.
                </p>
            </>
        ),
    },

    {
        id: "license-grant",
        title: "2. LICENSE GRANT",
        content: (
            <>
                <p className="mb-2">
                    The Software is protected by intellectual property laws. Subject to your compliance with these Terms,
                    USOMI grants you a personal, limited, non-exclusive, non-transferable, revocable license to use the
                    Software for the purposes described by USOMI. The Software is licensed, not sold.
                </p>

                <p className="mb-2">
                    You must not use the Software in any way that violates applicable law or these Terms.
                </p>
            </>
        ),
    },

    {
        id: "restrictions",
        title: "3. RESTRICTIONS",
        content: (
            <>
                <p className="mb-2">As a registered member you agree not to:</p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Provide or give the Software to third parties or reproduce, modify, reverse-engineer or resell it.</li>
                    <li>Attempt unauthorized access to USOMI systems or make the Software available via hosting/file-sharing services.</li>
                    <li>Use false emails or misrepresent the origin of submissions.</li>
                </ul>

                <p className="mt-2 text-sm">Any breach may result in immediate revocation of your license.</p>
            </>
        ),
    },

    {
        id: "user-submissions",
        title: "4. USER SUBMISSIONS",
        content: (
            <>
                <p className="mb-2">
                    Anything you submit to the Site (comments, reviews, suggestions — &quot;Submissions&quot;) becomes USOMI LIMITED&apos;s
                    sole and exclusive property. By posting materials you grant USOMI the right to use your name in connection
                    with such content. USOMI is not obliged to remove or edit Submissions.
                </p>
            </>
        ),
    },

    {
        id: "electronic-communications",
        title: "5. ELECTRONIC COMMUNICATIONS",
        content: (
            <>
                <p className="mb-2">
                    You agree USOMI may communicate with you by email, SMS, or posting notices on the Software. Electronic
                    communications satisfy any legal writing requirement. During registration USOMI may send notifications
                    and promotional messages about features or promotions.
                </p>
            </>
        ),
    },

    {
        id: "buyer-protection",
        title: "6. BUYER PROTECTION",
        content: (
            <>
                <p className="mb-2">
                    USOMI operates a Buyer Protection Program under a “buyer beware” principle. If a buyer does not receive
                    an item or receives an item substantially different from its description, they may file a complaint
                    within 48 hours for investigation. USOMI may suspend or limit the supplier’s access or take other steps
                    if fraud is determined.
                </p>
            </>
        ),
    },

    {
        id: "shipping-fees",
        title: "7. SHIPPING FEES FOR RETURNED ITEMS",
        content: (
            <>
                <p className="mb-2"><strong>Returned due to supplier fault (item not as described / defective):</strong></p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>If claimed within 15 days: supplier pays delivery and return shipment fees.</li>
                    <li>If claimed after 15 days: buyer pays delivery fees; supplier pays return shipment fees.</li>
                </ul>

                <p className="mt-3 mb-2"><strong>Returned due to buyer fault (item in original state):</strong></p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>If claimed within 15 days: buyer pays delivery and return shipment fees.</li>
                    <li>If claimed after 15 days: items will not be accepted back and no refund will be issued.</li>
                </ul>

                <p className="mt-3 text-sm">If a return request is not approved and the customer rejects receipt, USOMI may dispose of the item after 60 days.</p>
            </>
        ),
    },

    {
        id: "selling-auctions",
        title: "8. SELLING & HOSTING AUCTIONS",
        content: (
            <>
                <p className="mb-2">
                    Registered members may list items for sale in compliance with applicable laws. Listings must describe items
                    truthfully and be placed in correct categories. When an auction closes, an email will be sent to both buyer
                    and seller containing contact details for the purpose of fulfilling the transaction.
                </p>
            </>
        ),
    },

    {
        id: "prohibitions",
        title: "9. PROHIBITIONS",
        content: (
            <>
                <p className="mb-2">
                    It is prohibited to solicit business outside the platform (e.g., posting contact details in a listing).
                    Items listed must be in stock and listings must not be misleading.
                </p>
            </>
        ),
    },

    {
        id: "conditions",
        title: "10. CONDITIONS",
        content: (
            <>
                <p className="mb-2">
                    If the item condition does not match the description you agree to refund the buyer. Do not list the same
                    item multiple times; USOMI may delete duplicate listings. If an item receives a valid bid, you are legally
                    obligated to complete the sale and ship the item within 48 hours of payment verification.
                </p>
            </>
        ),
    },

    {
        id: "limitations",
        title: "11. LIMITATIONS",
        content: (
            <>
                <p className="mb-2">
                    USOMI may suspend, limit or withdraw your access or membership if you engage in false or fraudulent activity.
                </p>
            </>
        ),
    },

    {
        id: "communication",
        title: "12. COMMUNICATION",
        content: (
            <>
                <p className="mb-2">
                    Sellers are encouraged to leave feedback after transactions. Contact information shared is taken from users’
                    registration data; do not use another user's details for any purpose other than fulfilling transactions.
                </p>
            </>
        ),
    },

    {
        id: "liability",
        title: "13. LIABILITY OF PARTIES ON THE USOMI MARKETPLACE",
        content: (
            <>
                <p className="mb-2">
                    Products listed on the USOMI marketplace are offered by registered members; USOMI does not own or sell listed
                    products, nor is it involved in transactions between buyers and sellers. USOMI is not liable for these transactions.
                </p>
            </>
        ),
    },

    {
        id: "arbitration",
        title: "14. ARBITRATION",
        content: (
            <>
                <p className="mb-2">
                    Any disputes arising from these Terms shall be finally settled through arbitration by a single Arbiter
                    appointed according to the Chartered Institute of Arbitrators rules. The arbitration will be held in Nairobi,
                    conducted in English, and the award will be final and enforceable under the Arbitration Act 1995.
                </p>

                <p className="mt-2 text-sm">
                    USOMI reserves the right to protect intellectual property or confidential information through injunctive or other equitable relief in competent courts.
                </p>
            </>
        ),
    },

    {
        id: "applicable-law",
        title: "15. APPLICABLE LAW AND JURISDICTION",
        content: (
            <>
                <p className="mb-2">
                    These Terms are governed by the laws of Kenya. By proceeding you signify that you have read and agreed to be bound
                    by these Terms and Conditions.
                </p>
            </>
        ),
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 mt-20 md:mt-10">
            {/* Hero */}
            <header className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                    <h1 className="text-yellow-500 text-2xl md:text-4xl font-extrabold mb-3">Terms and Conditions of Use</h1>
                    <p className="text-sm md:text-base text-gray-300 max-w-3xl">
                        Please read these terms and conditions carefully before using the LULU application or the USOMI website.
                        Clicking “I Agree” indicates acceptance of these Terms.
                    </p>
                </div>
            </header>

            {/* Content with sidebar TOC on desktop */}
            <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="md:flex md:gap-10">
                    {/* TOC (desktop) */}
                    <nav className="hidden md:block md:w-80 sticky top-28 self-start">
                        <div className="rounded-md bg-white border border-green-50 p-4 shadow-sm">
                            <h4 className="text-sm font-semibold text-green-800 mb-3">On this page</h4>
                            <ol className="text-sm space-y-2 list-decimal pl-4">
                                {SECTIONS.map((s) => (
                                    <ul key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className="text-gray-700 hover:text-green-800 transition"
                                        >
                                            {s.title}
                                        </a>
                                    </ul>
                                ))}
                            </ol>

                            <div className="mt-4">
                                <button
                                    onClick={() => window.print()}
                                    className="w-50 inline-block px-2 py-2 rounded-full bg-yellow-400 text-green-900 font-semibold"
                                >
                                    Save PDF
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Main terms list */}
                    <article className="flex-1">
                        {SECTIONS.map((s) => (
                            <section id={s.id} key={s.id} className="mb-10">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-2xl font-semibold text-green-800">
                                        {s.title}
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

                        {/*/!* Agreement CTA *!/*/}
                        {/*<div className="mt-8 bg-white p-6 rounded-lg border border-green-50 shadow-sm">*/}
                        {/*    <h3 className="text-lg font-semibold text-green-800 mb-2">Agree & Continue</h3>*/}
                        {/*    <p className="text-sm text-gray-600 mb-4">*/}
                        {/*        By using the Software you confirm that you have read, understood and agreed to these Terms and Conditions.*/}
                        {/*    </p>*/}
                        {/*    <div className="flex gap-3 items-center">*/}
                        {/*        <label className="flex items-center gap-2">*/}
                        {/*            <input type="checkbox" className="w-4 h-4" />*/}
                        {/*            <span className="text-sm text-gray-700">I have read and agree to the Terms & Conditions</span>*/}
                        {/*        </label>*/}

                        {/*        <button*/}
                        {/*            className="ml-auto px-4 py-2 rounded-full bg-green-800 text-white hover:bg-green-900"*/}
                        {/*        >*/}
                        {/*            I Agree*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </article>
                </div>
            </main>

        </div>
    );
}
