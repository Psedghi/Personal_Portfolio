"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    align?: "left" | "center";
};

/** Numbered mono eyebrow + display title used at the top of each page/section. */
const SectionHeading = ({ eyebrow, title, align = "left" }: SectionHeadingProps) => {
    const centered = align === "center";

    return (
        <div className={centered ? "text-center" : "text-left"}>
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-rust-bright ${centered ? "justify-center" : ""}`}
            >
                <span className="h-px w-8 bg-rust" aria-hidden="true" />
                {eyebrow}
                {centered && <span className="h-px w-8 bg-rust" aria-hidden="true" />}
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl"
            >
                {title}
            </motion.h1>
        </div>
    );
};

export default SectionHeading;
