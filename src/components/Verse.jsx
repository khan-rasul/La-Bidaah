import { Pause, Play, Star, BookOpen } from "lucide-react";
import { useState } from "react";

const Verse = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mx-6 mt-6 mb-4">
      <div className="bg-gradient-to-r from-emerald-700/40 to-emerald-800/20 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-white/6 rounded-full -translate-y-6 translate-x-6"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/4 rounded-full translate-y-4 -translate-x-4"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-8 w-8 h-8 bg-white/6 rounded-full"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
              Verse of the Day
            </h1>
            <p className="text-white/80 text-xs font-light font-montserrat">
              Daily Quranic Reflection
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
            <Star className="w-5 h-5 text-matte-gold fill-matte-gold/30" />
          </div>
        </div>

        {/* Main Arabic Text */}
        <div className="text-center relative z-10 my-6">
          <div className="text-white text-3xl font-bold leading-relaxed mb-4">
            وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
          </div>
          <p className="text-white/95 text-lg font-medium font-montserrat mb-3 italic">
            "And whoever fears Allah - He will make for him a way out"
          </p>
          <p className="text-white/80 text-sm font-light font-montserrat">
            Surah At-Talaq (65:2)
          </p>
        </div>

        {/* Audio Control */}
        <div className="flex justify-center relative z-10 mt-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="bg-matte-gold/80 rounded-full p-2">
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </div>
            <span className="text-white font-medium font-montserrat text-sm">
              {isPlaying ? "Pause Recitation" : "Listen to Recitation"}
            </span>
          </button>
        </div>

        {/* Footer indicators */}
        <div className="mt-6 flex justify-center relative z-10">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-white/60" />
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verse;
