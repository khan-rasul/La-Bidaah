import React from "react";

const Tagline = () => (
  <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 w-full h-full relative overflow-hidden">
    {/* Responsive decorative elements */}
    <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 xl:top-6 2xl:top-8 right-2 sm:right-3 md:right-4 lg:right-5 xl:right-6 2xl:right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-stone-300/20 rounded-full"></div>
    <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 2xl:bottom-10 left-1 sm:left-1.5 md:left-2 lg:left-2.5 xl:left-3 2xl:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-stone-400/15 rounded-full"></div>
    <div className="absolute top-2/3 right-3 sm:right-4 md:right-5 lg:right-6 xl:right-7 2xl:right-9 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-stone-500/10 rounded-full transform -translate-y-1/2"></div>

    {/* Responsive right border accent */}
    <div className="absolute right-1.5 sm:right-2 md:right-2.5 lg:right-3 xl:right-3.5 2xl:right-4 top-1/2 w-0.5 sm:w-0.5 md:w-1 lg:w-1 xl:w-1.5 2xl:w-2 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20 bg-gradient-to-b from-matte-gold to-matte-gold-600/20 rounded-full transform -translate-y-1/2"></div>

    {/* Content Container - Centered with left-aligned text */}
    <div className="flex items-center justify-center h-full relative z-10">
      <div className="text-left max-w-full">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 xl:mb-3 2xl:mb-4 tracking-wide font-montserrat text-white/90">
          Truth needs no Innovation
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-quicksand text-matte-gold leading-tight">
          Lā Bida'ah
        </h2>
      </div>
    </div>
  </div>
);

export default Tagline;
