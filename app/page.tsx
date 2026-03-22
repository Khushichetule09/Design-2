import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-sans overflow-hidden">
      {/* Navbar overlaying the background */}
      <Navbar />

      {/* Hero Section Container with Full-Screen Background Image */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage: "url('/image.png')"
        }}
      >
        {/* Slight dark overlay for better visibility of the navbar */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* Hero Content aligned to the left */}
        <div className={`relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 ${outfit.className}`}>
          <div className="max-w-2xl text-white mt-8 md:mt-0">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-6">
              Focus on what matters most.
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-md mb-8 font-light tracking-wide leading-relaxed">
              Automate the repetitive tasks and let your team focus on breakthrough ideas. Scalable AI solutions at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white/90 transition-all duration-200 shadow-sm">
                Get started for free
              </button>
              <span className="text-white/80 text-sm mt-3 sm:mt-0 sm:ml-2">
                Start building in minutes
              </span>
            </div>
          </div>
        </div>

        {/* Footer / Logos at the bottom */}
        <div className="absolute bottom-10 left-0 w-full px-8 md:px-16 lg:px-24 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-90">
              {/* Dummy Logos similar to reference layout */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-[2px] border-white rounded-md"></div>
                <span className="text-white font-medium text-[17px] tracking-wide">brandname</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-[2px] border-white border-dashed"></div>
                <span className="text-white font-medium text-[17px] tracking-wide">brandname</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-white border-t-[2px] border-b-[2px]"></div>
                <span className="text-white font-medium text-[17px] tracking-wide">brandname</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-white"></div>
                <span className="text-white font-medium text-[17px] tracking-wide">brandname</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
