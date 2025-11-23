import { Phone, Mail } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="py-3 px-5 bg-blue-900 text-white flex justify-center items-center gap-6 text-center">
      <h2 className="text-lg font-light mt-1">Have a Question?</h2>

      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <p className="text-lg mt-1">+1 212-729-6543</p>
      </div>

      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5" />
        <p className="text-lg mt-1">info@tanishasystems.com</p>
      </div>
    </section>
  );
}
