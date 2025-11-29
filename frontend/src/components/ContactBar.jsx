
import { Phone, Mail } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="py-3 px-5 bg-blue-900 text-white flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6 text-center">
      <h2 className="w-full md:w-auto text-lg font-light mt-1">
        Have a Question?
      </h2>

          {/* Contact Info - Stack on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <a
                href="tel:+12127296543"
                className="text-base sm:text-lg font-medium hover:text-blue-200 transition"
              >
                +1 212-729-6543
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <a
                href="mailto:info@globalsolutions.com"
                className="text-base sm:text-lg font-medium hover:text-blue-200 transition break-all sm:break-normal"
              >
                info@globalsolutions.com
              </a>
            </div>
          </div>
    </section>
  );
}