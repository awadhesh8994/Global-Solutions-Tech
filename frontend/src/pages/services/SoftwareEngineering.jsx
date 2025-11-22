import { Link, useLocation } from "react-router-dom";

export default function Consulting() {
  const location = useLocation();

  const services = [
    { name: "Cloud Solution", path: "/services/cloud-solution" },
    { name: "Software Engineering", path: "/services/software-engineering" },
    { name: "Consulting", path: "/services/consulting" },
    { name: "Mobile Applications", path: "/services/mobile-applications" },
  ];

  return (
    <div className="w-full bg-white">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
          Software Engineering
        </h1>
        <h3 className="text-lg text-gray-600 max-w-4xl font-bold text-center mx-auto mb-2">
          Transform Your Business with Global Solutions Software Engineering Solutions
          </h3>
        <p className="text-lg text-gray-600 max-w-4xl text-center mx-auto">
          Welcome to Global Solutions, where innovation meets precision in
          software engineering. We are dedicated to delivering high-quality,
          scalable, and robust software solutions that drive your business
          forward. With a team of seasoned engineers and cutting-edge
          technologies, we turn your vision into reality.
        </p>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-[1400px] h-[600px] overflow-hidden items-center mx-auto">
        <img
          src="https://www.tanishasystems.com/assets/img/software-engineering.jpg"
          alt="Consulting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* LEFT SIDE - MAIN CONTENT */}
          <div>
            {/* Our Solutions */}
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Our Software Engineering Services
            </h2>

            <div className="space-y-6 mb-12">
              {/* Custom Software Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Custom Software Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tailored to your unique business needs, our custom software
                  development services span the entire development lifecycle. We
                  build software solutions that are scalable, secure, and
                  designed to give you a competitive edge.
                </p>
              </div>

              {/* Enterprise Application Development*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Enterprise Application Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Streamline your operations and boost productivity with our
                  enterprise application development services. We create
                  powerful, user-friendly applications that integrate seamlessly
                  with your existing systems and processes.
                </p>
              </div>

              {/* Web and Mobile App Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Web and Mobile App Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Reach your audience wherever they are with our web and mobile
                  app development services. From responsive web applications to
                  native and cross-platform mobile apps, we deliver solutions
                  that offer a seamless user experience.
                </p>
              </div>

              {/*Cloud Solutions*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cloud Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Embrace the power of the cloud with our comprehensive cloud
                  solutions. We help you leverage cloud technologies to improve
                  scalability, enhance security, and reduce costs, whether
                  you're looking to migrate existing applications or develop new
                  cloud-native solutions
                </p>
              </div>
              {/*DevOps and Continuous Integration */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  DevOps and Continuous Integration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Achieve faster delivery and higher quality with our DevOps and
                  continuous integration services. We implement automated
                  workflows and best practices to streamline your development
                  process and ensure your software is always ready for
                  deployment.
                </p>
              </div>
              {/* Software Testing and Quality Assurance */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Software Testing and Quality Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality is at the heart of everything we do. Our rigorous
                  testing and quality assurance processes ensure your software
                  is bug-free, secure, and performs flawlessly under all
                  conditions.
                </p>
              </div>
            </div>

            {/* Why Choose Global Solutions */}
            <div className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md ">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 pb-2">
                Why Choose Global Solutions?
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
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
                      Technical Expertise
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of skilled software engineers brings extensive
                      experience and technical know-how to every project,
                      ensuring the highest standards of quality and performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
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
                      Innovation
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We stay at the forefront of technology trends and
                      innovations, continuously exploring new tools and
                      methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
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
                    <h4 className="font-bold text-gray-900 mb-1 text-md">
                      Collaboration
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We believe in a collaborative approach, working closely
                      with you to understand your business challenges and
                      objectives, and delivering solutions that are perfectly
                      aligned with your goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
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
                    <h4 className="font-bold text-gray-900 mb-1 text-md">
                      Reliability
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our commitment to excellence means you can trust us to
                      deliver reliable, scalable, and secure software solutions
                      that drive your business success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <aside className="lg:relative lg:top-6 h-fit space-y-6">
            {/* Services List */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-5 py-4">
                <h3 className="font-semibold text-lg">Our Services</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {services.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-5 py-4 hover:bg-blue-50 transition-colors duration-200 ${
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

            {/* Have a Question Box */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Have a Question?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Feel free to reach out to us
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-blue-100 text-sm mb-2">Call Us</p>
                  <a
                    href="tel:+15617642272"
                    className="text-xl font-bold block hover:text-blue-200 transition"
                  >
                    +1 (561) 764-2272
                  </a>
                </div>

                <div>
                  <p className="text-blue-100 text-sm mb-2">Email Us</p>
                  <a
                    href="mailto:info@globalsolutions.com"
                    className="text-sm hover:underline break-words"
                  >
                    info@globalsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* Have a Question Box - Horizontal at Bottom */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-2  mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Have a Question?</h3>
              <p className="text-blue-100">Feel free to reach out to us</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-blue-100 text-sm mb-2">Call Us</p>
              <a
                href="tel:+15617642272"
                className="text-xl font-bold block hover:text-blue-200 transition"
              >
                +1 (561) 764-2272
              </a>
            </div>

            <div className="text-center md:text-left">
              <p className="text-blue-100 text-sm mb-2">Email Us</p>
              <a
                href="mailto:info@globalsolutions.com"
                className="hover:underline"
              >
                info@globalsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
