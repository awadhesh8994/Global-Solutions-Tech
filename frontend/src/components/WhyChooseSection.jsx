import {
  BarChart3,
  Briefcase,
  CalendarCheck,
  CheckCircle,
  ClipboardList,
  Sun,
} from "lucide-react";

const items = [
  {
    title: "Expertise and Experience",
    desc: "Our team of skilled professionals has extensive experience and expertise in various technologies and industries, ensuring the delivery of high-quality and reliable IT solutions.",
    icon: Briefcase,
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize our clients' needs and objectives, and collaborate closely with them to develop customized solutions that align with their business goals and drive measurable results.",
    icon: ClipboardList,
  },
  {
    title: "Innovation and Technology Leadership",
    desc: "We are committed to staying at the forefront of technological advancements and continuously innovating our services to help our clients adapt to new challenges and opportunities in the digital landscape.",
    icon: BarChart3,
  },
  {
    title: "Quality and Reliability",
    desc: "We are dedicated to delivering high-quality and reliable IT services, maintaining the highest standards of excellence, and ensuring customer satisfaction.",
    icon: CheckCircle,
  },
  {
    title: "Training",
    desc: "We believe in imparting modern and best in class training to both aspiring graduates and talented professionals to keep them abreast with changing needs of the competitive market place.",
    icon: Sun,
  },
  {
    title: "Proven Track Record",
    desc: "With a strong history of successful IT projects and happy clients, Global Solutions Tech is recognized as a trusted IT service provider. Our client success stories and case studies showcase our expertise in delivering high-quality, innovative IT solutions that foster business growth and success.",
    icon: CalendarCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-900"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Global Solutions Tech
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-900"></div>
          </div>

          {/* Sub Heading */}
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            We prioritize your objectives and challenges to drive tangible
            results and foster business growth. <br />
            Trust in our innovative and reliable IT services to transform your
            business in the digital era.
          </p>
        </div>

        {/* Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-cyan-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-900 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
