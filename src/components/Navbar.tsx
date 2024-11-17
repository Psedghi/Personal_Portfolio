import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-[#280004] sticky top-0 z-50 w-full py-4 px-6 lg:px-12 text-[#F0FFCE] text-xl">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <span className="font-bold tracking-widest">PARSA SEDGHI</span>
                {/* Navigation Links */}
                <nav className="space-x-4 text-sm lg:text-base font-normal">
                    <Link href="/" className="hover:underline">
                        HOME
                    </Link>
                    <span>/</span>
                    <Link href="/about" className="hover:underline">
                        ABOUT
                    </Link>
                    <span>/</span>
                    <Link href="/projects" className="hover:underline">
                        PROJECTS
                    </Link>
                    <span>/</span>
                    <Link href="/contact" className="hover:underline">
                        CONTACT
                    </Link>
                </nav>
            </div>
            <div className="text-center">
                <hr className="border-t border-[#F0FFCE]" />
            </div>
        </header>
    );
};

export default Navbar;
