"use client"; // Needed for client-side animations

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Projects() {
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
            marginTop: "3.25rem", // Matches the margin on About page
          }}
        >
          MY WORK
        </h1>
        <hr className="border-t-2 border-[#F0FFCE] w-1/3 mb-12" />


        {/* Projects Section */}
        <div className="flex flex-col space-y-12 w-full max-w-6xl">
          {/*Project 1 */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/test.png"
                  alt="Project 1"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Project Description */}
            <div className="w-full md:w-1/2 text-left">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Project Title 1
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                A brief description of the project, including its purpose,
                technologies used, and any interesting challenges or solutions.
              </p>
              <a
                href="/projects/project1"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/*Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                {/*Rember that all photos are in the PUBLIC folder */}
                <img
                  src="/test.png"
                  alt="Project 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Project Description */}
            <div className="w-full md:w-1/2 text-left">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Project Title 2
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                A brief description of this project, including its highlights,
                features, and impact.
              </p>
              <a
                href="/projects/project2"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/*Project 1 */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/test.png"
                  alt="Project 1"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Project Description */}
            <div className="w-full md:w-1/2 text-left">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Project Title 3
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                A brief description of the project, including its purpose,
                technologies used, and any interesting challenges or solutions.
              </p>
              <a
                href="/projects/project1"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
