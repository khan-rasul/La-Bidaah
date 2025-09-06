import {
  Clock,
  MapPin,
  Sunrise,
  Sun,
  CloudSun,
  Sunset,
  Moon,
  Stars,
  ChevronUp,
} from "lucide-react";
import { useState, useEffect } from "react";

const PrayerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample prayer times with appropriate icons
  const prayerTimes = [
    {
      name: "Fajr",
      time: "05:30",
      arabic: "الفجر",
      next: false,
      icon: Sunrise,
    },
    {
      name: "Dhuhr",
      time: "13:15",
      arabic: "الظهر",
      next: false,
      icon: Sun,
    },
    {
      name: "Asr",
      time: "16:45",
      arabic: "العصر",
      next: false,
      icon: CloudSun,
    },
    {
      name: "Maghrib",
      time: "19:20",
      arabic: "المغرب",
      next: true,
      icon: Sunset,
    },
    { name: "Isha", time: "20:50", arabic: "العشاء", next: false, icon: Moon },
  ];

  const nextPrayer = prayerTimes.find((prayer) => prayer.next);

  return (
    <div
      className="rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/33759665/pexels-photo-33759665.jpeg?_gl=1*lcmmth*_ga*MzcyMzEyMjQ1LjE3NTcwMjMyMTM.*_ga_8JE65Q40S6*czE3NTcwMjMyMTMkbzEkZzEkdDE3NTcwMjMyMzgkajM1JGwwJGgw')`,
      }}
    >
      {/* Background overlay for better text readability and design consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-black/90 rounded-3xl"></div>

      {/* Background decoration (subtle since we have background image) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/8 rounded-full -translate-y-8 translate-x-8"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/6 rounded-full transform -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-8 w-8 h-8 bg-white/8 rounded-full"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h1 className="text-white text-xl font-bold mb-1 font-quicksand drop-shadow-lg">
            Prayer Times
          </h1>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-white/90 drop-shadow-md" />
            <p className="text-white/90 text-xs font-light font-montserrat drop-shadow-md">
              Makkah, Saudi Arabia
            </p>
          </div>
        </div>
        <div className=" rounded-full px-3 py-1">
          <Clock className="w-5 h-5 text-white drop-shadow-md" />
        </div>
      </div>

      {/* Next Prayer Countdown */}
      <div className="text-center mb-8 relative z-10">
        <div className="text-white text-4xl font-extrabold leading-relaxed mb-2 font-quicksand drop-shadow-xl">
          00:37:05
        </div>
        <p className="text-white/95 text-sm font-medium font-montserrat drop-shadow-lg">
          Until {nextPrayer?.name} ({nextPrayer?.arabic})
        </p>
        <p className="text-white/80 text-xs italic font-light font-montserrat mt-1 drop-shadow-md">
          "And establish prayer at the prescribed times"
        </p>
      </div>

      {/* Prayer Times Grid */}
      <div className="grid grid-cols-5 gap-4 relative z-10">
        {prayerTimes.map((prayer, index) => {
          const IconComponent = prayer.icon;
          return (
            <div key={prayer.name} className="text-center">
              <div
                className={`flex flex-col items-center justify-end ${
                  prayer.next ? "scale-110 text-white" : "text-off-white/70"
                }`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ">
                  <IconComponent className="w-5 h-5 drop-shadow-md" />
                </div>
                <p className="text-xs font-medium font-montserrat mb-1 drop-shadow-md ">
                  {prayer.name}
                </p>
                <p className="text-xs font-light font-montserrat drop-shadow-sm ">
                  {prayer.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prayer indicators */}
      <div className="mt-6 flex justify-center relative z-10">
        <div className="flex space-x-1">
          {prayerTimes.map((prayer, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 drop-shadow-sm ${
                prayer.next ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerTime;
