import React, { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";

const Dua = () => {
  const [currentDuaIndex, setCurrentDuaIndex] = useState(0);

  const duaList = [
    {
      arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ",
      transliteration: "Allahumma anta rabbi la ilaha illa ant",
      meaning: "O Allah, You are my Lord, there is no god but You",
      category: "Morning Dua",
    },
    {
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
      transliteration: "Rabbana atina fi'd-dunya hasanatan",
      meaning: "Our Lord, give us good in this world",
      category: "General Dua",
    },
    {
      arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي",
      transliteration: "Allahummaghfir li dhanbi",
      meaning: "O Allah, forgive my sins",
      category: "Seeking Forgiveness",
    },
    {
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
      transliteration: "Rabbi ishrah li sadri",
      meaning: "My Lord, expand my chest (grant me confidence)",
      category: "Relief & Ease",
    },
  ];

  const currentDua = duaList[currentDuaIndex];

  const handleCardClick = () => {
    setCurrentDuaIndex((currentDuaIndex + 1) % duaList.length);
  };

  return (
    <div
      className="bg-gradient-to-r from-plum to-plum/20 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 w-full h-full flex flex-col justify-between cursor-pointer relative overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Minimal random circle decorations */}
      <div className="absolute top-6 right-8 w-12 h-12 bg-white/6 rounded-full"></div>
      <div className="absolute bottom-12 left-6 w-8 h-8 bg-white/4 rounded-full"></div>
      <div className="absolute top-1/2 right-4 w-4 h-4 bg-white/5 rounded-full transform -translate-y-1/2"></div>
      <div className="absolute bottom-6 right-1/3 w-6 h-6 bg-white/3 rounded-full"></div>

      {/* Header */}
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
            Dua
          </h1>
          <p className="text-white/80 text-xs font-light font-montserrat">
            {currentDua.category}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium font-montserrat">
              {currentDuaIndex + 1}
            </span>
          </div>
          <MessageCircle className="w-5 h-5 text-white/80 fill-white/20" />
        </div>
      </div>

      {/* Main Arabic Text */}
      <div className="text-center relative z-10 my-4">
        <div className="text-white text-3xl font-bold leading-relaxed mb-2">
          {currentDua.arabic}
        </div>
        <p className="text-white/90 text-sm font-medium font-montserrat">
          {currentDua.transliteration}
        </p>
      </div>

      {/* Footer */}
      <div className="text-center relative z-10">
        <p className="text-white/70 text-xs italic font-montserrat">
          "{currentDua.meaning}"
        </p>
        <div className="mt-3 flex justify-center">
          <div className="flex space-x-1">
            {duaList.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentDuaIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dua;
