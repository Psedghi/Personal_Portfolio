"use client";

import Image from "next/image";
import Link from "next/link";
import profilePicture from "public/profile-picture.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

const HERO_LINES = [
  { text: "BUILDING", outline: false },
  { text: "SOFTWARE", outline: true },
  { text: "INNOVATIONS", outline: false },
];

const SOCIALS = [
  { href: "mailto:psedghistem2022@gmail.com", label: "Email", icon: FaEnvelope },
  { href: "https://linkedin.com/in/parsa-sedghi", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://github.com/psedghi", label: "GitHub", icon: FaGithub },
];

export default function Home() {
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
  };

  return (
    <main className="bg-glow relative flex min-h-screen flex-col overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-grow flex-col justify-center px-6 pb-16 pt-28 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          {/* Intro */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rust-bright md:justify-start"
            >
              <span className="hidden h-px w-8 bg-rust md:block" aria-hidden="true" />
              Parsa Sedghi — Software Engineer
            </motion.p>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {HERO_LINES.map(({ text, outline }, i) => (
                <motion.span
                  key={text}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className={`block ${outline ? "text-outline" : ""}`}
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
              Computer Science &amp; Business Analytics at the University of
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
                className="group inline-flex items-center gap-2 rounded-full bg-rust px-7 py-3 font-mono text-sm uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:bg-rust-bright hover:shadow-[0_0_30px_rgba(165,63,43,0.5)]"
              >
                About me
                <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-cream/20 px-7 py-3 font-mono text-sm uppercase tracking-[0.15em] text-cream/80 transition-all duration-300 hover:border-cream hover:text-cream"
              >
                View work
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 flex items-center justify-center gap-5 md:justify-start"
            >
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-cream/50 transition-all duration-300 hover:-translate-y-1 hover:text-rust-bright"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 90, damping: 16 }}
            className="group relative order-1 mx-auto w-56 md:order-2 md:w-full md:max-w-sm"
          >
            <div
              className="absolute -inset-3 rounded-2xl border border-rust/60 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-3 rounded-2xl bg-rust/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
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
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <Link
            href="/projects"
            className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 transition-colors duration-300 hover:text-cream"
          >
            Explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block h-6 w-px bg-cream/40"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
