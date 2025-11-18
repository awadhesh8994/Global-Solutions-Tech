import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,  
  });

  const stats = [
    { label: "Clients", value: 232 },
    { label: "Projects", value: 1057 },
    { label: "Hours Of Support", value: 14357 },
    { label: "Workers", value: 1181 },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-cover bg-center py-40"
      style={{
        backgroundImage: `url('https://www.tanishasystems.com/assets/img/stats-bg.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold">
              {inView ? (
                <CountUp end={stat.value} duration={2} />
              ) : (
                "0"
              )}
            </span>
            <span className="mt-2 text-lg md:text-xl">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
