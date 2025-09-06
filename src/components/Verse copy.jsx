import { Pause, Play, Star } from "lucide-react";
import { useState } from "react";

const Verse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        backgroundColor: "#2E2E2E",
        borderColor: "#A17C28",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium" style={{ color: "#D4B65A" }}>
          Verse of the Day
        </h3>
        <Star className="w-5 h-5" style={{ color: "#A17C28" }} />
      </div>

      <div className="space-y-4">
        <div
          className="text-xl font-light leading-relaxed text-center"
          style={{ color: "#D4B65A" }}
        >
          وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
        </div>
        <div className="text-center italic" style={{ color: "#F5F3F0" }}>
          "And whoever fears Allah - He will make for him a way out"
        </div>
        <div className="text-sm text-center" style={{ color: "#B0B0B0" }}>
          Surah At-Talaq (65:2)
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border hover:opacity-80 transition-all"
            style={{
              backgroundColor: "#585858",
              borderColor: "#A17C28",
              color: "#D4B65A",
            }}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            <span className="text-sm">{isPlaying ? "Pause" : "Listen"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Verse;
