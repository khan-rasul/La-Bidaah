import { BookOpen, ChevronRight, Scroll } from "lucide-react";

const Hadith = () => (
  <div className="w-full mb-6">
    <div className="bg-gradient-to-r from-amber-700/40 to-amber-800/20 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-101 transition-all duration-300 ease-out p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 relative overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
      {/* Responsive background decoration */}
      <div className="absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-white/6 rounded-full -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-4 xl:-translate-y-4 2xl:-translate-y-6 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-4 xl:-translate-x-4 2xl:-translate-x-6"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 bg-white/4 rounded-full translate-y-1 sm:translate-y-1.5 md:translate-y-2 lg:translate-y-2 xl:translate-y-2 2xl:translate-y-4 translate-x-1 sm:translate-x-1.5 md:translate-x-2 lg:translate-x-2 xl:translate-x-2 2xl:translate-x-4"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-1/4 left-4 sm:left-5 md:left-6 lg:left-7 xl:left-8 2xl:left-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 bg-white/6 rounded-full"></div>

      {/* Content Container - Ensures proper spacing within padding */}
      <div className="flex flex-col h-full justify-between relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start flex-shrink-0">
          <div className="min-w-0 flex-1 mr-2 sm:mr-3 md:mr-4">
            <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-quicksand mb-1 sm:mb-1.5 md:mb-2">
              Hadith of the Day
            </h1>
            <p className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-light font-montserrat">
              Prophetic Guidance
            </p>
          </div>
          <Scroll className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white fill-white/20 drop-shadow-md" />
        </div>

        {/* Main Hadith Text - Takes up available space */}
        <div className="flex-1 flex flex-col justify-center px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6 2xl:px-8 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 2xl:py-8 min-h-0">
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 italic text-center font-montserrat break-words">
            "The best of people are those who benefit others."
          </div>

          {/* Narrator Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 border border-white/20">
            <div className="text-center">
              <span className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light font-montserrat">
                Narrator:
              </span>
              <span className="text-matte-gold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium font-montserrat ml-1 sm:ml-2">
                Jabir ibn Abdullah (RA)
              </span>
            </div>
          </div>
        </div>

        {/* Footer - Action Button & Indicators */}
        <div className="flex-shrink-0 mt-2 sm:mt-3 md:mt-4 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
          {/* Action Button */}
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 sm:space-x-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="bg-matte-gold/80 rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
              </div>
              <span className="text-white font-medium font-montserrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Read More
              </span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Footer indicators */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3 2xl:space-x-4">
              <Scroll className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white/60 flex-shrink-0" />
              <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-amber-400 flex-shrink-0"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-white/30 flex-shrink-0"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-white/30 flex-shrink-0"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-white/30 flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hadith;
