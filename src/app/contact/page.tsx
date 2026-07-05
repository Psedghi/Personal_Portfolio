"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

const CHANNELS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "psedghistem2022@gmail.com",
    href: "mailto:psedghistem2022@gmail.com",
    cta: "Send a message",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/parsa-sedghi",
    href: "https://linkedin.com/in/parsa-sedghi",
    cta: "Connect with me",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@psedghi",
    href: "https://github.com/psedghi",
    cta: "See my code",
  },
];

export default function Contact() {
  return (
    <main className="bg-glow relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <SectionHeading eyebrow="03 — Contact" title="Let's connect" align="center" />

        <Reveal delay={0.2} className="mx-auto mt-6 max-w-xl text-center">
          <p className="text-base leading-relaxed text-cream/60 md:text-lg">
            Feel free to reach out through any of the following platforms — I&apos;m
            always happy to talk about new opportunities, projects, or ideas.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, href, cta }, i) => (
            <Reveal key={label} delay={0.1 + i * 0.1}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass group flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-rust/60 hover:shadow-[0_10px_40px_rgba(165,63,43,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors duration-300 group-hover:border-rust group-hover:text-rust-bright">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 font-display text-xl font-bold">{label}</h2>
                <p className="mt-1 break-all font-mono text-xs text-cream/50">{value}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cream/60 transition-colors duration-300 group-hover:text-rust-bright">
                  {cta}
                  <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
