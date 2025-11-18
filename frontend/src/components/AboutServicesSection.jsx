import React from "react";

const AboutServicesSection = () => {
  const services = [
    {
      title: "Onsite & Offshore Development",
      desc: "We provide customized Onsite & Offshore Development solutions designed to provide you with the right mix of local expertise and offshore resources to drive innovation, efficiency, and growth.",
      icon: "🏢",
    },
    {
      title: "Mobile Application Development",
      desc: "Looking to expand your reach and enhance customer engagement? We offer innovative and tailored mobile application development solutions to meet your unique business needs.",
      icon: "📱",
    },
    {
      title: "Custom Application Development",
      desc: "Looking to modernize your technology and streamline your business processes? We offer innovative and tailored custom application development solutions to meet your unique business needs.",
      icon: "🛠️",
    },
    {
      title: "Social Networking",
      desc: "Elevate your social networking experience with Tanisha Systems! Unlock the power of social networking to foster connections, drive collaboration, and boost your business growth with our innovative solutions.",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT SECTION */}
        <div className="flex flex-col space-y-6">
          <span className="text-xl font-medium  text-[#1B3C73]">About Us</span>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3C73] leading-tight">
            We are leading provider of custom application and end-to-end IT service.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Founded in 2002, Tanisha Systems is a leading IT service company committed to
            delivering innovative and customized solutions to help businesses thrive in a
            rapidly evolving digital landscape. With our extensive industry expertise,
            technical knowledge, and client-centric approach, we empower organizations to
            optimize their technology infrastructure, streamline business processes, and
            achieve their strategic objectives.
          </p>

          <div>
            <span className="text-xl font-medium text-[#1B3C73]">Our mission</span>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Our mission is to transform businesses by leveraging cutting-edge technology,
              fostering innovation, and delivering exceptional value through our comprehensive
              range of IT services. We are dedicated to helping our clients stay ahead of the
              competition, drive operational efficiency, and achieve sustainable growth in
              today’s digital economy.
            </p>
          </div>

          <button className="w-fit bg-[#1B3C73] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#16325F] transition">
            Read More →
          </button>
        </div>

        {/* RIGHT SECTION – CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg shadow-gray-400 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5EDEE] text-2xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#1B3C73] mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutServicesSection;
