"use client"; // Needed for client-side animations

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Trigger the animation on mount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#A53F2B",
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

  const decorativeDotsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow flex flex-col items-center justify-center px-4 md:px-12"
      >
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-10 ${isReady ? "opacity-100 animate-fadeInUp" : "opacity-0"
            }`}
          style={{
            fontFamily: "Helvetica, sans-serif",
            letterSpacing: "-0.02em",
            marginTop: "3.25rem", // Matches the margin on About page
          }}
        >
          MY WORK
        </motion.h1>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "33.333333%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t-2 border-[#F0FFCE] mb-12"
        />

        {/* Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-12 w-full max-w-6xl"
        >
          {/* Project: Meta XR New User Onboarding */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-reverse md:space-x-8"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-2/5"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
                <div className="w-5/5 mx-auto">
                  <img
                    src="/meta-onboarding.png"
                    alt="Meta XR Onboarding"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-3/5 text-left"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Meta XR New User Onboarding Experience
              </h2>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                I led the development of an AI-powered onboarding agent for XR devices for a project with the Meta Reality Labs organization. The assistant translated complex privacy policies into clear, interactive terms which improved user clarity and comprehension. I built a <b>Retrieval-Augmented Generation (RAG)</b> pipeline to ground conversations in with Meta policy documententation, and helped deploy opt-in workflows that increased data-sharing consent by 45%.
              </p>
              <motion.a
                href="https://youtu.be/V5A13TLdM48?feature=shared"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/*Project 1 */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-1/2"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/RedBean.png"
                  alt="Red Bean Cafe"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-1/2 text-left"
            >
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
                I designed and developed a website for my family's store, The Red Bean, located in the heart of downtown Annapolis, Maryland. Built using React, HTML, CSS, and JavaScript, the site has attracted over <b><u>40,000</u></b> visitors, showcasing our unique offerings and engaging with our community. If you're in the area, we'd love for you to stop by and experience it in person!
              </p>
              <motion.a
                href="https://theredbeancafe.com/"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/* Project UMD TRS */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-3/5"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/TRS Homepage.png"
                  alt="TRS Homepage"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-4/5 text-left"
            >
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
                As an Enterprise Software Engineer Intern at the University of Maryland, I contributed to the development of the Tuition Remission System (TRS) application, which processes tuition for thousands of students and faculty annually. From brainstorming and design to deployment, I was actively involved in creating a robust web-based solution. Utilizing a tech stack that included Java Servlets, JavaScript, Vue.js, CSS, HTML, Apache Maven, and SQL, I developed and deployed the system in a Java web application environment with Spring Boot frameworks. Additionally, I assisted with the team's web application and back-end testing efforts to ensure the system's reliability and performance for university clients.
              </p>
              <motion.a
                href="https://uhr.umd.edu/benefits-and-wellness/tuition-remission"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/*Project CMSC320 SPY */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-1/2"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/SPY.avif"
                  alt="SPY"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-1/2 text-left"
            >
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
                In this project I analyzed the SPY ETF as a representation of the S&P 500, with the goal of predicting stock price changes using machine learning. I worked on exploring historical stock data from Yahoo Finance, conducting statistical analyses, visualizations, and building a decision tree regression model to uncover meaningful patterns and forecast future price changes.
              </p>
              <motion.a
                href="https://psedghi.github.io/CMSC320_Project/index.html"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-3/5"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="./wodify.png"
                  alt="Wodify"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-4/5 text-left"
            >
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
                In this project, I used Pandas to analyzed the impact of free trials and discounts on customer retention and lifetime value for Wodify, a fitness CRM software company. I took the lead in cleaning and organizing <b><u>six</u></b> complex datasets with over <b><u>2.5 million</u></b> records. I developed retention rate metrics, and performed regression analyses to identify trends and provide actionable insights. This work allowed me to implement a machine learning algorithm to provide data-driven recommendations for optimizing gym memberships and pricing strategies, showcasing my ability to translate raw data into meaningful business solutions.
              </p>
              <motion.a
                href="https://docs.google.com/document/d/1CtTKe4PcdZlgl66tx8UsjA8lxmwxDCnQWv2zSiTeVXo/edit?usp=sharing"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/*Project 3 */}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-full md:w-1/2"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/ADR.png"
                  alt="ADR Home Page Image"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-1/2 text-left"
            >
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
                I contributed to the All District Reads project in Spring 2024 for Hack4Impact. Our goal was to increase literacy in K-5 students by developing tools to support parental involvement and track program impact. I played a key role in constructing the frontend of the Library system, which included creating multiple views and interactive forms, developing the Welcome page with user authentication, and syncing data between Firestore and the frontend. I overcame challenges such as connecting Firestore to the frontend and converting UI designs into functional CSS, showcasing his problem-solving and technical skills in React and Firebase.
              </p>
              <motion.a
                href="https://docs.google.com/presentation/d/1HqaUcWY4q1iyW0JUusaJA--zihkGyJ7hNT-S6OpBI0g/edit?usp=sharing"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            variants={decorativeDotsVariants}
            className="flex justify-center items-center my-8 space-x-2"
          >
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
            <motion.span variants={dotVariants} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#F0FFCE] rounded-full"></motion.span>
          </motion.div>

          {/* Project 4*/}
          <motion.div
            variants={projectVariants}
            className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-4"
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative w-2/3 md:w-2/5"
            >
              <div className="bg-[#4C230A] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/hylight/hylight.png"
                  alt="HyLight"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            {/* Project Description */}
            <motion.div
              variants={projectVariants}
              className="w-full md:w-4/5 text-left"
            >
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
              <motion.a
                href="https://www.linkedin.com/in/parsa-sedghi/details/projects/1210074597/multiple-media-viewer/?profileId=ACoAAC46NtQBI6rin7H3_lSWzJAocR95UapOyXY&treasuryMediaId=1704164607696"
                target="_blank"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block px-6 py-3 border-2 border-[#F0FFCE] text-[#F0FFCE] rounded-md transition"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-[#280004] text-center text-sm md:text-base py-4 mt-auto"
        style={{ fontFamily: "DejaVuSans, sans-serif" }}
      >
        <div className="mb-2">
          <motion.a
            href="mailto:psedghistem2022@gmail.com"
            className="hover:text-[#A53F2B] transition"
            whileHover="hover"
            whileTap="tap"
          >
            Email Me
          </motion.a>
          {" | "}
          <motion.a
            href="https://linkedin.com/in/parsa-sedghi"
            target="_blank"
            className="hover:text-[#A53F2B] transition"
            whileHover="hover"
            whileTap="tap"
          >
            LinkedIn
          </motion.a>
          {" | "}
          <motion.a
            href="https://github.com/psedghi"
            target="_blank"
            className="hover:text-[#A53F2B] transition"
            whileHover="hover"
            whileTap="tap"
          >
            GitHub
          </motion.a>
        </div>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
