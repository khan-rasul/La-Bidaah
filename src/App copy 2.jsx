import Dhikr from "./components/Dhikr";
import Dua from "./components/Dua";
import Durood from "./components/Durood";
import Hadith from "./components/Hadith";
import Header from "./components/Header";
import PrayerTime from "./components/PrayerTime";
import Tagline from "./components/Tagline";
import Verse from "./components/Verse";

const App = () => {
  return (
    <div className="h-screen w-full text-white min-w-lg bg-gradient-to-br from-amber-400/8 from-5% via-neutral-800 via-25% to-neutral-800 overflow-y-auto">
      <div className="p-4"></div>
      <Header />
      <div className="px-6 space-y-4 flex flex-col items-center">
        <div className="flex space-x-4 justify-between">
          <Dhikr />
          <Durood />
        </div>
        <div className="flex space-x-4 justify-between ">
          <Dua />
          <Tagline />
        </div>
      </div>
      <PrayerTime />
      <Verse />
      <Hadith />
    </div>
  );
};

export default App;
