"use client"; // Mark as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const pathname = usePathname(); // Get the current path
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false); // Controls visibility of scroll-to-top button
    const navbarRef = useRef(null);

    const isActive = (path) => pathname === path;

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close the menu when the pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Track scroll to toggle scroll-to-top button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            // Close the menu if the scroll position exceeds a threshold
            if (window.scrollY > 500) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Close the menu if clicking outside the navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <>
            <header
                ref={navbarRef}
                className="bg-[#280004] sticky top-0 z-50 w-full py-4 px-6 lg:px-12 text-[#F0FFCE] text-xl"
            >
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="hover:text-[#A53F2B] duration-500 relative group cursor-pointer"
                    >
                        <span className="font-bold tracking-widest relative inline-block">
                            PARSA SEDGHI
                        </span>
                    </Link>

                    {/* Hamburger Menu for Small Screens */}
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <div className={`hamburger ${isOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:block space-x-4 text-sm lg:text-base font-normal">
                        <Link
                            href="/"
                            className={`relative group cursor-pointer ${isActive("/") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                                }`}
                        >
                            HOME
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F0FFCE] group-hover:w-full transition-all duration-300 ease-in-out"
                                aria-hidden="true"
                            ></span>
                        </Link>
                        <span>/</span>
                        <Link
                            href="/about"
                            className={`relative group cursor-pointer ${isActive("/about") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                                }`}
                        >
                            ABOUT
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F0FFCE] group-hover:w-full transition-all duration-300 ease-in-out"
                                aria-hidden="true"
                            ></span>
                        </Link>
                        <span>/</span>
                        <Link
                            href="/projects"
                            className={`relative group cursor-pointer ${isActive("/projects") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                                }`}
                        >
                            PROJECTS
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F0FFCE] group-hover:w-full transition-all duration-300 ease-in-out"
                                aria-hidden="true"
                            ></span>
                        </Link>
                        <span>/</span>
                        <Link
                            href="/contact"
                            className={`relative group cursor-pointer ${isActive("/contact") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                                }`}
                        >
                            CONTACT
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F0FFCE] group-hover:w-full transition-all duration-300 ease-in-out"
                                aria-hidden="true"
                            ></span>
                        </Link>
                    </nav>
                </div>

                {/* Dropdown Menu for Small Screens */}
                <div
                    className={`md:hidden fixed top-16 right-0 left-0 bg-[#280004] shadow-lg rounded-md overflow-hidden transform ${isOpen ? "max-h-screen" : "max-h-0"
                        } transition-all duration-500 ease-in-out`}
                >
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3 ${isActive("/") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                            }`}
                    >
                        HOME
                    </Link>
                    <hr className="border-t border-[#F0FFCE]" />
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3 ${isActive("/about") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                            }`}
                    >
                        ABOUT
                    </Link>
                    <hr className="border-t border-[#F0FFCE]" />
                    <Link
                        href="/projects"
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3 ${isActive("/projects") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                            }`}
                    >
                        PROJECTS
                    </Link>
                    <hr className="border-t border-[#F0FFCE]" />
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-3 ${isActive("/contact") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
                            }`}
                    >
                        CONTACT
                    </Link>
                </div>

                <div className="text-center">
                    <hr className="border-t border-[#F0FFCE]" />
                </div>
            </header>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-[#A53F2B] text-[#F0FFCE] p-3 md:p-4 rounded-full shadow-lg z-50 hover:bg-[#F0FFCE] hover:text-[#A53F2B] transition-colors duration-300 flex items-center justify-center group"
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:h-6 md:w-6 transform transition-transform duration-300 group-hover:translate-y-[-2px]"
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
