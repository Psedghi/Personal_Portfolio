"use client"; // Needed for client-side animations

import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    // Empty useEffect for initial animation
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

  const cardVariants = {
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

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const boxWithBorderVariants = {
    hover: {
      x: -4,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25
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
          className={`text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-10`}
          style={{
            fontFamily: "Helvetica, sans-serif",
            letterSpacing: "-0.02em",
            marginTop: "3rem", // Ensures uniform spacing from the top
          }}
        >
          ABOUT PARSA
        </motion.h1>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "33.333333%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t-2 border-[#F0FFCE] mb-12"
        />

        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl"
        >
          {/* Left Content: About Me */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative w-full md:w-5/6 group"
          >
            <motion.div
              variants={boxWithBorderVariants}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg"
              />
              <div
                className="bg-[#EDE1D5] p-6 rounded-lg shadow-md relative"
              >
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
                  My name is Parsa Sedghi, and I am a junior at the <motion.a
                    href="https://www.umd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{ color: "#A53F2B", textDecoration: "underline" }}>University of Maryland</motion.a> pursuing a dual degree in <i>Computer Science</i> and <i>Operations
                      Management/Business Analytics</i> as well as a minor in <i>Cybersecurity</i>. I am
                  also in the <motion.a
                    href="https://www.rhsmith.umd.edu/quest"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{ color: "#A53F2B", textDecoration: "underline" }}>QUEST Honors Program</motion.a>, where I have the unique opportunity to
                  work on real-world, multidisciplinary projects each semester. The program
                  emphasizes experiential learning, teamwork, and creating innovative
                  solutions to complex challenges.
                  <br />
                  <br />
                  With a unique combination of creativity, logic, and technical expertise, I
                  thrive on working with wonderful people to tackle challenging projects and
                  build intuitive products. Whether it&apos;s through coding, designing, or analyzing data,
                  I am driven by a passion for continuous learning and growth, striving every day to make a meaningful
                  impact at the intersection of technology and business. Outside of work, I really enjoy watching soccer,
                  weightlifting, and running.
                  <br />
                  <br />
                  <b>My Interests: </b> Cybersecurity | Machine Learning | FinTech | Cloud Computing
                  <br />
                  <br />
                  <b>Get in touch: </b>
                  <motion.a
                    href="mailto:psedghistem2022@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    style={{ color: "#A53F2B", textDecoration: "underline" }}
                  >
                    Email Me
                  </motion.a>
                  {" | "}
                  <motion.a
                    href="https://linkedin.com/in/parsa-sedghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{ color: "#A53F2B", textDecoration: "underline" }}
                  >
                    LinkedIn
                  </motion.a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="spacer"></div>
        <div className="spacer"></div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 center-text"
          style={{ fontFamily: "Helvetica, sans-serif", color: "#F0FFCE" }}
        >
          Professional Highlights
        </motion.h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "16.666667%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t-2 border-[#F0FFCE] mb-12"
        />

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-6xl mx-auto mt-4"
        >
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute left-[3.8rem] top-0 bottom-0 w-1 bg-[#A53F2B]"
          />

          {/* Timeline Items */}
          <div className="space-y-20">
            {/* Microsoft */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://datacenters.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/microsoft-logo.png"
                    alt="Microsoft"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Incoming Summer Intern</h3>
                <p className="text-sm">Microsoft | Redmond, WA | Summer 2025</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Set to join the Cloud Operations + Innovations team to develop scalable internal tools and improve infrastructure reliability. Focused on delivering cross-functional engineering solutions for global enterprise customers.
                </p>
              </motion.div>
            </motion.div>

            {/* Meta */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://www.meta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/meta_icon.jpg"
                    alt="Meta"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                <p className="text-sm">Meta | College Park, MD | Spring 2025</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Built an AI-powered onboarding agent for XR devices for Meta Reality Labs using TypeScript, React Native, and LLM APIs, improving user understanding of privacy policies. Developed RAG pipelines and conversational workflows that increased user opt-ins and enhanced transparency around data tracking.
                </p>
              </motion.div>
            </motion.div>

            {/* UMD */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://it.umd.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/umd.webp"
                    alt="UMD"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Enterprise Software Engineering Intern</h3>
                <p className="text-sm">UMD | College Park, MD | Summer 2022 - Present</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Developed secure applications and contributed to the scalability of
                  enterprise-level systems for the university.
                </p>
              </motion.div>
            </motion.div>

            {/* BlackRock */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://www.blackrock.com/us/individual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/blackrock.jpg"
                    alt="BlackRock"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                <p className="text-sm">BlackRock | Wilmington, DE | Summer 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Worked on operational and financial engineering technologies to improve
                  internal systems and streamline workflow processes.
                </p>
              </motion.div>
            </motion.div>

            {/* Wodify */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://www.rhsmith.umd.edu/quest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/quest.png"
                    alt="Wodify/QUEST Honors"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Data Science Intern</h3>
                <p className="text-sm">QUEST Honors/Wodify | Remote | Spring 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Analyzed customer behavior data and implemented predictive models to
                  enhance user engagement and retention.
                </p>
              </motion.div>
            </motion.div>

            {/* Jane Street */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://www.janestreet.com/join-jane-street/programs-and-events/in-focus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/janeStreet.jpeg"
                    alt="Jane Street Logo"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">IN FOCUS Software Engineering Extern</h3>
                <p className="text-sm">Jane Street | New York, NY | Winter 2024</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  I gained proficiency in functional programming with OCaml, developed a Python-based stock trading bot, and applied quantitative analysis and probability theories in simulated trading exercises to deepen my understanding of market dynamics and trading strategies.                </p>
              </motion.div>
            </motion.div>

            {/* Consortium Networks */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://consortium.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/consortium.jpg"
                    alt="Consortium Networks"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Cyber Analyst Intern</h3>
                <p className="text-sm">Consortium Networks | Remote | Summer 2023</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Conducted product and penetration testing, developed incident response plans, and implemented advanced security measures to enhance the network security posture of Fortune 500 clients and other organizations.
                </p>
              </motion.div>
            </motion.div>

            {/* Best Buy */}
            <motion.div
              variants={timelineItemVariants}
              className="relative flex items-start"
            >
              <div className="absolute left-6 -top-10 w-20 h-20">
                <motion.a
                  variants={logoVariants}
                  whileHover="hover"
                  href="https://jobs.bestbuy.com/bby?id=item_detail&content=about_us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full border-2 border-[#F0FFCE] bg-[#280004] flex items-center justify-center z-10 absolute"
                >
                  <img
                    src="/Best Buy.jpg"
                    alt="Best Buy"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </motion.a>
              </div>
              <motion.div
                variants={cardVariants}
                className="ml-28 pt-2"
              >
                <h3 className="text-xl font-bold">Sales Associate</h3>
                <p className="text-sm">Best Buy | Annapolis, MD | Fall 2021 - Winter 2023</p>
                <p className="text-sm text-[#F0FFCE]/80 mt-2">
                  Provided personalized technology solutions, delivered exceptional customer service, and exceeded sales goals by effectively communicating product benefits and tailoring recommendations to customer needs.                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="spacer"></div>
        <div className="spacer"></div>

        {/* Education & Certifications Section */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative w-full md:w-5/6 group"
          >
            <motion.div
              variants={boxWithBorderVariants}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg"
              />
              <div
                className="bg-[#EDE1D5] p-6 rounded-lg shadow-md relative"
              >
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
                >
                  My Education & Certifications
                </h2>
                <ul className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "DejaVuSans, sans-serif", color: "#4C230A" }}>
                  <li className="mb-4">
                    <b>
                      University of Maryland
                    </b>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        <b>Dual Degree: </b><motion.a
                          href="https://www.rhsmith.umd.edu/programs/undergraduate/academics/academic-majors"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          B.S. Operations Management & Business Analytics
                        </motion.a>{" "}
                        +{" "}
                        <motion.a
                          href="https://www.cs.umd.edu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          B.S. Computer Science
                        </motion.a>
                      </li>

                      <li>
                        <b>Minor:</b> <motion.a
                          href="https://aces.umd.edu/minor"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          Cybersecurity
                        </motion.a>
                      </li>
                      <li>
                        <motion.a
                          href="https://www.rhsmith.umd.edu/quest"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          QUEST Honors Program
                        </motion.a>
                      </li>
                      <li><b>Activities:</b> Hack4Impact, Omicron Delta Kappa, Computer Science Advisory Board, Startup Shell</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    <b>Certifications</b>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        <motion.a
                          href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          AWS Cloud Practitioner
                        </motion.a>
                      </li>
                      <li>
                        <motion.a
                          href="https://www.codepath.org/courses/tech-interview-prep"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          CodePath Advanced Technical Program Certificate
                        </motion.a>
                      </li>
                      <li>
                        <motion.a
                          href="https://www.credly.com/org/project-management-institute/badge/fundamentals-of-predictive-project-management"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: "#A53F2B", textDecoration: "underline" }}
                        >
                          Fundamentals of Predictive Project Management
                        </motion.a>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    <b>Skills</b>
                    <ul className="list-disc list-inside pl-4">
                      <li>
                        <b>Programming Languages & Frameworks:</b> Python, Java, C, SQL, React, Vue.js, OCaml, JavaScript/CSS/HTML, R, TypeScript, Bash, Streamlit
                      </li>
                      <li>
                        <b>Tools:</b> AWS, Docker, Node.js, Snowflake, Nessus, VMware, Tableau, Excel
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Spacer for scrolling */}
        <div className="flex-grow"></div>
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
            whileHover={{ scale: 1.05 }}
          >
            Email Me
          </motion.a>
          {" | "}
          <motion.a
            href="https://linkedin.com/in/parsa-sedghi"
            target="_blank"
            className="hover:text-[#A53F2B] transition"
            whileHover={{ scale: 1.05 }}
          >
            LinkedIn
          </motion.a>
          {" | "}
          <motion.a
            href="https://github.com/psedghi"
            target="_blank"
            className="hover:text-[#A53F2B] transition"
            whileHover={{ scale: 1.05 }}
          >
            GitHub
          </motion.a>
        </div>
        <p>&copy; 2024 Parsa Sedghi. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
