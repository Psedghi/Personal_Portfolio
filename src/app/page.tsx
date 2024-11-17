import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Import the Navbar component
import profilePicture from "public/profile-picture.jpg";

export default function Home() {
  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative mb-8 md:mb-0 md:mr-12 group">
            {/* Orange box outline */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-md group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            ></div>
            {/* Profile picture */}
            <div className="relative">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                className="rounded-md w-48 md:w-64 lg:w-72 h-auto group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1
              className="font-bold leading-tight tracking-widest text-4xl md:text-6xl lg:text-[100px]"
              style={{ fontFamily: "Helvetica, sans-serif" }}
            >
              {/* Staggered text */}
              <span className="block">BUILDING</span>
              <span className="block ml-2 md:ml-4 lg:ml-8">SOFTWARE</span>
              <span className="block ml-4 md:ml-8 lg:ml-12">INNOVATIONS</span>
            </h1>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <hr className="border-t border-[#F0FFCE] w-1/2 md:w-2/3 mx-auto" />
          </div>
          <Link href="/projects" className="hover:underline">
            <button
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-[#F0FFCE] rounded-md text-[#F0FFCE] hover:bg-[#A53F2B] transition text-base md:text-lg lg:text-[40px] cursor-pointer"
              style={{ fontFamily: "DejaVuSans, sans-serif" }}
            >
              VIEW MY WORK
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
