import { BookOpen, ChevronRight, Scroll } from "lucide-react";

const Hadith = () => (
  <div className="bg-gradient-to-r from-amber-700/40 to-amber-800/20 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-24 h-24 bg-white/6 rounded-full -translate-y-6 -translate-x-6"></div>
    <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/4 rounded-full translate-y-4 translate-x-4"></div>
    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
    <div className="absolute bottom-1/4 left-8 w-8 h-8 bg-white/6 rounded-full"></div>

    {/* Header */}
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div>
        <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
          Hadith of the Day
        </h1>
        <p className="text-white/80 text-xs font-light font-montserrat">
          Prophetic Guidance
        </p>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
        <Scroll className="w-5 h-5 text-matte-gold" />
      </div>
    </div>

    {/* Main Hadith Text */}
    <div className="relative z-10 my-6">
      <div className="text-white text-lg font-medium leading-relaxed mb-4 italic text-center font-montserrat">
        "The best of people are those who benefit others."
      </div>

      {/* Narrator Info */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="text-center">
          <span className="text-white/80 text-sm font-light font-montserrat">
            Narrator:
          </span>
          <span className="text-matte-gold text-sm font-medium font-montserrat ml-2">
            Jabir ibn Abdullah (RA)
          </span>
        </div>
      </div>
    </div>

    {/* Action Button */}
    <div className="flex justify-center relative z-10 mt-6">
      <button className="flex items-center space-x-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
        <div className="bg-matte-gold/80 rounded-full p-2">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-medium font-montserrat text-sm">
          Read Full Hadith
        </span>
        <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>

    {/* Footer indicators */}
    <div className="mt-6 flex justify-center relative z-10">
      <div className="flex items-center space-x-2">
        <Scroll className="w-4 h-4 text-white/60" />
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Hadith;
