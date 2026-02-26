"use client";

export default function HomeBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Soft Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradientSlow"></div>

      <div className="relative z-10 px-6 text-center max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-black leading-tight animate-slideUp">
            Innovating the{" "}
            <span className="text-[#0051FF] relative inline-block">
              <span className="relative z-10">Future</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-blue-200 -z-0 animate-expand"></span>
            </span>
          </h1>
        </div>

        {/* Paragraph */}
        <div className="overflow-hidden mt-8">
          <p className="md:text-2xl text-base text-gray-600 animate-slideUp delay-200">
            We create cutting-edge software solutions that transform businesses
            and drive digital innovation forward.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10 animate-slideUp delay-400">
          
          <button
            type="button"
            className="floating group flex items-center justify-center gap-4 bg-[#0051FF] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 font-medium hover:bg-black"
          >
            Explore Our Services
          </button>

          <button
            type="button"
            className="floating bg-white text-[#0051FF] px-10 py-3 text-lg rounded-full border-2 border-[#0051FF] hover:bg-[#0051FF] hover:text-white transition-all duration-300 font-semibold"
          >
            Get In Touch
          </button>

        </div>
      </div>
    </section>
  );
}