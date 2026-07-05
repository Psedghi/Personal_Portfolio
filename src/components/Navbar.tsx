"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/merge";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    // Close the menu when the pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            setShowScrollTop(window.scrollY > 300);
            if (window.scrollY > 500) setIsOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close the menu if clicking outside the navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header
                ref={navbarRef}
                className={cn(
                    "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
                    scrolled || isOpen
                        ? "border-cream/10 bg-night/80 backdrop-blur-md"
                        : "border-transparent bg-transparent"
                )}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    {/* Wordmark */}
                    <Link
                        href="/"
                        className="group font-display text-sm font-bold tracking-[0.25em] text-cream transition-colors duration-300 hover:text-rust-bright"
                    >
                        PARSA SEDGHI
                        <span className="text-rust-bright transition-colors duration-300 group-hover:text-cream">
                            .
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map(({ href, label }) => {
                            const active = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        "relative py-1 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                                        active ? "text-cream" : "text-cream/50 hover:text-cream"
                                    )}
                                >
                                    {label}
                                    {active && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute inset-x-0 -bottom-0.5 h-px bg-rust-bright"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Hamburger */}
                    <button
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={cn(
                                "h-0.5 w-6 bg-cream transition-all duration-300",
                                isOpen && "translate-y-2 rotate-45"
                            )}
                        />
                        <span
                            className={cn(
                                "h-0.5 w-6 bg-cream transition-all duration-300",
                                isOpen && "opacity-0"
                            )}
                        />
                        <span
                            className={cn(
                                "h-0.5 w-6 bg-cream transition-all duration-300",
                                isOpen && "-translate-y-2 -rotate-45"
                            )}
                        />
                    </button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-cream/10 md:hidden"
                        >
                            <div className="flex flex-col px-6 py-4">
                                {NAV_LINKS.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "border-b border-cream/5 py-3 font-mono text-sm uppercase tracking-[0.2em] transition-colors duration-300 last:border-b-0",
                                            pathname === href
                                                ? "text-rust-bright"
                                                : "text-cream/60 hover:text-cream"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            {/* Scroll to top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-cream transition-colors duration-300 hover:border-rust hover:text-rust-bright md:bottom-8 md:right-8"
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
