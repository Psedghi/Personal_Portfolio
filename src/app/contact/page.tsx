"use client"; // Needed for client-side rendering

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Trigger the animation on mount
  }, []);


  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      <main
        className={`flex-grow flex flex-col items-center justify-center px-4 md:px-12 transition-opacity duration-1000 ${isReady ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
      >
        {/* Title Section */}
        <h1
          className={`text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-10 opacity-0 animate-fadeInUp`}
          style={{ fontFamily: "Helvetica, sans-serif", letterSpacing: "-0.02em" }}
        >
          CONTACT ME
        </h1>
        <hr className="border-t-2 border-[#F0FFCE] w-1/3 mb-12" />

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-6 w-full max-w-4xl">
          <p
            className="text-lg md:text-xl text-center"
            style={{ fontFamily: "DejaVuSans, sans-serif" }}
          >
            Feel free to reach out to me through any of the following platforms:
          </p>

          <div className="flex space-x-8 mt-6">
            {/* Email */}
            <a
              href="mailto:psedghistem2022@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0FFCE] text-4xl hover:text-[#A53F2B] transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/parsa-sedghi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0FFCE] text-4xl hover:text-[#A53F2B] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/psedghi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0FFCE] text-4xl hover:text-[#A53F2B] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/parsa_sedghi_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0FFCE] text-4xl hover:text-[#A53F2B] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#280004] text-center text-sm md:text-base py-4 mt-auto" style={{ fontFamily: "DejaVuSans, sans-serif" }}>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </footer>
    </div>
  );
}
