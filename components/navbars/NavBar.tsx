"use client";
import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";

export default function NavBar_1() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect which section is in view
            const sections = ['about', 'our-work', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            setActiveSection(currentSection || '');
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (section: string) => activeSection === section;

    // const menuItems = [
    //     { name: "About", href: "#about" },
    //     { name: "Our Work", href: "#our-work", dropdown: [
    //             { name: "Data Collection and Analytics", href: "/rubi" },
    //             { name: "UsomiLulu", href: "/lulu" },
    //             { name: "Genetic Testing", href: "/genomics" },
    //             { name: "Kuku Nyumbani initiative", href: "/kuku-nyumbani-initiatives" }
    //         ]},
    //     { name: "Contact Us", href: "#contact" }
    // ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className={`transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-md bg-white/80 shadow-lg"
                    : "bg-transparent"
            }`}
            classNames={{
                base: "fixed z-50",
                wrapper: "px-4 sm:px-6",
            }}
        >
            {/* Mobile menu toggle */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-yellow-500"
                />
                <NavbarBrand>
                    <h2 className="text-yellow-500 font-bold text-xl md:text-2xl">Usomi</h2>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop navigation */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={isActive('about')}>
                    <Link
                        href="#about"
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                            isActive('about')
                                ? "text-yellow-500 bg-green-50 shadow-inner border border-green-200"
                                : "text-yellow-500 hover:text-green-700 hover:bg-green-50/50"
                        }`}
                    >
                        About
                    </Link>
                    {isActive('about') && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                </NavbarItem>

                <NavbarItem isActive={isActive('our-work')}>
                    <div className="relative group">
                        <Button
                            as="div"
                            className={`px-4 py-2 rounded-full transition-all duration-300 bg-transparent ${
                                isActive('our-work')
                                    ? "text-yellow-500 bg-green-50 shadow-inner border border-green-200"
                                    : "text-yellow-500 hover:text-green-700 hover:bg-green-50/50"
                            }`}
                        >
                            Our Work
                        </Button>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm border border-green-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <Link
                                href="/rubi"
                                className="block rounded-xl px-4 py-3 hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                            >
                                Data Collection and Analytics
                            </Link>
                            <Link
                                href="/lulu"
                                className="block px-4 py-3 rounded-xl hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                            >
                                UsomiLulu
                            </Link>
                            <Link
                                href="/genomics"
                                className="block px-4 py-3 rounded-xl hover:bg-yellow-100 text-green-700 transition-colors border-b border-green-50"
                            >
                                Genetic Testing
                            </Link>
                            <Link
                                href="/kuku-nyumbani-initiatives"
                                className="block px-4 py-3 rounded-xl hover:bg-yellow-100 text-green-700 transition-colors"
                            >
                                Kuku Nyumbani initiative
                            </Link>
                        </div>
                    </div>
                    {isActive('our-work') && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                </NavbarItem>

                <NavbarItem isActive={isActive('contact')}>
                    <Link
                        href="#contact"
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                            isActive('contact')
                                ? "text-yellow-500 bg-green-50 shadow-inner border border-green-200"
                                : "text-yellow-500 hover:text-green-700 hover:bg-green-50/50"
                        }`}
                    >
                        Contact Us
                    </Link>
                    {isActive('contact') && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                </NavbarItem>
            </NavbarContent>

            {/* Mobile menu */}
            <NavbarMenu className="bg-white/95 backdrop-blur-sm mt-4">
                <NavbarMenuItem>
                    <Link
                        href="#about"
                        className="w-full text-green-700 hover:bg-green-50 py-3 px-4 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                </NavbarMenuItem>

                <NavbarMenuItem>
                    <div className="py-3 px-4 text-green-700 font-semibold">Our Work</div>
                    <div className="pl-6 space-y-2">
                        <Link
                            href="/rubi"
                            className="block w-full text-green-600 hover:bg-yellow-50 py-2 px-4 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Data Collection and Analytics
                        </Link>
                        <Link
                            href="/lulu"
                            className="block w-full text-green-600 hover:bg-yellow-50 py-2 px-4 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            UsomiLulu
                        </Link>
                        <Link
                            href="/genomics"
                            className="block w-full text-green-600 hover:bg-yellow-50 py-2 px-4 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Genetic Testing
                        </Link>
                        <Link
                            href="/kuku-nyumbani-initiatives"
                            className="block w-full text-green-600 hover:bg-yellow-50 py-2 px-4 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Kuku Nyumbani initiative
                        </Link>
                    </div>
                </NavbarMenuItem>

                <NavbarMenuItem>
                    <Link
                        href="#contact"
                        className="w-full text-green-700 hover:bg-green-50 py-3 px-4 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}