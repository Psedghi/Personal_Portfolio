"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const PROJECTS = [
  {
    title: "NeedyMeds Drug Discount Card App",
    image: "/needy_meds.png",
    href: "https://apps.apple.com/us/app/needymeds-drug-discount-card/id6756268977",
    github: "https://github.com/Hack4Impact-UMD/needymeds",
    tags: ["React Native", "Node.js", "AWS", "SQL"],
    blurb:
      "As part of Hack4Impact at UMD, I helped build the redesigned Drug Discount Card mobile app for NeedyMeds, a nonprofit that helps 3.3 million people per year afford healthcare. Their discount card alone has saved patients over $300 million, with discounts of up to 80% at more than 63,000 pharmacies nationwide. The app lets anyone search a medication, compare real-time prices at nearby pharmacies, and save a free discount card to show at the counter — completely anonymously, with no sign-up or personal information required. With my team at Hack4Impact-UMD, we spent 2 semesters building this app with React Native for cross-platform iOS/Android support and a Node.js backend for pharmacy price lookups and discount card generation, including Apple/Google Wallet integration for one-tap access at checkout.",
  },
  {
    title: "Meta XR New User Onboarding Experience",
    image: "/meta-onboarding.png",
    href: "https://youtu.be/V5A13TLdM48?feature=shared",
    tags: ["TypeScript", "React Native", "LLM APIs", "RAG"],
    blurb:
      "I led the development of an AI-powered onboarding agent for XR devices for a project with the Meta Reality Labs organization. The assistant translated complex privacy policies into clear, interactive terms which improved user clarity and comprehension. I built a Retrieval-Augmented Generation (RAG) pipeline to ground conversations in Meta policy documentation, and helped deploy opt-in workflows that increased data-sharing consent by 45%.",
  },
  {
    title: "UMD Senate Website",
    image: "/umd_senate.png",
    href: "https://senate.umd.edu",
    tags: ["Vue.js", "Java Spring Boot", "AWS S3", "SQL"],
    blurb:
      "I helped rewrite the University of Maryland Senate website, a platform used by 50,000 students, faculty, and staff annually and serving 750,000 visits per year. The rebuild moved the site to a Vue.js frontend with a Java Spring Boot backend and AWS S3 for document storage. Beyond the public-facing site, I helped develop the internal dev tooling used by the administrators who run the Senate.",
  },
  {
    title: "Semantic Prompt Caching for Multi-Tenant LLM Serving",
    image: "/cmsc818Q.png",
    href: "https://docs.google.com/presentation/d/1jrSzBv8sO0KO_joRiF5SMHDwdGCQIhWyBa7-IiRtLA4/edit?usp=sharing",
    tags: ["Python", "FAISS", "LLM Inference"],
    blurb:
      "A middleware system my group and I built for CMSC818Q — a master's-level course I took as an undergraduate — that cuts redundant GPU inference costs in LLM serving pipelines by caching responses to semantically similar prompts. The system introduces a two-stage Hybrid Lookup pipeline: a FAISS-based approximate nearest-neighbor search over sentence embeddings narrows candidates, then a Token-F1 guard filters out \"semantic paradox\" cases — prompts that are lexically similar but differ in a single critical token, like \"today\" vs. \"tomorrow\" — that would otherwise fool cosine similarity into serving an incorrect cached response. Across workloads from 100 to 10,000 prompts, the proxy achieved up to a 1.28x speedup with exact-match caching alone, and over 80% cache hit rate with mean response quality above 0.90 once semantic matching was enabled.",
  },
  {
    title: "The Red Bean Website",
    image: "/RedBean.png",
    href: "https://theredbeancafe.com/",
    tags: ["React", "JavaScript", "HTML/CSS"],
    blurb:
      "I designed and developed a website for my family's store, The Red Bean, located in the heart of downtown Annapolis, Maryland. Built using React, HTML, CSS, and JavaScript, the site has attracted over 100,000 visitors, showcasing our unique offerings and engaging with our community. If you're in the area, we'd love for you to stop by and experience it in person!",
  },
  {
    title: "UMD Tuition Remission Services",
    image: "/TRS Homepage.png",
    href: "https://uhr.umd.edu/benefits-and-wellness/tuition-remission",
    tags: ["Java", "Vue.js", "Spring Boot", "SQL"],
    blurb:
      "As an Enterprise Software Engineer Intern at the University of Maryland, I contributed to the development of the Tuition Remission System (TRS) application, which processes tuition for thousands of students and faculty annually. From brainstorming and design to deployment, I was actively involved in creating a robust web-based solution using Java Servlets, JavaScript, Vue.js, Apache Maven, SQL, and Spring Boot, while assisting with web application and back-end testing to ensure reliability for university clients.",
  },
  {
    title: "Visualizing Two Decades of NBA Evolution",
    image: "/cmsc_471.png",
    href: "https://psedghi.github.io/CMSC471_Final_Project/",
    tags: ["D3.js", "Python", "Data Visualization"],
    blurb:
      "A data visualization project exploring how the NBA has changed over the past two decades. I built an interactive site using D3.js that turns raw league data — from the NBA API, Basketball Reference, and a public shot-location dataset — into six visual stories, including a court heatmap with a year slider tracking the rise of the 3-point shot, league-wide scoring trends, and load-management patterns in player rest. I personally designed and built the Player Size visualization (data pipeline plus a D3 dot-strip plot) and the Global Superstars visualization (data pipeline plus a D3 line chart and MVP list). The site is a build-free static page deployed on GitHub Pages, with Python scripts to regenerate the underlying datasets from live NBA data sources.",
  },
  {
    title: "Predicting SPY ETF Price Dynamics Using Machine Learning",
    image: "/SPY.avif",
    href: "https://psedghi.github.io/CMSC320_Project/index.html",
    tags: ["Python", "Machine Learning", "Data Science"],
    blurb:
      "In this project I analyzed the SPY ETF as a representation of the S&P 500, with the goal of predicting stock price changes using machine learning. I worked on exploring historical stock data from Yahoo Finance, conducting statistical analyses, visualizations, and building a decision tree regression model to uncover meaningful patterns and forecast future price changes.",
  },
  {
    title: "Wodify Machine Learning Project",
    image: "/wodify.png",
    href: "https://docs.google.com/document/d/1CtTKe4PcdZlgl66tx8UsjA8lxmwxDCnQWv2zSiTeVXo/edit?usp=sharing",
    tags: ["Python", "Pandas", "Regression Analysis"],
    blurb:
      "In this project, I used Pandas to analyze the impact of free trials and discounts on customer retention and lifetime value for Wodify, a fitness CRM software company. I took the lead in cleaning and organizing six complex datasets with over 2.5 million records, developed retention rate metrics, and performed regression analyses to identify trends. This work allowed me to implement a machine learning algorithm to provide data-driven recommendations for optimizing gym memberships and pricing strategies.",
  },
  {
    title: "All District Reads Website",
    image: "/ADR.png",
    href: "https://docs.google.com/presentation/d/1HqaUcWY4q1iyW0JUusaJA--zihkGyJ7hNT-S6OpBI0g/edit?usp=sharing",
    github: "https://github.com/Hack4Impact-UMD/ADR-Mobile",
    tags: ["React", "Firebase", "Firestore"],
    blurb:
      "I contributed to the All District Reads project in Spring 2024 for Hack4Impact. Our goal was to increase literacy in K-5 students by developing tools to support parental involvement and track program impact. I played a key role in constructing the frontend of the Library system, developing the Welcome page with user authentication, and syncing data between Firestore and the frontend — converting UI designs into functional, reliable React code.",
  },
];

export default function Projects() {
  return (
    <main className="bg-glow relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
        <SectionHeading eyebrow="My Work" title="Highlighted Projects" />

        <div className="mt-20 space-y-24 md:space-y-28">
          {PROJECTS.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={project.title}>
                <article
                  className={`group flex flex-col items-center gap-8 md:gap-12 ${
                    reversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Screenshot */}
                  <a
                    href={project.href}
                    target={project.href ? "_blank" : undefined}
                    rel={project.href ? "noopener noreferrer" : undefined}
                    className="relative w-full md:w-1/2"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div
                      className="absolute -inset-2 rounded-2xl bg-rust/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="glass relative overflow-hidden rounded-2xl transition-colors duration-300 group-hover:border-rust/50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>

                  {/* Description */}
                  <div className="w-full md:w-1/2">
                    <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                      {project.title}
                    </h2>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-rust/50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-rust-bright"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm leading-relaxed text-cream/70 md:text-base">
                      {project.blurb}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-300 hover:text-rust-bright"
                        >
                          View project
                          <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-300 hover:text-rust-bright"
                        >
                          View code
                          <FaGithub className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
