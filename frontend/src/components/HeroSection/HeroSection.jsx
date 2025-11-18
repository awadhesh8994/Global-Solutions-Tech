import { useEffect, useState } from "react";
import slides from "./heroData";

export default function HeroSection() {
  const [active, setActive] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.img}
          alt={slide.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slides[active].title}
          </h1>

          <p className="text-xl md:text-2xl opacity-90">
            {slides[active].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-16 flex-wrap">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActive(idx)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    active === idx
                      ? "bg-blue-600 text-white"
                      :""
                  }
                `}
              >
                {slide.tag}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
