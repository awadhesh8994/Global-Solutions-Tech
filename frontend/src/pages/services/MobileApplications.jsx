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
          Mobile Applications
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl text-center mx-auto">
          At Global Solutions, we don't just build mobile applications; we craft
          digital experiences that captivate, inspire, and transform. Step into
          a world where creativity meets technology, and your mobile dreams
          become reality.
        </p>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-[1400px] h-[600px] overflow-hidden items-center mx-auto">
        <img
          src="https://www.tanishasystems.com/assets/img/mobile-applications.jpg"
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
              Unleash Your Potential with Global Solutions
            </h2>

            <div className="space-y-6 mb-12">
              {/* Imagine*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Imagine
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Close your eyes and envision the possibilities. What if your
                  business had a mobile app that could seamlessly connect you
                  with your customers, empower your employees, and propel your
                  brand to new heights? At Global Solutions, we turn your wildest
                  dreams into digital masterpieces.
                </p>
              </div>

              {/* Innovate*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Innovate
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In a world where innovation is the currency of success, we are
                  your trusted partner in mobile app development. Our team of
                  visionary designers, developers, and strategists works
                  tirelessly to push the boundaries of what's possible,
                  exploring new technologies and techniques to bring your ideas
                  to life.
                </p>
              </div>

              {/* Inspire */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Inspire
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your mobile app isn't just a piece of software; it's a
                  reflection of your brand's personality and values. That's why
                  we take a human-centered approach to design, crafting
                  experiences that inspire and delight users at every
                  touchpoint. From stunning visuals to intuitive interfaces, we
                  ensure that your app stands out from the crowd and leaves a
                  lasting impression.
                </p>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Elevate Your Business with Our Mobile Solutions
              </h2>

              {/* Immersive Experiences*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Immersive Experiences
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dive into the world of augmented reality, virtual reality, and
                  mixed reality with our immersive mobile experiences. From
                  interactive product demos to virtual tours, we create
                  captivating experiences that engage and delight users like
                  never before.
                </p>
              </div>
              {/*Gamification */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Gamification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Turn everyday tasks into exciting adventures with gamified
                  mobile apps. Whether you're looking to boost employee
                  productivity, incentivize customer loyalty, or educate and
                  entertain your audience, our gamification experts have you
                  covered.
                </p>
              </div>
              {/* Emerging Technologies*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Emerging Technologies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stay ahead of the curve with our cutting-edge mobile solutions
                  powered by emerging technologies such as artificial
                  intelligence, blockchain, and the Internet of Things. From
                  smart assistants to predictive analytics, we harness the power
                  of technology to drive innovation and transform industries.
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
                      Visionary Leadership
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our leadership team brings decades of combined experience
                      in mobile app development and digital innovation, guiding
                      our team to new heights of creativity and excellence.
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
                      Creative Collaboration
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We believe in the power of collaboration, working closely
                      with our clients to turn their visions into reality and
                      bring their ideas to life in ways they never thought
                      possible.
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
                      Lasting Impact
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      At Global Solutions, we don't just build mobile apps; we
                      build legacies. We measure our success not by the number
                      of downloads or five-star reviews but by the lasting
                      impact our solutions have on our clients and their
                      customers.
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
