import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800">
            Tanisha Systems INC
          </h2>
          <p className="text-gray-600 mt-2">
            We deliver software solutions determined by business need.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a className="border rounded-full p-3 hover:bg-blue-50 transition">
              <Linkedin className="text-blue-600" size={20} />
            </a>
            <a className="border rounded-full p-3 hover:bg-blue-50 transition">
              <Twitter className="text-blue-600" size={20} />
            </a>
            <a className="border rounded-full p-3 hover:bg-blue-50 transition">
              <Facebook className="text-blue-600" size={20} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Useful Links
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Our Locations</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>AI & Data Science</li>
            <li>Cloud Solution</li>
            <li>Consulting</li>
            <li>Internet of Things (IoT)</li>
            <li>Mobile Applications</li>
            <li>SaaS</li>
            <li>Security</li>
            <li>Social Media</li>
            <li>Software Engineering</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Contact Us
          </h3>

          <p className="text-gray-700 leading-relaxed">
            99 Wood Ave South, Suite # 308<br />
            Iselin, NJ 08830<br />
            United States
          </p>

          <p className="mt-4 text-gray-700">
            <strong>Phone:</strong> +1 212-729-6543
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> info@tanishasystems.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 mt-12 py-4 text-center text-gray-600">
        © Copyright 2024
        <span className="font-semibold text-gray-800"> Tanisha Systems Inc.</span>
        All Rights Reserved
      </div>
    </footer>
  );
}
