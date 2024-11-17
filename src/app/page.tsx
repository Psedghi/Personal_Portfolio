import Image from "next/image";
import Link from "next/link";
import profilePicture from "public/profile-picture.jpg";

export default function Home() {
  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col h-screen w-full relative font-sans">
      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center px-12 py-6 text-[#F0FFCE] text-xl">
        <span className="font-bold tracking-widest">PARSA SEDGHI</span>
        <nav className="space-x-4 text-base font-normal">
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

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full px-12">
        {/* Flex Container for Image and Text */}
        <div className="flex items-center justify-center">
          {/* Left Section: Staggered Profile Picture */}
          <div className="relative mr-12">
            {/* Orange Outline */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-md"
              aria-hidden="true"
            ></div>
            {/* Image */}
            <div className="relative">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                className="rounded-md w-64 h-auto"
                priority
              />
            </div>
          </div>

          {/* Right Section: Staggered Text */}
          <div className="text-left">
            <h1
              className="font-bold text-[100px] leading-tight tracking-widest"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              <span className="block">BUILDING</span>
              <span className="block ml-10">SOFTWARE</span>
              <span className="block ml-20">INNOVATIONS</span>
            </h1>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <hr className="border-t border-[#F0FFCE] w-2/3 mx-auto" />
          </div>
          <button
            className="px-8 py-3 border-2 border-[#F0FFCE] rounded-md text-[#F0FFCE] hover:bg-[#A53F2B] transition text-[40px]"
            style={{ fontFamily: "DejaVuSans, sans-serif" }}
          >
            VIEW MY WORK
          </button>
        </div>
      </div>
    </div>
  );
}
