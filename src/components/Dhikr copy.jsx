import { Heart, Plus } from "lucide-react";
import { useState } from "react";

const Dhikr = () => {
  const [dhikrCount, setDhikrCount] = useState(0);
  const dhikrList = [
    "سُبْحَانَ اللَّهِ",
    "الْحَمْدُ لِلَّهِ",
    "اللَّهُ أَكْبَرُ",
    "لَا إِلَهَ إِلَّا اللَّهُ",
  ];
  return (
    <div
      className="bg-gradient-to-r from-panthera-green to-panthera-green/30 rounded-2xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 ease-out p-6 w-80 h-48 flex flex-col"
      onClick={() => setDhikrCount(dhikrCount + 1)}
    >
      <div className="flex flex-1 justify-between items-center mb-2">
        <p className="text-xs font-light font-montserrat">
          Remembrance of Allah
        </p>
        <Plus className="w-5 h-5" />
      </div>
      <div className="flex-3 text-center text-2xl font-cairo font-semibold pt-2">
        {dhikrList[dhikrCount % dhikrList.length]}
      </div>
      <p className="flex-1 text-center font-cairo font-light">Subhan'allah</p>
      <div className="flex flex-2 justify-between items-center">
        <h1 className="font-quicksand font-medium text-3xl">Dhikr</h1>
        <div className="text-2xl font-montserrat font-light">{dhikrCount}</div>
      </div>
    </div>
  );
};

export default Dhikr;
