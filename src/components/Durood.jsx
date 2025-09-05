import React, { useState } from "react";
import { Heart, Plus, RotateCcw } from "lucide-react";

const Durood = () => {
  const [duroodCount, setDuroodCount] = useState(0);
  const duroodList = [
    {
      arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
      transliteration: "Allahumma salli ala Muhammad",
      meaning: "O Allah, send blessings upon Muhammad",
    },
    {
      arabic: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
      transliteration: "Sallallahu alayhi wa sallam",
      meaning: "May Allah's peace and blessings be upon him",
    },
  ];

  const currentDurood = duroodList[duroodCount % duroodList.length];

  return (
    <div
      className="bg-gradient-to-r from-panthera-green to-panthera-green/10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 w-100 h-64 flex flex-col justify-between cursor-pointer relative overflow-hidden"
      onClick={() => setDuroodCount(duroodCount + 1)}
    >
      {/* Background decoration */}
      <div className="absolute top-32 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-6 -translate-x-6"></div>
      <div className="absolute top-2 left-30 w-16 h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/5 rounded-full"></div>

      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
            Durood
          </h1>
          <p className="text-white/80 text-xs font-light font-montserrat">
            Blessings upon Prophet ﷺ
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium font-montserrat">
              {duroodCount}
            </span>
          </div>
          <RotateCcw
            className="w-5 h-5 text-white/80 hover:scale-102"
            onClick={() => setDuroodCount(0)}
          />
        </div>
      </div>

      {/* Main Arabic Text */}
      <div className="text-center relative z-10 my-4">
        <div className="text-white text-3xl font-bold leading-relaxed mb-2">
          {currentDurood.arabic}
        </div>
        <p className="text-white/90 text-sm font-medium font-montserrat">
          {currentDurood.transliteration}
        </p>
      </div>

      {/* Footer */}
      <div className="text-center relative z-10">
        <p className="text-white/70 text-xs font-light italic font-montserrat">
          "{currentDurood.meaning}"
        </p>
        <div className="mt-3 flex justify-center">
          <div className="flex space-x-1">
            {duroodList.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === duroodCount % duroodList.length
                    ? "bg-white"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Durood;
