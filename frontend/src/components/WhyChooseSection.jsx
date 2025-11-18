import React from "react";
import {
  Briefcase,
  ClipboardList,
  BarChart3,
  CheckCircle,
  Sun,
  CalendarCheck,
} from "lucide-react";

const items = [
  {
    title: "Expertise and Experience",
    desc: "Our team of skilled professionals has extensive experience and expertise in various technologies and industries, ensuring the delivery of high-quality and reliable IT solutions.",
    icon: <Briefcase className="w-10 h-10 text-gray-700" />,
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize our clients' needs and objectives, and collaborate closely with them to develop customized solutions that align with their business goals and drive measurable results.",
    icon: <ClipboardList className="w-10 h-10 text-gray-700" />,
  },
  {
    title: "Innovation and Technology Leadership",
    desc: "We are committed to staying at the forefront of technological advancements and continuously innovating our services to help our clients adapt to new challenges and opportunities in the digital landscape.",
    icon: <BarChart3 className="w-10 h-10 text-gray-700" />,
  },
  {
    title: "Quality and Reliability",
    desc: "We are dedicated to delivering high-quality and reliable IT services, maintaining the highest standards of excellence, and ensuring customer satisfaction.",
    icon: <CheckCircle className="w-10 h-10 text-gray-700" />,
  },
  {
    title: "Training",
    desc: "We believe in imparting modern and best in class training to both aspiring graduates and talented professionals to keep them abreast with changing needs of the competitive market place.",
    icon: <Sun className="w-10 h-10 text-gray-700" />,
  },
  {
    title: "Proven Track Record",
    desc: "With a strong history of successful IT projects and happy clients, Tanisha Systems is recognized as a trusted IT service provider. Our client success stories and case studies showcase our expertise in delivering high-quality, innovative IT solutions that foster business growth and success.",
    icon: <CalendarCheck className="w-10 h-10 text-gray-700" />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-px w-16 bg-[#1d4f8b]"></div>
        <h2 className="text-4xl font-bold text-[#1d4f8b] mx-4">
          Why Choose Tanisha Systems
        </h2>
        <div className="h-px w-16 bg-[#1d4f8b]"></div>
      </div>

      {/* Sub Heading */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        We prioritize your objectives and challenges to drive tangible results
        and foster business growth. <br />
        Trust in our innovative and reliable IT services to transform your
        business in the digital era.
      </p>

      {/* Grid items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 px-6 md:px-20">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="border-t border-gray-300 mb-6"></div>

            <div className="flex items-start gap-4">
              {/* Icon with pink background circle */}
              <div className="relative">
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#f3c4c7] rounded-full"></div>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#1d4f8b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
