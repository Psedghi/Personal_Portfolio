"use client";

import Image from "next/image";
import Link from "next/link";
import profilePicture from "public/profile-picture.jpg";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HERO_LINES = [
  { text: "IDEAS", outline: false },
  { text: "INTO", outline: true },
  { text: "IMPACT", outline: false },
];

const MARQUEE_ITEMS = [
  "React",
  "TypeScript",
  "Python",
  "Java",
  "AWS",
  "Machine Learning",
  "Cybersecurity",
  "Node.js",
  "SQL",
  "Docker",
  "Vue.js",
  "OCaml",
  "Snowflake",
  "Tableau",
];

export default function Home() {
  // Spotlight that follows the cursor across the hero
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, rgba(199, 90, 63, 0.14), transparent 70%)`;

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    }),
    hover: {
      scale: 1.05,
      x: 12,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 18,
      },
    },
  };

  return (
    <main
      className="bg-glow relative flex min-h-screen flex-col overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
        aria-hidden="true"
      />

      <section className="relative mx-auto flex w-full max-w-6xl flex-grow flex-col justify-center px-6 pb-10 pt-28 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 90, damping: 16 }}
            className="group relative mx-auto w-56 md:w-full md:max-w-sm"
          >
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-4 border-rust transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-2 rounded-2xl bg-rust/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden="true"
            />
            <Image
              src={profilePicture}
              alt="Portrait of Parsa Sedghi"
              width={448}
              height={448}
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 224px, 448px"
              className="relative h-auto w-full rounded-2xl object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
            />
          </motion.div>

          {/* Intro */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rust-bright md:justify-start"
            >
              <span className="hidden h-px w-8 bg-rust md:block" aria-hidden="true" />
              Parsa Sedghi — Software Engineer
            </motion.p>

            <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
              {HERO_LINES.map(({ text, outline }, i) => (
                <motion.span
                  key={text}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={lineVariants}
                  className={`block w-fit cursor-default transition-colors duration-300 ${
                    outline ? "text-outline hover:text-rust-bright" : "hover:text-rust-bright"
                  } mx-auto md:mx-0`}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/60 md:mx-0 md:text-lg"
            >
              Computer Science &amp; Operations Research at the University of
              Maryland, building at the intersection of technology and business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-rust px-7 py-3 font-mono text-sm uppercase tracking-[0.15em] text-cream transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(199,90,63,0.55)]"
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-rust-bright to-cream transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-night">
                  About me
                  <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Explore cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-14 flex justify-center md:mt-16"
        >
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-3 text-cream/70 transition-colors duration-300 hover:text-cream"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em]">
              Explore my work
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 bg-cream/5 transition-all duration-300 group-hover:border-rust-bright group-hover:bg-rust/20 group-hover:shadow-[0_0_25px_rgba(199,90,63,0.4)]">
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </span>
          </Link>
        </motion.div>
      </section>

      {/* Skills marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative border-t border-cream/10 py-5"
      >
        <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-cream/40 transition-colors duration-300 hover:text-rust-bright"
              >
                {item}
                <span className="text-rust" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
