

import { Mail, Phone } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-center sm:text-left">
          {/* Title */}
          <h2 className="text-base sm:text-lg font-light whitespace-nowrap">
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
        </div>
      </div>
    </section>
  );
}
