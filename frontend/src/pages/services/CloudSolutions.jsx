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
          Cloud Solution
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl text-center mx-auto">
          Welcome to Global Solutions: Empowering Your Business with Innovative
          Cloud Solutions.
        </p>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-[1400px] h-[600px] overflow-hidden items-center mx-auto">
        <img
          src="https://www.tanishasystems.com/assets/img/cloud-solution.jpg"
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
              Our Solutions
            </h2>

            <div className="space-y-6 mb-12">
              {/* Cloud Migration Services*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cloud Migration Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Seamlessly transition your applications, data, and
                  infrastructure to the cloud with our expert migration
                  services. Our proven methodologies ensure a smooth and
                  efficient migration process, minimizing risks and disruptions
                </p>
              </div>

              {/* Cloud Infrastructure Management*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cloud Infrastructure Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Maximize the performance, availability, and security of your
                  cloud infrastructure with our comprehensive management
                  solutions. From provisioning and optimization to monitoring
                  and security enhancements, we've got you covered.
                </p>
              </div>

              {/* Cloud Application Development*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cloud Application Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage the power of cloud-native architectures and modern
                  development frameworks with our end-to-end application
                  development services. Whether you need scalable web
                  applications, microservices-based architectures, or
                  containerized solutions, our experienced team delivers
                  innovative and high-performing applications to drive your
                  business forward.
                </p>
              </div>

              {/*Cloud Security Solutions*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cloud Security Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Protect your data, applications, and infrastructure from
                  evolving threats with our robust security solutions. From
                  identity and access management to encryption and threat
                  detection, we implement multi-layered security controls to
                  safeguard your assets and ensure regulatory compliance.
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
                      Expertise
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of experienced professionals brings deep
                      expertise in cloud technologies and best practices to
                      every project.
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
                      We stay ahead of the curve with the latest advancements in
                      cloud computing, AI, and automation to deliver innovative
                      solutions that drive business value.
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
                      Customer-Centric Approach
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We prioritize customer satisfaction, collaborating closely
                      with our clients to understand their unique challenges and
                      deliver tailored solutions that meet their specific needs.
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
                      With a track record of success and a commitment to
                      excellence, you can trust Global Solutions to deliver
                      reliable, high-quality cloud solutions that exceed your
                      expectations.{" "}
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
