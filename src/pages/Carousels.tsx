import React, { useMemo, useState } from "react";

const Carousels: React.FC = () => {
  const images = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        url: `https://picsum.photos/1600/700?random=${i + 1}`,
      })),
    [],
  );

  const [index, setIndex] = useState<number>(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full">
      <div className="relative h-[420px] md:h-[600px] lg:h-[720px] overflow-hidden rounded-xl">
        <img
          src={images[index].url}
          className="w-full h-full object-cover"
          alt="carousel"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute top-0 left-0 h-full px-6 text-white text-3xl"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute top-0 right-0 h-full px-6 text-white text-3xl"
      >
        ›
      </button>
    </div>
  );
};

export default Carousels;
