import React from "react";

const Tagline = () => (
  <div className="flex flex-col justify-center p-8 w-full h-full relative items-center">
    {/* Subtle decorative elements */}
    <div className="absolute top-4 right-4 w-6 h-6 bg-stone-300/20 rounded-full"></div>
    <div className="absolute bottom-8 left-2 w-4 h-4 bg-stone-400/15 rounded-full"></div>
    <div className="absolute top-2/3 right-7 w-16 h-16 bg-stone-500/10 rounded-full transform -translate-y-1/2"></div>

    {/* Subtle right border accent */}
    <div className="absolute right-3 top-1/2 w-1 h-16 bg-gradient-to-b from-matte-gold to-matte-gold-600/20 rounded-full transform -translate-y-1/2"></div>

    <div className="relative z-10">
      <h1 className="text-sm font-light mb-2 tracking-wide font-montserrat">
        Truth needs no Innovation
      </h1>
      <h2 className="text-3xl font-semibold mb-1 font-quicksand text-matte-gold">
        Lā Bida'ah
      </h2>
    </div>
  </div>
);

export default Tagline;
