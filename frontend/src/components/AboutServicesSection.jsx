
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
      desc: "Elevate your social networking experience with Global Solutions Tech! Unlock the power of social networking to foster connections, drive collaboration, and boost your business growth with our innovative solutions.",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SECTION */}
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[2px] bg-blue-900"></div>
            <span className="text-lg font-semibold text-blue-900 tracking-wide">About Us</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We are leading provider of custom application and end-to-end IT service.
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Founded in 2002, Global Solutions Tech is a leading IT service company committed to
            delivering innovative and customized solutions to help businesses thrive in a
            rapidly evolving digital landscape. With our extensive industry expertise,
            technical knowledge, and client-centric approach, we empower organizations to
            optimize their technology infrastructure, streamline business processes, and
            achieve their strategic objectives.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-blue-900 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Our Mission</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to transform businesses by leveraging cutting-edge technology,
              fostering innovation, and delivering exceptional value through our comprehensive
              range of IT services. We are dedicated to helping our clients stay ahead of the
              competition, drive operational efficiency, and achieve sustainable growth in
              today's digital economy.
            </p>
          </div>

          <button className="group w-fit bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-2">
            Read More
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* RIGHT SECTION – CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-200 group-hover:border-blue-500 transition-colors duration-300 rounded-br-lg"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutServicesSection;