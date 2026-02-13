import React, { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. Local Images ko import karein
import banner1 from "../assets/images/banner.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";

const Carousels: React.FC = () => {
  // 2. Images array mein imported variables use karein
  const images = useMemo(
    () => [
      { id: 1, url: banner1 },
      { id: 2, url: banner2 },
      { id: 3, url: banner3 },
      { id: 4, url: banner4 },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full overflow-hidden group">
      
   
      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[450px] lg:h-[580px] transition-all duration-500">
        <img
          key={images[index].id} 
          src={images[index].url}
          className="w-full h-full object-cover animate-fade-in"
          alt={`Banner ${images[index].id}`}
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>


      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
        <button 
          onClick={prev}
          className="pointer-events-auto bg-black/20 hover:bg-emerald-500/80 p-1.5 md:p-3 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 outline-none backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        <button 
          onClick={next}
          className="pointer-events-auto bg-black/20 hover:bg-emerald-500/80 p-1.5 md:p-3 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 outline-none backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Indicators (Dots) - Mobile optimized */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            className={`transition-all duration-500 rounded-full ${
              i === index 
                ? "w-5 md:w-10 h-1 md:h-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" 
                : "w-1.5 h-1 md:h-1.5 bg-white/50 hover:bg-white"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;