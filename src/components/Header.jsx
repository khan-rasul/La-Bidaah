import { Languages, User, MapPin, Clock } from "lucide-react";

const Header = () => (
  <div className="bg-gradient-to-r from-slate-600/30 to-slate-700/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out p-6 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-4 translate-x-4"></div>
    <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/3 rounded-full translate-y-2 -translate-x-2"></div>
    <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/4 rounded-full transform -translate-y-1/2"></div>

    <div className="flex justify-between items-center relative z-10">
      {/* Current Prayer Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-matte-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-matte-gold/30">
          <Clock className="w-6 h-6 text-matte-gold drop-shadow-md" />
        </div>

        <div className="flex flex-col">
          <div className="text-white text-lg font-bold font-quicksand drop-shadow-md">
            Asr - 4:45pm
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-white/70" />
            <div className="text-white/80 text-sm font-light font-montserrat drop-shadow-sm">
              Makkah, Saudi Arabia
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <div className="bg-white/15 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Languages className="w-5 h-5 text-white/90 drop-shadow-md" />
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
          <User className="w-5 h-5 text-white/90 drop-shadow-md" />
        </div>
      </div>
    </div>

    {/* Subtle decorative line */}
    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </div>
);

export default Header;
