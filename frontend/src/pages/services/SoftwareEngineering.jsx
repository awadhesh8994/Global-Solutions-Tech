import { Link, useLocation } from "react-router-dom";
import ContactBar from "../../components/ContactBar";

export default function Consulting() {
  const location = useLocation();

  const services = [
    { name: "Cloud Solution", path: "/services/cloud-solution" },
    { name: "Software Engineering", path: "/services/software-engineering" },
    { name: "Consulting", path: "/services/consulting" },
    { name: "Mobile Applications", path: "/services/mobile-applications" },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-8 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
          Software Engineering
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl text-center mx-auto">
          Welcome to Global Solutions, where innovation meets precision in
          software engineering. We are dedicated to delivering high-quality,
          scalable, and robust software solutions that drive your business
          forward. With a team of seasoned engineers and cutting-edge
          technologies, we turn your vision into reality.
        </p>
      </div>

      {/* FULL WIDTH RESPONSIVE HERO IMAGE */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[600px]">
          <img
            src="https://www.tanishasystems.com/assets/img/software-engineering.jpg"
            alt="Software Engineering"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 xl:gap-16">
          {/* LEFT SIDE - MAIN CONTENT */}
          <div className="order-2 lg:order-1">
            {/* Our Solutions */}
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8">
              Our Software Engineering Services
            </h2>

            <div className="space-y-8 mb-12">
              {/* Custom Software Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                  Custom Software Development
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Tailored to your unique business needs, our custom software
                  development services span the entire development lifecycle. We
                  build software solutions that are scalable, secure, and
                  designed to give you a competitive edge.{" "}
                </p>
              </div>

              {/* Enterprise Application Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                  Enterprise Application Development
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Streamline your operations and boost productivity with our
                  enterprise application development services. We create
                  powerful, user-friendly applications that integrate seamlessly
                  with your existing systems and processes.
                </p>
              </div>

              {/* Web and Mobile App Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                  Web and Mobile App Development
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Reach your audience wherever they are with our web and mobile
                  app development services. From responsive web applications to
                  native and cross-platform mobile apps, we deliver solutions
                  that offer a seamless user experience.
                </p>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                  Cloud Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Embrace the power of the cloud with our comprehensive cloud
                  solutions. We help you leverage cloud technologies to improve
                  scalability, enhance security, and reduce costs, whether
                  you're looking to migrate existing applications or develop new
                  cloud-native solutions
                </p>
              </div>
            </div>

            {/* Why Choose Global Solutions */}
            <div className="mb-12 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-900 pb-3">
                Why Choose Global Solutions?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Technical Expertise",
                    desc: "Our team of skilled software engineers brings extensive experience and technical know-how to every project, ensuring the highest standards of quality and performance.",
                  },
                  {
                    title: "Innovation",
                    desc: "We stay at the forefront of technology trends and innovations, continuously exploring new tools and methodologies to deliver cutting-edge solutions.",
                  },
                  {
                    title: "Collaboration",
                    desc: "We believe in a collaborative approach, working closely with you to understand your business challenges and objectives, and delivering solutions that are perfectly aligned with your goals.",
                  },
                  {
                    title: "Reliability",
                    desc: "Our commitment to excellence means you can trust us to deliver reliable, scalable, and secure software solutions that drive your business success.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <aside className="order-1 lg:order-2 space-y-8">
            {/* Services List - Always visible */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-5 py-4">
                <h3 className="font-semibold text-lg">Our Services</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {services.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-5 py-4 hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base ${
                        location.pathname === item.path
                          ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-900"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Have a Question? Box - Hidden on mobile & tablet, visible only on lg+ */}
            <div className="hidden lg:block bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Have a Question?</h3>
              <p className="text-blue-100 text-sm mb-5">
                Feel free to reach out to us
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-blue-100 text-sm mb-2">Call Us</p>
                  <a
                    href="tel:+15617642272"
                    className="text-lg sm:text-xl font-bold block hover:text-blue-200 transition"
                  >
                    +1 (561) 764-2272
                  </a>
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-2">Email Us</p>
                  <a
                    href="mailto:info@globalsolutions.com"
                    className="text-sm sm:text-base hover:underline break-all"
                  >
                    info@globalsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Contact Bar - Always visible (especially on mobile) */}
      <ContactBar />
    </div>
  );
}
