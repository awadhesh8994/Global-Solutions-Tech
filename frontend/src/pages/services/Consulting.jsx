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
          Consulting
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl text-center mx-auto">
          As a service provider, Global Solutions offers a wide array of
          consulting services tailored to meet the needs of their clients.
          Here's an overview of the content that might be associated with
          Global Solutions as a consulting service provider
        </p>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="https://www.tanishasystems.com/assets/img/consulting.jpg"
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
              {/* IT Consulting Services */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  IT Consulting Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Global Solutions provides comprehensive IT consulting services
                  to help businesses align their technology strategies with
                  their overall objectives. This may include IT infrastructure
                  assessment, digital transformation strategies, cloud computing
                  solutions, cybersecurity consulting, and more.
                </p>
              </div>

              {/* Staff Augmentation */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Staff Augmentation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Global Solutions may offer staff augmentation services to help
                  businesses scale their teams quickly and efficiently. This
                  could involve providing skilled IT professionals on a contract
                  basis to supplement existing teams or fill skill gaps for
                  specific projects.
                </p>
              </div>

              {/* Custom Software Development */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Custom Software Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Global Solutions may specialize in custom software development,
                  creating tailored solutions to address specific business
                  challenges. This could include developing enterprise
                  applications, mobile apps, web portals, and more, designed to
                  enhance efficiency, productivity, and competitiveness.
                </p>
              </div>

              {/* Quality Assurance and Testing*/}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Quality Assurance and Testing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ensuring the reliability and performance of software
                  applications is crucial for businesses. Global Solutions may
                  offer quality assurance and testing services to help clients
                  identify and resolve issues before deployment, ensuring a
                  seamless user experience.
                </p>
              </div>
              {/*Data Analytics and Business Intelligence  */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Data Analytics and Business Intelligence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Global Solutions may assist businesses in harnessing the power
                  of data through advanced analytics and business intelligence
                  solutions. This could involve data visualization, predictive
                  analytics, data mining, and other techniques to uncover
                  valuable insights and drive informed decision-making.
                </p>
              </div>
              {/* Project Management */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Project Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Effective project management is essential for the successful
                  execution of IT initiatives. Global Solutions may provide
                  project management services to help clients plan, execute, and
                  monitor projects, ensuring they are delivered on time, within
                  budget, and according to specifications.
                </p>
              </div>
              {/* Training and Support */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Training and Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Global Solutions may offer training and support services to
                  empower clients to maximize the value of their IT investments.
                  This could include end-user training, technical support, and
                  ongoing maintenance to ensure systems operate smoothly and
                  efficiently.
                </p>
              </div>
              {/* Industry Expertise */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Industry Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Depending on their areas of specialization, Global Solutions
                  may offer industry-specific consulting services tailored to
                  the unique needs and challenges of particular sectors such as
                  healthcare, finance, manufacturing, or retail.
                </p>
              </div>
            </div>

            {/* Why Choose Global Solutions */}
            <div className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md ">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 pb-2">
              Why Choose Global Solutions?
            </h2>

            <div className="space-y-5" >
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
                    Experienced Team
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our consultants bring years of experience and industry
                    expertise to every project, ensuring you receive the highest
                    level of service and support.
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
                    Customized Solutions
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We understand that every business is unique, which is why we
                    take a personalized approach to consulting. Our solutions
                    are tailored to meet your specific needs and objectives.
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
                    Proven Results
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We have a track record of delivering tangible results for
                    our clients, from cost savings to revenue growth. When you
                    partner with Global Solutions, you can trust that you're in
                    good hands.
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
