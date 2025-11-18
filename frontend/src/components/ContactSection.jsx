import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-4">
          <span className="w-12 h-[2px] bg-gray-300"></span>
          Contact
          <span className="w-12 h-[2px] bg-gray-300"></span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3">
          Give us a call or send us an email and we will get back to you.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

          <div className=" rounded-xl p-8 shadow-sm bg-gray-50">
            <MapPin className="text-blue-700 w-8 h-8 mx-auto" />
            <h3 className="font-semibold text-blue-800 mt-4">Address</h3>
            <p className="text-gray-600 mt-2">
              99 Wood Ave South, Suite # 308<br />
              Iselin, NJ 08830
            </p>
          </div>

          <div className=" rounded-xl p-8 shadow-sm bg-gray-50">
            <Phone className="text-blue-700 w-8 h-8 mx-auto" />
            <h3 className="font-semibold text-blue-800 mt-4">Call Us</h3>
            <p className="text-gray-600 mt-2">
              +1 212-729-6543
            </p>
          </div>

          <div className=" rounded-xl p-8 shadow-sm bg-gray-50">
            <Mail className="text-blue-700 w-8 h-8 mx-auto" />
            <h3 className="font-semibold text-blue-800 mt-4">Email Us</h3>
            <p className="text-gray-600 mt-2">
              info@tanishasystems.com
            </p>
          </div>

          <div className=" rounded-xl p-8 shadow-sm bg-gray-50">
            <Clock className="text-blue-700 w-8 h-8 mx-auto" />
            <h3 className="font-semibold text-blue-800 mt-4">Open Hours</h3>
            <p className="text-gray-600 mt-2">
              Monday - Friday<br />
              9:00AM - 05:00PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
