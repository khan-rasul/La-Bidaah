import { Clock } from "lucide-react";
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

  const backgroundImage =
    "https://images.pexels.com/photos/33759665/pexels-photo-33759665.jpeg?_gl=1*lcmmth*_ga*MzcyMzEyMjQ1LjE3NTcwMjMyMTM.*_ga_8JE65Q40S6*czE3NTcwMjMyMTMkbzEkZzEkdDE3NTcwMjMyMzgkajM1JGwwJGgw";

  const nextPrayer = prayerTimes.find((prayer) => prayer.next);
  return (
    <div
      className="p-6 relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg hover:shadow-xl hover:scale-101 transition-all duration-300 ease-out"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/33759665/pexels-photo-33759665.jpeg?_gl=1*lcmmth*_ga*MzcyMzEyMjQ1LjE3NTcwMjMyMTM.*_ga_8JE65Q40S6*czE3NTcwMjMyMTMkbzEkZzEkdDE3NTcwMjMyMzgkajM1JGwwJGgw')`,
        borderColor: "#A17C28",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent/10 via-black/40 to-black/90"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm mb-1 drop-shadow-md">Makkah</h3>
            <p className="text-lg font-medium drop-shadow-md">
              Let me praise prayer
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-5xl font-bold mb-2 drop-shadow-lg">00:37:05</div>
          <p className="text-sm drop-shadow-sm">
            Time until {nextPrayer?.name}
          </p>
        </div>

        {/* Prayer Times Row */}
        <div className="flex justify-between items-center">
          {prayerTimes.map((prayer) => (
            <div key={prayer.name} className="text-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-1 border backdrop-blur-sm"
                style={{
                  backgroundColor: prayer.next
                    ? "rgba(161, 124, 40, 0.9)"
                    : "rgba(88, 88, 88, 0.8)",
                  borderColor: prayer.next ? "#D4B65A" : "#B0B0B0",
                  color: prayer.next ? "#F5F3F0" : "#B0B0B0",
                }}
              >
                <Clock className="w-4 h-4" />
              </div>
              <p
                className="text-xs drop-shadow-sm"
                style={{ color: "#E0E0E0" }}
              >
                {prayer.name}
              </p>
              <p
                className="text-xs font-medium drop-shadow-sm"
                style={{ color: prayer.next ? "#D4B65A" : "#F5F3F0" }}
              >
                {prayer.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrayerTime;
