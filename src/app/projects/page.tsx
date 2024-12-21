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
                  src="/RedBean.png"
                  alt="Red Bean Cafe"
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
                The Red Bean Website
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                This is a website that I created for my family store, The Red Bean. Mainly just used React, HTML, CSS, and JavaScript.
              </p>
              <a
                href="https://theredbeancafe.com/"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-2/3 md:w-2/5"> {/* Adjusted width to 2/5 */}
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/Hylight.png"
                  alt="HyLight"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Project Description */}
            <div className="w-full md:w-4/5 text-left"> {/* Adjusted width to 3/5 */}
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                HyLight
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                This project marked a significant milestone in my journey with the QUEST Honors Program at UMD, where I had the privilege to present a project very close to our hearts. We developed HyLight, a solar-powered lighting solution for fire hydrants that aims to revolutionize the way firefighters respond to emergencies. In extreme conditions like heavy snow or smog, firefighters often struggle to locate hydrants, a problem HyLight addresses sustainably and efficiently.
              </p>
              <a
                href="https://www.linkedin.com/in/parsa-sedghi/details/projects/1210074597/multiple-media-viewer/?profileId=ACoAAC46NtQBI6rin7H3_lSWzJAocR95UapOyXY&treasuryMediaId=1704164607696"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>


          {/*Project 3 */}
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
                technologies used, and any interesting challenges or solutions. [A placehold for now]
              </p>
              <a
                href="/projects/project3"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#280004] text-center text-sm md:text-base py-4 mt-auto" style={{ fontFamily: "DejaVuSans, sans-serif" }}>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </footer>
    </div >
  );
}
