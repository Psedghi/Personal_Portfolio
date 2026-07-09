import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
    {
        href: "mailto:psedghistem2022@gmail.com",
        label: "Email",
        icon: FaEnvelope,
    },
    {
        href: "https://linkedin.com/in/parsa-sedghi",
        label: "LinkedIn",
        icon: FaLinkedin,
    },
    {
        href: "https://github.com/psedghi",
        label: "GitHub",
        icon: FaGithub,
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-cream/10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
                <div className="text-center md:text-left">
                    <p className="font-display text-sm font-bold tracking-[0.25em]">
                        PARSA SEDGHI<span className="text-rust-bright">.</span>
                    </p>
                    <p className="mt-2 font-mono text-xs text-cream/40">
                        &copy; {new Date().getFullYear()} Parsa Sedghi. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    {SOCIALS.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={label}
                            className="glass flex h-10 w-10 items-center justify-center rounded-full text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-rust hover:text-rust-bright"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
