"use client";
import React from 'react';

import Link from "next/link";
type Props = {
    children: React.ReactNode;
    href?: string;
    onClickAction?: () => void;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
};

export function Button_1({ children, href = "#", onClickAction, variant = "primary", className = "" }: Props) {
    const base = "px-6 py-3 rounded-full font-semibold shadow-sm transition transform hover:scale-105";
    if (variant === "primary") {
        return (
            <Link href={href} onClick={onClickAction} className={`${base} bg-yellow-400 text-green-900 ${className}`}>
                {children}
            </Link>
        );
    }
    if (variant === "secondary") {
        return (
            <Link href={href} onClick={onClickAction} className={`${base} bg-white/20 text-white border border-white/30 backdrop-blur-sm ${className}`}>
                {children}
            </Link>
        );
    }
    return (
        <button onClick={onClickAction} className={`${base} bg-white text-green-900 ${className}`}>
            {children}
        </button>
    );
}