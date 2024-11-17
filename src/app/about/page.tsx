import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-[#280004] text-[#F0FFCE] flex flex-col min-h-screen w-full font-sans">
      {/* Navbar */}
      <Navbar />

      {/* About Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 md:px-12">
        {/* Title Section */}
        <h1
          className="text-4xl md:text-6xl lg:text-[100px] font-bold tracking-widest text-center mb-12"
          style={{ fontFamily: "Helvetica, sans-serif" }}
        >
          ABOUT PARSA
        </h1>
        <hr className="border-t-2 border-[#F0FFCE] w-1/3 mb-12" />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl">
          {/* Left Content: About Me */}
          <div className="relative w-full md:w-1/2">
            {/* Orange Outline */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg"
              aria-hidden="true"
            ></div>
            <div className="bg-[#A67C5B] p-6 rounded-lg shadow-md relative">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
              >
                About Me
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "DejaVuSans, sans-serif", color: "#4C230A" }}
              >
                My name is Parsa Sedghi, and I am a full-stack developer passionate
                about creating innovative solutions using JavaScript, React, and
                modern web technologies. With a unique combination of creativity,
                logic, and technical expertise, I thrive on tackling challenging
                projects and building intuitive user experiences.
                <br />
                <br />
                When I’m not coding, I enjoy reading, staying active, and playing
                soccer. Feel free to reach out if you’re interested in
                collaborating on projects, sharing ideas, or just having a chat!
              </p>
              {/* Call-to-Action Button */}
              <button
                className="mt-6 px-6 py-3 border-2 border-[#4C230A] text-[#4C230A] rounded-md hover:bg-[#A53F2B] hover:text-[#F0FFCE] transition cursor-pointer"
                style={{ fontFamily: "DejaVuSans, sans-serif" }}
              >
                Email Me!
              </button>
            </div>
          </div>

          {/* Right Content: Skills */}
          <div className="relative w-full md:w-1/2">
            {/* Orange Outline */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-[#A53F2B] rounded-lg"
              aria-hidden="true"
            ></div>
            <div className="bg-[#A67C5B] p-6 rounded-lg shadow-md relative">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Helvetica, sans-serif", color: "#4C230A" }}
              >
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Skill Categories */}
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#4C230A" }}
                  >
                    Languages
                  </h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/icons/javascript.svg"
                      alt="JavaScript"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/html5.svg"
                      alt="HTML5"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>HTML5</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/css3.svg"
                      alt="CSS3"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>CSS3</span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#4C230A" }}
                  >
                    Libraries & Frameworks
                  </h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/icons/react.svg"
                      alt="React"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>React</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/tailwindcss.svg"
                      alt="Tailwind CSS"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <img
                      src="/icons/nodejs.svg"
                      alt="Node.js"
                      className="w-10 h-10 hover:scale-110 transition"
                    />
                    <span style={{ color: "#4C230A" }}>Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
