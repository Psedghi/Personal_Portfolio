"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import profilePicture from "public/profile-picture.jpg";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for the three main words
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  // Animation variants for the profile image and box
  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Box outline animation variants
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      x: -12,
      y: -12,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Bar animation variants
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: "66.666667%",
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 pt-[4rem]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Profile Picture and Orange Outline */}
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={profileVariants}
            className="relative mb-8 md:mb-0 md:mr-12 group"
          >
            <motion.div
              variants={boxVariants}
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-md"
            />
            <div className="relative">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                className="rounded-md w-48 md:w-64 lg:w-72 h-auto"
                width={288}
                height={288}
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <h1
              className="font-bold leading-tight tracking-widest text-4xl md:text-6xl lg:text-[100px]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={0}
                variants={textVariants}
                className="block cursor-pointer"
              >
                BUILDING
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={1}
                variants={textVariants}
                className="block ml-2 md:ml-6 lg:ml-8 cursor-pointer"
              >
                SOFTWARE
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={2}
                variants={textVariants}
                className="block ml-4 md:ml-12 lg:ml-16 cursor-pointer"
              >
                INNOVATIONS
              </motion.span>
            </h1>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={barVariants}
            className="text-center mb-6 mx-auto"
          >
            <hr className="border-t-2 border-[#F0FFCE]" />
          </motion.div>
          <Link href="/about">
            <motion.button
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-[#F0FFCE] rounded-md text-[#F0FFCE] text-base md:text-lg lg:text-[40px] cursor-pointer relative overflow-hidden group"
              style={{ fontFamily: "DejaVuSans, sans-serif" }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#A53F2B] to-[#F0FFCE] z-0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <span className="relative z-10 group-hover:text-[#280004] transition-colors duration-500">
                LEARN ABOUT ME
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="flex-grow"></div>
      </main>

      <footer className="bg-[#280004] text-center text-sm md:text-base py-4" style={{ fontFamily: "DejaVuSans, sans-serif" }}>
        <div className="mb-2">
          <a href="mailto:psedghistem2022@gmail.com" className="hover:text-[#A53F2B] transition-colors duration-300">
            Email Me
          </a>
          {" | "}
          <a href="https://linkedin.com/in/parsa-sedghi" target="_blank" className="hover:text-[#A53F2B] transition-colors duration-300">
            LinkedIn
          </a>
          {" | "}
          <a href="https://github.com/psedghi" target="_blank" className="hover:text-[#A53F2B] transition-colors duration-300">
            GitHub
          </a>
        </div>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </footer>
    </div>
  );
}
