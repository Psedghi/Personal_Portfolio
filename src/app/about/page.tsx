"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
const EXPERIENCE = [
  {
    logo: "/google-logo.webp",
    company: "Google",
    href: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol",
    role: "Software Engineer",
    meta: "Mountain View, CA | Present",
    blurb:
    "Building payment infrastructure that powers seamless, secure transaction experiences for millions of users across Google Pay surfaces."
  },
  {
    logo: "/microsoft-logo.png",
    company: "Microsoft",
    href: "https://datacenters.microsoft.com/",
    role: "Engineering Intern",
    meta: "Redmond, WA | Summer 2025",
    blurb:
    "Built ML-powered automation and real-time observability tools (Python, Azure Functions, TypeScript) to provision, replace, and monitor secure datacenter devices at scale, using predictive anomaly detection to cut manual engineering work."
  },
  {
    logo: "/meta_icon.jpg",
    company: "Meta",
    href: "https://www.meta.com/",
    role: "Software Engineering Intern",
    meta: "College Park, MD | Spring 2025",
    blurb:
      "Built an AI-powered onboarding agent for XR devices for Meta Reality Labs using TypeScript, React Native, and LLM APIs, improving user understanding of privacy policies. Developed RAG pipelines and conversational workflows that increased user opt-ins and enhanced transparency around data tracking.",
  },
  {
    logo: "/umd.webp",
    company: "UMD",
    href: "https://it.umd.edu/",
    role: "Enterprise Software Engineering Intern",
    meta: "College Park, MD | Summer 2022 – Spring 2026",
    blurb:
      "Developed secure applications and contributed to the scalability of enterprise-level systems for the university.",
  },
  {
    logo: "/blackrock.jpg",
    company: "BlackRock",
    href: "https://www.blackrock.com/us/individual",
    role: "Software Engineering Intern",
    meta: "Wilmington, DE | Summer 2024",
    blurb:
      "Worked on operational and financial engineering technologies to improve internal systems and streamline workflow processes.",
  },
  {
    logo: "/janeStreet.jpeg",
    company: "Jane Street",
    href: "https://www.janestreet.com/join-jane-street/programs-and-events/in-focus/",
    role: "IN FOCUS Software Engineering Extern",
    meta: "New York, NY | Winter 2024",
    blurb:
      "Gained proficiency in functional programming with OCaml, developed a Python-based stock trading bot, and applied quantitative analysis and probability theories in simulated trading exercises to deepen my understanding of market dynamics and trading strategies.",
  },
  {
    logo: "/consortium.jpg",
    company: "Consortium Networks",
    href: "https://consortium.net/",
    role: "Cyber Analyst Intern",
    meta: "Remote | Summer 2023",
    blurb:
      "Conducted product and penetration testing, developed incident response plans, and implemented advanced security measures to enhance the network security posture of Fortune 500 clients and other organizations.",
  },
  {
    logo: "/Best Buy.jpg",
    company: "Best Buy",
    href: "https://jobs.bestbuy.com/bby?id=item_detail&content=about_us",
    role: "Sales Associate",
    meta: "Annapolis, MD | Fall 2021 – Winter 2023",
    blurb:
      "Provided personalized technology solutions, delivered exceptional customer service, and exceeded sales goals by effectively communicating product benefits and tailoring recommendations to customer needs.",
  },
];

const INTERESTS = ["Cybersecurity", "Machine Learning", "FinTech", "Cloud Computing"];

const SKILLS = {
  "Languages & Frameworks": [
    "Python", "Java", "C", "SQL", "React", "Vue.js", "OCaml",
    "JavaScript/CSS/HTML", "R", "TypeScript", "Bash", "Streamlit",
  ],
  Tools: ["AWS", "Docker", "Node.js", "Snowflake", "Nessus", "VMware", "Tableau", "Excel"],
};

const CERTIFICATIONS = [
  {
    label: "AWS Cloud Practitioner",
    href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    label: "CodePath Advanced Technical Program Certificate",
    href: "https://www.codepath.org/courses/tech-interview-prep",
  },
  {
    label: "Fundamentals of Predictive Project Management",
    href: "https://www.credly.com/org/project-management-institute/badge/fundamentals-of-predictive-project-management",
  },
];

export default function About() {
  return (
    <main className="bg-glow relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
        <SectionHeading eyebrow="About Me" title="About Parsa" />

        {/* Bio */}
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_260px]">
          <Reveal className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-4 border-rust"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl bg-sand p-8 text-cocoa shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-10">
              <p className="text-base leading-relaxed md:text-lg">
                My name is Parsa Sedghi, and I recently graduated from the{" "}
                <a
                  href="https://www.umd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium text-rust"
                >
                  University of Maryland
                </a>{" "}
                where I pursued a dual degree in <i>Computer Science</i> and{" "}
                <i>Operations Management/Business Analytics</i> as well as a minor in{" "}
                <i>Cybersecurity</i>. I was also in the{" "}
                <a
                  href="https://www.rhsmith.umd.edu/quest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium text-rust"
                >
                  QUEST Honors Program
                </a>
                , where I had the unique opportunity to work on real-world,
                multidisciplinary projects each semester. The program emphasizes
                experiential learning, teamwork, and creating innovative solutions to
                complex challenges.
              </p>
              <p className="mt-5 text-base leading-relaxed md:text-lg">
                With a unique combination of creativity, logic, and technical expertise, I
                thrive on working with wonderful people to tackle challenging projects and
                build intuitive products. Whether it&apos;s through coding, designing, or
                analyzing data, I am driven by a passion for continuous learning and
                growth, striving every day to make a meaningful impact at the intersection
                of technology and business. Outside of work, I really enjoy watching
                soccer, weightlifting, and running.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-4 border-rust"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-between gap-8 rounded-2xl bg-sand p-8 text-cocoa shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                  Interests
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-cocoa/30 px-3 py-1 font-mono text-xs text-cocoa/80"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                  Get in touch
                </h2>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href="mailto:psedghistem2022@gmail.com"
                    className="link-underline w-fit font-medium text-rust"
                  >
                    Email me
                  </a>
                  <a
                    href="https://linkedin.com/in/parsa-sedghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline w-fit font-medium text-rust"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Experience timeline */}
        <div className="mt-28">
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rust-bright">
              <span className="h-px w-8 bg-rust" aria-hidden="true" />
              Professional Highlights
            </h2>
            <p className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Where I&apos;ve worked
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div
              className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-rust via-cream/15 to-transparent md:left-9"
              aria-hidden="true"
            />
            <div className="space-y-12">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={`${job.company}-${job.role}`} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="group relative flex gap-6 md:gap-10">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-cream/20 bg-night-deep transition-all duration-300 group-hover:border-rust group-hover:shadow-[0_0_20px_rgba(165,63,43,0.4)] md:h-[4.5rem] md:w-[4.5rem]"
                      aria-label={job.company}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="h-full w-full object-cover"
                      />
                    </a>
                    <div className="glass flex-grow rounded-2xl p-6 transition-colors duration-300 group-hover:border-rust/50 md:p-7">
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <h3 className="font-display text-lg font-bold md:text-xl">
                          {job.role}
                        </h3>
                        <p className="font-mono text-xs text-cream/40">{job.meta}</p>
                      </div>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-rust-bright">
                        {job.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-cream/70">
                        {job.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Education, certifications, skills */}
        <div className="mt-28">
          <Reveal>
            <h2 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rust-bright">
              <span className="h-px w-8 bg-rust" aria-hidden="true" />
              Education &amp; Skills
            </h2>
            <p className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              What I bring
            </p>
          </Reveal>

          <Reveal className="relative mt-14">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-4 border-rust"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl bg-sand p-8 text-cocoa shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-10">
              {/* Education */}
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                Education
              </h3>
              <p className="mt-3 font-display text-xl font-bold md:text-2xl">
                University of Maryland
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-base">
                <li>
                  <b>Dual Degree:</b>{" "}
                  <a
                    href="https://www.cs.umd.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-medium text-rust"
                  >
                    B.S. Computer Science
                  </a>{" "}
                  +{" "}
                  <a
                    href="https://www.rhsmith.umd.edu/programs/undergraduate/academics/academic-majors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-medium text-rust"
                  >
                    B.S. Operations Management &amp; Business Analytics
                  </a>
                </li>
                <li>
                  <b>Minor:</b>{" "}
                  <a
                    href="https://aces.umd.edu/minor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-medium text-rust"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <b>Honors:</b>{" "}
                  <a
                    href="https://www.rhsmith.umd.edu/quest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-medium text-rust"
                  >
                    QUEST Honors Program
                  </a>
                </li>
                <li>
                  <b>Activities:</b> Hack4Impact, Omicron Delta Kappa, Computer
                  Science Advisory Board, Startup Shell
                </li>
              </ul>

              <div className="my-8 h-px bg-cocoa/15" aria-hidden="true" />

              {/* Certifications */}
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                Certifications
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed md:text-base">
                {CERTIFICATIONS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-medium text-rust"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-cocoa/15" aria-hidden="true" />

              {/* Skills */}
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                Skills
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-base">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <li key={group}>
                    <b>{group}:</b> {items.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
