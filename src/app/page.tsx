import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import profilePicture from "public/profile-picture.jpg";

export default function Home() {
  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 pt-[4rem]"> {/* Adjusted padding */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Profile Picture and Orange Outline */}
          <div
            className="relative mb-8 md:mb-0 md:mr-12 group opacity-0 animate-fadeIn"
            style={{ animationDelay: "100ms" }} // Adds delay for staggered animation
          >
            {/* Orange box outline */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-md group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-500 ease-in-out"
              aria-hidden="true"
            ></div>
            {/* Profile picture */}
            <div className="relative">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                className="rounded-md w-48 md:w-64 lg:w-72 h-auto group-hover:scale-105 transition-transform duration-500 ease-in-out"
                width={288} // Explicit size
                height={288} // Explicit size
                layout="intrinsic" // Maintain aspect ratio
                placeholder="blur"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1
              className="font-bold leading-tight tracking-widest text-4xl md:text-6xl lg:text-[100px]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              {/* Staggered text with load animation and hover bounce */}
              <span
                className="block opacity-0 animate-fadeInUp"
                style={{ animationDelay: "0ms" }}
              >
                <span
                  className="inline-block hover:animate-bounceHover transition-transform"
                >
                  BUILDING
                </span>
              </span>
              <span
                className="block ml-2 md:ml-6 lg:ml-8 opacity-0 animate-fadeInUp"
                style={{ animationDelay: "200ms" }}
              >
                <span
                  className="inline-block hover:animate-bounceHover transition-transform"
                >
                  SOFTWARE
                </span>
              </span>
              <span
                className="block ml-4 md:ml-12 lg:ml-16 opacity-0 animate-fadeInUp"
                style={{ animationDelay: "400ms" }}
              >
                <span
                  className="inline-block hover:animate-bounceHover transition-transform"
                >
                  INNOVATIONS
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-8 opacity-0 animate-fadeIn" style={{ animationDelay: "500ms" }}>
          <div className="text-center mb-4">
            <hr className="border-t border-[#F0FFCE] w-1/2 md:w-2/3 mx-auto" />
          </div>
          <Link href="/about">
            <button
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-[#F0FFCE] rounded-md text-[#F0FFCE] text-base md:text-lg lg:text-[40px] cursor-pointer relative overflow-hidden group"
              style={{ fontFamily: "DejaVuSans, sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#A53F2B] to-[#F0FFCE] transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
              <span className="relative z-10 group-hover:text-[#280004] transition-colors duration-500">
                LEARN ABOUT ME
              </span>
            </button>
          </Link>
        </div>

        {/* Spacer for scrolling */}
        <div className="flex-grow"></div>
      </main>

      <footer className="bg-[#280004] text-center text-sm md:text-base py-4" style={{ fontFamily: "DejaVuSans, sans-serif" }}>
        <div className="mb-2">
          <a href="mailto:psedghistem2022@gmail.com" className="hover:text-[#A53F2B] transition">
            Email Me
          </a>
          {" | "}
          <a href="https://linkedin.com/in/parsa-sedghi" target="_blank" className="hover:text-[#A53F2B] transition">
            LinkedIn
          </a>
          {" | "}
          <a href="https://github.com/psedghi" target="_blank" className="hover:text-[#A53F2B] transition">
            GitHub
          </a>
        </div>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </footer>
    </div>
  );
}
