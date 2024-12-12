"use client"; // Mark as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className="bg-[#280004] sticky top-0 z-50 w-full py-4 px-6 lg:px-12 text-[#F0FFCE] text-xl">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="hover:text-[#A53F2B] duration-500 relative group cursor-pointer">
                    <span className="font-bold tracking-widest relative inline-block">
                        PARSA SEDGHI
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="space-x-4 text-sm lg:text-base font-normal">
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
            <div className="text-center">
                <hr className="border-t border-[#F0FFCE]" />
            </div>
        </header>
    );
};

export default Navbar;
 