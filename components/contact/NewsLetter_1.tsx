"use client";

import React, { useState } from "react";
import {validate} from "email-validator";

type Props = {
    /**
     * Optional handler: receives the email string when user subscribes.
     * Return a Promise if you want to do async work (API / Supabase).
     */
    onSubscribeAction?: (email: string) => void | Promise<void>;
    /**
     * Initial theme: "green" | "yellow" | "white"
     */
    initialTheme?: "green" | "yellow" | "white";
};

export default function Subscribe({ onSubscribeAction, initialTheme = "green" }: Props) {
    const [email, setEmail] = useState("");
    const [theme, setTheme] = useState<"green" | "yellow" | "white">(initialTheme);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const validateEmail = (e: string) => {
        return validate(e);
    };

    const handleSubmit = async (ev?: React.FormEvent) => {
        ev?.preventDefault();
        setStatus(null);
        setErrorMsg(null);

        if (!validateEmail(email)) {
            setStatus("error");
            setErrorMsg("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            // If the parent passed a handler, call it (allow async)
            if (onSubscribeAction) await onSubscribeAction(email);
            // Fallback: store in localStorage (non-sensitive demo)
            else localStorage.setItem("usomi_subscriber:" + email, Date.now().toString());

            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error(err);
            setStatus("error");
            setErrorMsg("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // theme -> class helpers
    const themeClasses = {
        green: {
            wrapper: "bg-green-50",
            inputBg: "bg-white",
            button: "bg-green-800 text-white hover:bg-green-900",
            accent: "text-green-900",
        },
        yellow: {
            wrapper: "bg-yellow-50",
            inputBg: "bg-white",
            button: "bg-yellow-400 text-green-900 hover:bg-yellow-500",
            accent: "text-yellow-600",
        },
        white: {
            wrapper: "bg-white",
            inputBg: "bg-gray-50",
            button: "bg-green-800 text-white hover:bg-green-900",
            accent: "text-green-900",
        },
    } as const;

    const cls = themeClasses[theme];

    return (
        <section className={`${cls.wrapper} py-10 px-6`}>
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${cls.accent}`}>Subscribe to our newsletter</h3>
                        <p className="mt-2 text-gray-600">
                            Get monthly insights, tips, and updates from Usomi — data-driven agriculture for smallholders.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-4 flex gap-3 items-start">
                            <label htmlFor="subscribe-email" className="sr-only">Email</label>
                            <input
                                id="subscribe-email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@farmmail.com"
                                className={`flex-1 ${cls.inputBg} border border-green-100 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                                aria-invalid={status === "error"}
                                aria-describedby={status === "error" ? "subscribe-error" : undefined}
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-5 py-3 rounded-full font-semibold shadow-sm ${cls.button} transition`}
                            >
                                {loading ? "Subscribing…" : "Subscribe"}
                            </button>
                        </form>

                        {/* status */}
                        <div className="mt-3 min-h-[1.25rem]">
                            {status === "success" && (
                                <div className="text-sm text-green-800">Thanks — you&quot;re subscribed!</div>
                            )}
                            {status === "error" && (
                                <div id="subscribe-error" className="text-sm text-red-600">
                                    {errorMsg}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Theme playground */}
                    <div className="shrink-0">
                        <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                            <div className="font-semibold mb-2">Theme</div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setTheme("green")}
                                    className={`px-3 py-1 rounded-full ${theme === "green" ? "ring-2 ring-green-300" : "bg-white/60"}`}
                                    aria-pressed={theme === "green"}
                                >
                                    Green
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTheme("yellow")}
                                    className={`px-3 py-1 rounded-full ${theme === "yellow" ? "ring-2 ring-yellow-300" : "bg-white/60"}`}
                                    aria-pressed={theme === "yellow"}
                                >
                                    Yellow
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTheme("white")}
                                    className={`px-3 py-1 rounded-full ${theme === "white" ? "ring-2 ring-green-300" : "bg-white/60"}`}
                                    aria-pressed={theme === "white"}
                                >
                                    White
                                </button>
                            </div>

                            <div className="mt-3 text-xs text-gray-500">
                                Demo only — swap to connect to your API.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
