"use client"; // Mark as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#280004] sticky top-0 z-50 w-full py-4 px-6 lg:px-12 text-[#F0FFCE] text-xl">
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
          className={`md:hidden cursor-pointer ${
            isOpen ? "text-[#A53F2B]" : "text-[#F0FFCE]"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span
            className="block w-6 h-[2px] mb-1 transition-all bg-current hover:bg-[#A53F2B]"
          ></span>
          <span
            className="block w-6 h-[2px] mb-1 transition-all bg-current hover:bg-[#A53F2B]"
          ></span>
          <span
            className="block w-6 h-[2px] transition-all bg-current hover:bg-[#A53F2B]"
          ></span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block space-x-4 text-sm lg:text-base font-normal">
          <Link
            href="/"
            className={`relative group cursor-pointer ${
              isActive("/") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
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
            className={`relative group cursor-pointer ${
              isActive("/about") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
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
            className={`relative group cursor-pointer ${
              isActive("/projects") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
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
            className={`relative group cursor-pointer ${
              isActive("/contact") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
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
        className={`md:hidden fixed top-16 right-0 left-0 bg-[#280004] shadow-lg rounded-md overflow-hidden transform ${
          isOpen ? "max-h-screen" : "max-h-0"
        } transition-all duration-500 ease-in-out`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`block px-6 py-3 ${
            isActive("/") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
          }`}
        >
          HOME
        </Link>
        <hr className="border-t border-[#F0FFCE]" />
        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className={`block px-6 py-3 ${
            isActive("/about") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
          }`}
        >
          ABOUT
        </Link>
        <hr className="border-t border-[#F0FFCE]" />
        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className={`block px-6 py-3 ${
            isActive("/projects") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
          }`}
        >
          PROJECTS
        </Link>
        <hr className="border-t border-[#F0FFCE]" />
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className={`block px-6 py-3 ${
            isActive("/contact") ? "text-[#A53F2B]" : "hover:text-[#A53F2B] duration-300"
          }`}
        >
          CONTACT
        </Link>
      </div>

      <div className="text-center">
        <hr className="border-t border-[#F0FFCE]" />
      </div>
    </header>
  );
};

export default Navbar;
