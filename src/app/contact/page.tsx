"use client"; // Needed for client-side rendering

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Trigger the animation on mount
  }, []);

  // Animation variants for the icons
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      <main
        className={`flex-grow flex flex-col items-center justify-center px-4 md:px-12 transition-opacity duration-1000 ${isReady ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
      >
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-10`}
          style={{ fontFamily: "Helvetica, sans-serif", letterSpacing: "-0.02em" }}
        >
          CONTACT ME
        </motion.h1>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "33.333333%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t-2 border-[#F0FFCE] mb-12"
        />

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-6 w-full max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-center"
            style={{ fontFamily: "DejaVuSans, sans-serif" }}
          >
            Feel free to reach out to me through any of the following platforms!
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-8 mt-6"
          >
            {/* Email */}
            <motion.a
              href="mailto:psedghistem2022@gmail.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-[#F0FFCE] text-4xl md:text-5xl lg:text-7xl hover:text-[#A53F2B] transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/parsa-sedghi"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-[#F0FFCE] text-4xl md:text-5xl lg:text-7xl hover:text-[#A53F2B] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            {/* GitHub */}
            <motion.a
              href="https://github.com/psedghi"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-[#F0FFCE] text-4xl md:text-5xl lg:text-7xl hover:text-[#A53F2B] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#280004] text-center text-sm md:text-base py-4 mt-auto" style={{ fontFamily: "DejaVuSans, sans-serif" }}>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </footer>
    </div>
  );
}
