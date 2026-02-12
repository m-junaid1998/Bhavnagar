// import React, { useMemo, useState } from "react";

// const Carousels: React.FC = () => {
//   const images = useMemo(
//     () =>
//       Array.from({ length: 5 }, (_, i) => ({
//         id: i,
//         url: `https://picsum.photos/1600/700?random=${i + 1}`,
//       })),
//     [],
//   );

//   const [index, setIndex] = useState<number>(0);

//   const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

//   const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

//   return (
//     <div className="relative w-full">
//       <div className="relative h-[320px] md:h-[500px] lg:h-[650px] overflow-hidden ">
//         <img
//           src={images[index].url}
//           className="w-full h-full object-cover"
//           alt="carousel"
//         />
//       </div>
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === index ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//       <button
//         onClick={prev}
//         className="absolute top-0 left-0 h-full px-6 text-white text-3xl"
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className="absolute top-0 right-0 h-full px-6 text-white text-3xl"
//       >
//         ›
//       </button>
//     </div>
//   );
// };

// export default Carousels;


import React, { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousels: React.FC = () => {
  const images = useMemo(
    () => [
      { id: 1, url: "https://picsum.photos/1600/600?random=1" },
      { id: 2, url: "https://picsum.photos/1600/600?random=2" },
      { id: 3, url: "https://picsum.photos/1600/600?random=3" },
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
      
      {/* 1. Image Wrapper */}
      <div className="relative w-full h-[220px] md:h-[450px] lg:h-[550px]">
        <img
          src={images[index].url}
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>


      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none mb-[-70px]">
        
      
        <button 
          onClick={prev}
          className="pointer-events-auto bg-transparent active:bg-emerald-500 p-2 md:p-3 rounded-full text-white transition-all duration-150 opacity-0 group-hover:opacity-100 outline-none"
        >
      
          <ChevronLeft className={`w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] active:drop-shadow-none`} />
        </button>

     
        <button 
          onClick={next}
          className="pointer-events-auto bg-transparent active:bg-emerald-500 p-2 md:p-3 rounded-full text-white transition-all duration-150 opacity-0 group-hover:opacity-100 outline-none"
        >
          <ChevronRight className={`w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] active:drop-shadow-none`} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            className={`transition-all duration-300 rounded-full ${
              i === index ? "w-6 md:w-10 h-1 md:h-1.5 bg-emerald-500" : "w-1.5 h-1 md:h-1.5 bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;