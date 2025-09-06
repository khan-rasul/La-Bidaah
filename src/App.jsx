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
    <div className="px-6 py-6 h-screen w-full max-w-full text-white min-w-fit bg-gradient-to-br from-amber-400/8 from-5% via-neutral-800 via-25% to-neutral-800 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col space-y-6">
        <Header />
        <div className="flex space-x-6 justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
          <div className="flex-8">
            <Dhikr />
          </div>
          <div className="flex-10">
            <Durood />
          </div>
        </div>
        <div className="flex space-x-6 justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
          <div className="flex-2">
            <Dua />
          </div>
          <div className="flex-1">
            <Tagline />
          </div>
        </div>
        <PrayerTime />
        <Verse />
        <Hadith />
      </div>
    </div>
  );
};

export default App;
