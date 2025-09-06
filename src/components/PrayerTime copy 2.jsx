import { Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const PrayerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample prayer times
  const prayerTimes = [
    { name: "Fajr", time: "05:30", arabic: "الفجر", next: false },
    { name: "Dhuhr", time: "13:15", arabic: "الظهر", next: false },
    { name: "Asr", time: "16:45", arabic: "العصر", next: false },
    { name: "Maghrib", time: "19:20", arabic: "المغرب", next: true },
    { name: "Isha", time: "20:50", arabic: "العشاء", next: false },
  ];

  const nextPrayer = prayerTimes.find((prayer) => prayer.next);

  return (
    <div className="mx-6 mt-6 mb-4">
      <div className="bg-gradient-to-r from-slate-700 to-slate-800/40 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-102 transition-all duration-300 ease-out p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-6 -translate-x-6"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/4 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-8 w-8 h-8 bg-white/6 rounded-full"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <h1 className="text-white text-xl font-bold mb-1 font-quicksand">
              Prayer Times
            </h1>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white/80" />
              <p className="text-white/80 text-xs font-light font-montserrat">
                Makkah, Saudi Arabia
              </p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <Clock className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Next Prayer Countdown */}
        <div className="text-center mb-8 relative z-10">
          <div className="text-white text-4xl font-bold leading-relaxed mb-2 font-quicksand">
            00:37:05
          </div>
          <p className="text-white/90 text-sm font-medium font-montserrat">
            Until {nextPrayer?.name} ({nextPrayer?.arabic})
          </p>
          <p className="text-white/70 text-xs italic font-light font-montserrat mt-1">
            "And establish prayer at the prescribed times"
          </p>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {prayerTimes.map((prayer, index) => (
            <div key={prayer.name} className="text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm transition-all duration-300 ${
                  prayer.next
                    ? "bg-matte-gold/80 border border-matte-gold"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                <Clock
                  className={`w-4 h-4 ${
                    prayer.next ? "text-white" : "text-white/70"
                  }`}
                />
              </div>
              <p
                className={`text-xs font-medium font-montserrat mb-1 ${
                  prayer.next ? "text-white" : "text-white/80"
                }`}
              >
                {prayer.name}
              </p>
              <p
                className={`text-xs font-light font-montserrat ${
                  prayer.next ? "text-matte-gold" : "text-white/70"
                }`}
              >
                {prayer.time}
              </p>
            </div>
          ))}
        </div>

        {/* Prayer indicators */}
        <div className="mt-6 flex justify-center relative z-10">
          <div className="flex space-x-1">
            {prayerTimes.map((prayer, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  prayer.next ? "bg-matte-gold" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTime;
