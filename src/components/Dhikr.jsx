import React, { useState } from "react";
import { Heart, Plus, RotateCcw } from "lucide-react";

const Dhikr = () => {
  const [dhikrCount, setDhikrCount] = useState(0);
  const dhikrList = [
    {
      arabic: "سُبْحَانَ اللَّهِ",
      transliteration: "Subhan'Allah",
      meaning: "Glory be to Allah",
    },
    {
      arabic: "الْحَمْدُ لِلَّهِ",
      transliteration: "Alhamdulillah",
      meaning: "Praise be to Allah",
    },
    {
      arabic: "اللَّهُ أَكْبَرُ",
      transliteration: "Allahu Akbar",
      meaning: "Allah is Greatest",
    },
    {
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
      transliteration: "La ilaha illa Allah",
      meaning: "There is no god but Allah",
    },
  ];

  const currentDhikr = dhikrList[dhikrCount % dhikrList.length];

  return (
    <div
      className="bg-gradient-to-r from-matte-gold to-matte-gold/20 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 w-80 h-64 flex flex-col justify-between cursor-pointer relative overflow-hidden"
      onClick={() => setDhikrCount(dhikrCount + 1)}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4"></div>

      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
            Dhikr
          </h1>
          <p className="text-white/80 text-xs font-light font-montserrat">
            Remembrance of Allah
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium font-montserrat">
              {dhikrCount}
            </span>
          </div>
          <RotateCcw
            className="w-5 h-5 text-white/80 hover:scale-102"
            onClick={() => setDhikrCount(0)}
          />
        </div>
      </div>

      {/* Main Arabic Text */}
      <div className="text-center relative z-10 my-4">
        <div className="text-white text-3xl font-bold leading-relaxed mb-2">
          {currentDhikr.arabic}
        </div>
        <p className="text-white/90 text-sm font-medium font-montserrat">
          {currentDhikr.transliteration}
        </p>
      </div>

      {/* Footer */}
      <div className="text-center relative z-10">
        <p className="text-white/70 text-xs italic font-light font-montserrat">
          "{currentDhikr.meaning}"
        </p>
        <div className="mt-3 flex justify-center">
          <div className="flex space-x-1">
            {dhikrList.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === dhikrCount % dhikrList.length
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

export default Dhikr;
