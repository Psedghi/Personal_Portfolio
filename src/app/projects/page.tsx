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
                I designed and developed a website for my family’s store, The Red Bean, located in the heart of downtown Annapolis, Maryland. Built using React, HTML, CSS, and JavaScript, the site has attracted over <b><u>40,000</u></b> visitors, showcasing our unique offerings and engaging with our community. If you’re in the area, we’d love for you to stop by and experience it in person!              </p>
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

          {/* Decorative Icon */}
          <div className="flex justify-center items-center my-8 space-x-2">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
          </div>

          {/* Project UMD TRS */}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4">
            {/* Project Image */}
            <div className="relative w-full md:w-3/5"> {/* Adjusted width to 2/5 */}
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/TRS Homepage.png"
                  alt="TRS Homepage"
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
                UMD Tuition Remission Services
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                As an Enterprise Software Engineer Intern at the University of Maryland, I contributed to the development of the Tuition Remission System (TRS) application, which processes tuition for thousands of students and faculty annually. From brainstorming and design to deployment, I was actively involved in creating a robust web-based solution. Utilizing a tech stack that included Java Servlets, JavaScript, Vue.js, CSS, HTML, Apache Maven, and SQL, I developed and deployed the system in a Java web application environment with Spring Boot frameworks. Additionally, I assisted with the team’s web application and back-end testing efforts to ensure the system’s reliability and performance for university clients.
              </p>
              <a
                href="https://uhr.umd.edu/benefits-and-wellness/tuition-remission"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="flex justify-center items-center my-8 space-x-2">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
          </div>

          {/*Project CMSC320 SPY */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/SPY.avif"
                  alt="SPY"
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
                Predicting SPY ETF Price Dynamics Using Machine Learning
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                In this project I analyzed the SPY ETF as a representation of the S&P 500, with the goal of predicting stock price changes using machine learning. I worked on exploring historical stock data from Yahoo Finance, conducting statistical analyses, visualizations, and building a decision tree regression model to uncover meaningful patterns and forecast future price changes.               </p>
              <a
                href="https://psedghi.github.io/CMSC320_Project/index.html"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="flex justify-center items-center my-8 space-x-2">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4">
            {/* Project Image */}
            <div className="relative w-full md:w-3/5"> {/* Adjusted width to 2/5 */}
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="./wodify.png"
                  alt="Wodify"
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
                Wodify Machine Learning Project
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                In this project, I used Pandas to analyzed the impact of free trials and discounts on customer retention and lifetime value for Wodify, a fitness CRM software company. I took the lead in cleaning and organizing <b><u>six</u></b> complex datasets with over <b><u>2.5 million</u></b> records. I developed retention rate metrics, and performed regression analyses to identify trends and provide actionable insights. This work allowed me to implement a machine learning algorithm to provide data-driven recommendations for optimizing gym memberships and pricing strategies, showcasing my ability to translate raw data into meaningful business solutions.</p>
              <a
                href="https://docs.google.com/document/d/1CtTKe4PcdZlgl66tx8UsjA8lxmwxDCnQWv2zSiTeVXo/edit?usp=sharing"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="flex justify-center items-center my-8 space-x-2">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
          </div>

          {/*Project 3 */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/ADR.png"
                  alt="ADR Home Page Image"
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
                All District Reads Website
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                I contributed to the All District Reads project in Spring 2024 for Hack4Impact. Our goal was to increase literacy in K-5 students by developing tools to support parental involvement and track program impact. I played a key role in constructing the frontend of the Library system, which included creating multiple views and interactive forms, developing the Welcome page with user authentication, and syncing data between Firestore and the frontend. I overcame challenges such as connecting Firestore to the frontend and converting UI designs into functional CSS, showcasing his problem-solving and technical skills in React and Firebase.</p>
              <a
                href="https://docs.google.com/presentation/d/1HqaUcWY4q1iyW0JUusaJA--zihkGyJ7hNT-S6OpBI0g/edit?usp=sharing"
                target="_blank"
                className="px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md hover:bg-[#A53F2B] transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="flex justify-center items-center my-8 space-x-2">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></span>
          </div>

          {/* Project 4*/}
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4">
            {/* Project Image */}
            <div className="relative w-2/3 md:w-2/5"> {/* Adjusted width to 2/5 */}
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/hylight/hylight.png"
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


        </div>
        {/* Spacer for scrolling */}
        <div className="spacer"></div> {/* Spacer */}
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
