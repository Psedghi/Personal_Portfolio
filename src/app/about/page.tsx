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

      <main
        className={`flex-grow flex flex-col items-center justify-center px-4 md:px-12 transition-opacity duration-1000 ${isReady ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
      >
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

        <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl">
          {/* Left Content: About Me */}
          <div className="relative w-full md:w-5/6 group">
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
                My name is Parsa Sedghi, and I am a junior at the <a
                  href="https://www.umd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#A53F2B", textDecoration: "underline" }}>University of Maryland</a> pursuing a dual degree in <i>Computer Science</i> and <i>Operations
                    Management/Business Analytics</i> as well as a minor in <i>Cybersecurity</i>. I am
                also in the <a
                  href="https://www.rhsmith.umd.edu/quest"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#A53F2B", textDecoration: "underline" }}>QUEST Honors Program</a>, where I have the unique opportunity to
                work on real-world, multidisciplinary projects each semester. The program
                emphasizes experiential learning, teamwork, and creating innovative
                solutions to complex challenges.
                <br />
                <br />
                With a unique combination of creativity, logic, and technical expertise, I
                thrive on working with wonderful people to tackle challenging projects and
                build intuitive products. Whether it's through coding, designing, or analyzing data,
                I am driven by a passion for continuous learning and growth, striving every day to make a meaningful
                impact at the intersection of technology and business.
                <br />
                <br />
                <b>My Interests: </b> Cybersecurity | Machine Learning | FinTech | Cloud Computing
                <br />
                <br />
                <b>Get in touch: </b>
                <a
                  href="mailto:psedghistem2022@gmail.com"
                  style={{ color: "#A53F2B", textDecoration: "underline" }}
                >
                  Email Me
                </a>
                {" | "}
                <a
                  href="https://linkedin.com/in/parsa-sedghi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#A53F2B", textDecoration: "underline" }}
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>


        <div className="spacer"></div>
        <div className="spacer"></div>

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 center-text"
          style={{ fontFamily: "Helvetica, sans-serif", color: "#F0FFCE" }}
        >
          Professional Highlights
        </h2>
        <hr className="border-t-2 border-[#F0FFCE] w-1/3 md:w-1/5 lg:w-1/6 mb-12" />


        {/* Timeline Section */}
        <div className="relative max-w-6xl mx-auto mt-4">

          {/* Timeline Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#A53F2B]"
            style={{ left: "3.8rem" }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-20">


            {/* UMD */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://it.umd.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/umd.webp"
                  alt="UMD"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">Enterprise Software Engineering Intern</h3>
                <p className="text-sm">UMD | College Park, MD | Summer 2022 - Present</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Developed secure applications and contributed to the scalability of
                  enterprise-level systems for the university.
                </p>
              </div>
            </div>

            {/* BlackRock */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://www.blackrock.com/us/individual"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/blackrock.jpg"
                  alt="BlackRock"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                <p className="text-sm">BlackRock | Wilmington, DE | Summer 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Worked on operational and financial engineering technologies to improve
                  internal systems and streamline workflow processes.
                </p>
              </div>
            </div>

            {/* Wodify */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://www.rhsmith.umd.edu/quest"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/quest.png"
                  alt="Wodify/QUEST Honors"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">Data Science Intern</h3>
                <p className="text-sm">QUEST Honors/Wodify | Remote | Spring 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Analyzed customer behavior data and implemented predictive models to
                  enhance user engagement and retention.
                </p>
              </div>
            </div>

            {/* Jane Street */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://www.janestreet.com/join-jane-street/programs-and-events/in-focus/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/janeStreet.jpeg"
                  alt="Jane Street Logo"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">IN FOCUS Software Engineering Extern</h3>
                <p className="text-sm">Jane Street | New York, NY | Winter 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  I gained proficiency in functional programming with OCaml, developed a Python-based stock trading bot, and applied quantitative analysis and probability theories in simulated trading exercises to deepen my understanding of market dynamics and trading strategies.                </p>
              </div>
            </div>

            {/* Consortium Networks */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://consortium.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/consortium.jpg"
                  alt="Consortium Networks"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">Cyber Analyst Intern</h3>
                <p className="text-sm">Consortium Networks | Remote | Summer 2023</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Conducted product and penetration testing, developed incident response plans, and implemented advanced security measures to enhance the network security posture of Fortune 500 clients and other organizations.
                </p>
              </div>
            </div>

            {/* Best Buy */}
            <div className="relative flex items-start">
              {/* Dot on the Line */}
              <a
                href="https://jobs.bestbuy.com/bby?id=item_detail&content=about_us"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-6 top-0 w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10"
                style={{ transform: "translateY(-50%)" }}
              >
                <img
                  src="/Best Buy.jpg"
                  alt="Best Buy"
                  className="logo w-16 h-16 rounded-full object-cover"
                />
              </a>
              {/* Content */}
              <div className="ml-28">
                <h3 className="text-xl font-bold">Sales Associate</h3>
                <p className="text-sm">Best Buy | Annapolis, MD | Fall 2021 - Winter 2023</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Provided personalized technology solutions, delivered exceptional customer service, and exceeded sales goals by effectively communicating product benefits and tailoring recommendations to customer needs.                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer"></div>
        <div className="spacer"></div>

        {/* Boxes Section */}
        <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl">
          {/* Right Content: Skills */}
          <div className="relative w-full md:w-5/6 group">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            ></div>
            <div className="bg-[#EDE1D5] p-6 rounded-lg shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
              >
                [Changing This Section to Something Else]
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
