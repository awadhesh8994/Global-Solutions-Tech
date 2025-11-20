import { useEffect, useState } from "react";

const slides = [
  {
    id: 0,
    tag: "AI Revamp",
    title: "Unlocking the Future",
    subtitle: "AI & Data Science Solutions for Tomorrow's Challenges.",
    img: "https://www.tanishasystems.com/assets/img/iStock-1367728606.jpg",
  },
  {
    id: 1,
    tag: "Cyber Space",
    title: "Emerging Technologies in Cyber Space",
    subtitle: "Innovations Shaping the Cyber Universe",
    img: "https://www.tanishasystems.com/assets/img/iStock-917236420.jpg",
  },
  {
    id: 2,
    tag: "Future Ready IT",
    title: "Your Gateway to",
    subtitle: "Smart, Secure, and Scalable IT Solutions",
    img: "https://www.tanishasystems.com/assets/img/iStock-1274493951.jpg",
  },
  {
    id: 3,
    tag: "Hire Talent",
    title: "AI-Driven Talent Discovery",
    subtitle: "Find Your Hidden Gems",
    img: "https://www.tanishasystems.com/assets/img/iStock-1277133170.jpg",
  },
];

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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            active === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end pb-24 md:pb-32">
        <div className="w-full px-8 md:px-20 max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                {slides[active].title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                {slides[active].subtitle}
              </p>
            </div>

            {/* Right Side - Navigation */}
            <div className="flex flex-col gap-4 md:items-end">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActive(idx)}
                  className={`group relative px-8 py-4 text-left md:text-right transition-all duration-500 ${
                    active === idx
                      ? "scale-100"
                      : "scale-95 opacity-60 hover:opacity-100 hover:scale-100"
                  }`}
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                      active === idx
                        ? "bg-white/10 backdrop-blur-md border border-white/20"
                        : "bg-white/5 backdrop-blur-sm border border-white/10"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`text-xs font-semibold tracking-wider uppercase mb-1 transition-colors duration-300 ${
                        active === idx
                          ? "text-cyan-400"
                          : "text-gray-400 group-hover:text-cyan-400"
                      }`}
                    >
                      {slide.tag}
                    </div>
                    <div
                      className={`text-sm transition-colors duration-300 ${
                        active === idx
                          ? "text-white"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {slide.title}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {active === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-12 flex gap-2">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="h-0.5 flex-1 bg-white/10 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                    active === idx ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDuration: active === idx ? "5000ms" : "300ms",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
