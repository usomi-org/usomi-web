"use client";

import React, {useCallback, useEffect, useRef, useState} from "react";

type Props = {
    open?: boolean; // controlled open
    message?: string;
    severity?: "success" | "error";
    /**
     * Optional callback invoked when popup closes.
     */
    onClose?: () => void;
    /**
     * If provided, auto-close after this many ms once opened.
     */
    autoCloseMs?: number | null;
    /**
     * If true, render a small toast (bottom-right); otherwise centered modal.
     */
    variant?: "modal" | "toast";
};

export default function MessagePopup({
                                         open = false,
                                         message = "Done!",
                                         severity = "success",
                                         onClose,
                                         autoCloseMs = 4000,
                                         variant = "modal",
                                     }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(open);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const autoCloseTimer = useRef<number | null>(null);

    // sync controlled prop -> local state
    useEffect(() => setIsOpen(open), [open]);

    // auto-close behavior
    useEffect(() => {
        if (!isOpen) return;
        if (autoCloseMs && autoCloseMs > 0) {
            autoCloseTimer.current = window.setTimeout(() => {
                handleClose();
            }, autoCloseMs);
        }
        return () => {
            if (autoCloseTimer.current) {
                clearTimeout(autoCloseTimer.current);
                autoCloseTimer.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, autoCloseMs]);

    // close handler
    const handleClose = useCallback(() => {
        setIsOpen(false);
        if (onClose) onClose();
    },[]);

    // close on outside click and Esc
    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!isOpen) return;
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                handleClose();
            }
        }
        function onKey(e: KeyboardEvent) {
            if (!isOpen) return;
            if (e.key === "Escape") handleClose();
        }
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [isOpen,handleClose]);

    // focus close button when opened for accessibility
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                closeBtnRef.current?.focus();
            }, 10);
        }
    }, [isOpen]);

    // color mapping
    const color = severity === "error"
        ? { bg: "bg-red-50", text: "text-red-700", ring: "ring-red-200" }
        : { bg: "bg-green-50", text: "text-green-700", ring: "ring-green-200" };

    // small toast variant
    if (variant === "toast") {
        return (
            <div aria-live="polite" className="fixed bottom-6 right-6 z-50">
                <div
                    ref={containerRef}
                    role="status"
                    className={`max-w-xs ${color.bg} ${color.text} shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 ring-1 ${color.ring} transform transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
                >
                    <div className="flex-shrink-0">
                        {severity === "error" ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-95">
                                <path d="M12 9v4" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M12 17h.01" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-95">
                                <path d="M20 6L9 17l-5-5" stroke="#065F46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>

                    <div className="text-sm leading-snug">{message}</div>

                    <button
                        ref={closeBtnRef}
                        onClick={handleClose}
                        aria-label="Dismiss"
                        className="ml-2 text-sm text-gray-700 hover:underline"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    // modal variant (centered)
    return (
        <div
            aria-hidden={!isOpen}
            className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
            {/* backdrop */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`} />

            <div
                ref={containerRef}
                role="dialog"
                aria-modal="true"
                aria-label={severity === "error" ? "Error message" : "Success message"}
                className={`relative max-w-lg w-[90%] md:w-2/3 mx-auto transform transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}
            >
                <div className={`rounded-xl p-5 md:p-6 shadow-xl ring-1 ${color.ring} ${color.bg}`}>
                    <div className="flex items-start gap-4">
                        <div className="pt-1">
                            {severity === "error" ? (
                                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 9v4" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M12 17h.01" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17l-5-5" stroke="#065F46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <p className={`font-semibold ${color.text}`}>{severity === "error" ? "Error" : "Success"}</p>
                            <p className="mt-1 text-sm text-gray-700">{message}</p>
                        </div>

                        <div className="ml-3 flex items-start">
                            <button
                                ref={closeBtnRef}
                                onClick={handleClose}
                                aria-label="Close message"
                                className="text-gray-600 hover:text-gray-800 rounded-md p-2"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* optional action row */}
                    <div className="mt-4 flex justify-end gap-3">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 rounded-full bg-white border border-green-100 text-green-800 hover:bg-green-50 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
