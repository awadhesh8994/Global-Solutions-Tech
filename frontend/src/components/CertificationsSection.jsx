export default function CertificationsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-4">
          <span className="w-12 h-[2px] bg-gray-300"></span>
          Our Certifications
          <span className="w-12 h-[2px] bg-gray-300"></span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At Tanisha Systems, we are committed to maintaining the highest standards of 
          excellence and professionalism in our services. We are proud to hold the following 
          certifications, which validate our expertise and capabilities in providing quality 
          IT solutions to our clients.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          
          <div className="bg-white shadow rounded-xl p-6 flex justify-center">
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/iso2015-1024x395.png"
              alt="ISO Certified"
              className="h-20 object-contain"
            />
          </div>
          
          <div className="bg-white shadow rounded-xl p-6 flex justify-center">
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-c.png"
              alt="E-Verify"
              className="h-20 object-contain"
            />
          </div>

          <div className="bg-white shadow rounded-xl p-6 flex justify-center">
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-a.png"
              alt="D&B Certified"
              className="h-20 object-contain"
            />
          </div>

          <div className="bg-white shadow rounded-xl p-6 flex justify-center">
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-c.png"
              alt="MBE Certified"
              className="h-20 object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
