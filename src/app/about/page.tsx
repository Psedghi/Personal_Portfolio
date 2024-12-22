"use client"; // Needed for client-side animations

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function About() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Trigger the animation on mount
  }, []);

  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow px-4 md:px-12">
        {/* Title Section */}
        <h1
          className={`text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-10 ${isReady ? "opacity-100 animate-fadeInUp" : "opacity-0"
            }`}
          style={{
            fontFamily: "Helvetica, sans-serif",
            letterSpacing: "-0.02em",
            marginTop: "3rem", // Ensures uniform spacing from the top
          }}
        >
          ABOUT PARSA
        </h1>
        <hr className="border-t-2 border-[#F0FFCE] w-1/3 mb-12" />

        {/* Boxes Section */}
        <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl">
          {/* Left Content: About Me */}
          <div className="relative w-full md:w-1/2 group">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            ></div>
            <div className="bg-[#EDE1D5] p-6 rounded-lg shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
              >
                About Me
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "DejaVuSans, sans-serif", color: "#4C230A" }}
              >
                My name is Parsa Sedghi, and I am a full-stack developer passionate
                about creating innovative solutions using JavaScript, React, and
                modern web technologies. With a unique combination of creativity,
                logic, and technical expertise, I thrive on tackling challenging
                projects and building intuitive user experiences.
                <br />
                <br />
                When I’m not coding, I enjoy reading, staying active, and playing
                soccer. Feel free to reach out if you’re interested in collaborating
                on projects, sharing ideas, or just having a chat!
              </p>
              <button
                className="mt-6 px-6 py-3 border-2 border-[#4C230A] text-[#4C230A] rounded-md hover:bg-[#A53F2B] hover:text-[#F0FFCE] transition cursor-pointer"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                Email Me!
              </button>
            </div>
          </div>

          {/* Right Content: Skills */}
          <div className="relative w-full md:w-1/2 group">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            ></div>
            <div className="bg-[#EDE1D5] p-6 rounded-lg shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
              >
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "#4C230A" }}>
                    Programming Languages
                  </h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/icons/js-logo.png"
                      alt="JavaScript"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/html.png"
                      alt="HTML5"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>HTML5</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/css-logo.png"
                      alt="CSS3"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>CSS3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "#4C230A" }}>
                    Libraries & Frameworks
                  </h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/icons/react.png"
                      alt="React"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>React</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/vue-js.png"
                      alt="Vue.js"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>Vue.js</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/jsiconGreen.svg"
                      alt="Node.js"
                      className="w-14 h-14 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
