import React from "react";

const services = [
  {
    title: "AI",
    img: "https://www.tanishasystems.com/assets/img/ai-generated-8531013_1280.jpg",
    link: "/ai",
  },
  {
    title: "Consulting",
    img: "https://www.tanishasystems.com/assets/img/businessman-4661727_1280.jpg",
    link: "/consulting",
  },
  {
    title: "SaaS",
    img: "https://www.tanishasystems.com/assets/img/saas.jpeg",
    link: "/saas",
  },
  {
    title: "Internet of Things",
    img: "https://www.tanishasystems.com/assets/img/internet-of-things-7107054_1280.jpg",
    link: "/iot",
  },
  {
    title: "Cyber Security",
    img: "https://www.tanishasystems.com/assets/img/cyber-security-1805632_1280.png",
    link: "/cyber-security",
  },
  {
    title: "Cloud Solutions",
    img: "https://www.tanishasystems.com/assets/img/cloud-computing-2001090_1280.jpg",
    link: "/cloud-solution",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-px w-16 bg-[#1d4f8b]"></div>
        <h2 className="text-4xl font-bold text-[#1d4f8b] mx-4">Services</h2>
        <div className="h-px w-16  bg-[#1d4f8b]"></div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-md">
        Tanisha Systems empowers businesses to update their technology, rethink
        their processes, and revolutionize customer experiences, enabling them
        to stay competitive in an ever-evolving marketplace.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="group block relative overflow-hidden rounded-md shadow-lg"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Bottom slide-up overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-white py-3 px-4 
                            translate-y-full group-hover:translate-y-0 
                            transition-all duration-500 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
