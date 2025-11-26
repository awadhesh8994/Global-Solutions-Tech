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

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Background Slides with Zoom Effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1500 ease-out ${
            active === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>
      ))}

      {/* Main Content - Safe from Navbar */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 pt-20 md:pt-24 lg:pb-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Grid: Text Left, Nav Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            {/* Left: Hero Text */}
            <div className="space-y-5 sm:space-y-7 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {slides[active].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl opacity-95">
                {slides[active].subtitle}
              </p>
            </div>

            {/* Right: Slide Navigation */}
            <div className="flex flex-col gap-1 sm:gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActive(idx)}
                  className="group relative p-3 sm:p-4 text-left transition-all duration-500 hover:scale-105"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {/* Card Background */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 border ${
                      active === idx
                        ? "bg-white/20 backdrop-blur-lg border-white/40 shadow-2xl shadow-cyan-500/20"
                        : "bg-white/5 backdrop-blur-sm border-white/10 group-hover:bg-white/10 group-hover:border-white/30"
                    }`}
                  ></div>

                  {/* Active Indicator Bar */}
                  {active === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-r-full"></div>
                  )}

                  {/* Content */}
                  <div className="relative">
                    <span
                      className={`block text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 transition-colors ${
                        active === idx
                          ? "text-cyan-400"
                          : "text-gray-500 group-hover:text-cyan-400"
                      }`}
                    >
                      {slide.tag}
                    </span>
                    <p
                      className={`text-sm sm:text-base font-medium transition-colors ${
                        active === idx
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-100"
                      }`}
                    >
                      {slide.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-10 sm:mt-14 flex gap-3 justify-start">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 max-w-32 bg-white/10 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full rounded-full transition-all ease-linear ${
                    active === idx
                      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                      : "bg-transparent"
                  }`}
                  style={{
                    width: active === idx ? "100%" : "0%",
                    transitionDuration: active === idx ? "6000ms" : "300ms",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}