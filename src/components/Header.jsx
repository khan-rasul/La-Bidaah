import { Languages, User, MapPin, Clock } from "lucide-react";

const Header = () => (
  <div className="bg-gradient-to-r from-slate-600/30 to-slate-700/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 relative overflow-hidden">
    {/* Responsive background decoration */}
    <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-white/5 rounded-full -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-4 xl:-translate-y-4 2xl:-translate-y-5 translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-4 xl:translate-x-4 2xl:translate-x-5"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 bg-white/3 rounded-full translate-y-1 sm:translate-y-1.5 md:translate-y-2 lg:translate-y-2 xl:translate-y-2 2xl:translate-y-3 -translate-x-1 sm:-translate-x-1.5 md:-translate-x-2 lg:-translate-x-2 xl:-translate-x-2 2xl:-translate-x-3"></div>
    <div className="absolute top-1/2 right-1/4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 bg-white/4 rounded-full transform -translate-y-1/2"></div>

    <div className="flex justify-between items-center relative z-10">
      {/* Current Prayer Info */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 bg-matte-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-matte-gold/30">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-matte-gold drop-shadow-md" />
        </div>

        <div className="flex flex-col">
          <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-quicksand drop-shadow-md">
            Asr - 4:45pm
          </div>
          <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
            <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-white/70" />
            <div className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-light font-montserrat drop-shadow-sm">
              Makkah, Saudi Arabia
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-4">
        <div className="bg-white/15 backdrop-blur-md rounded-full p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Languages className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white/90 drop-shadow-md" />
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-full p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
          <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white/90 drop-shadow-md" />
        </div>
      </div>
    </div>

    {/* Responsive decorative line */}
    <div className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 md:left-5 md:right-5 lg:left-6 lg:right-6 xl:left-7 xl:right-7 2xl:left-8 2xl:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </div>
);

export default Header;
