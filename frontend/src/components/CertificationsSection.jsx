export default function CertificationsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-900"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Certifications
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-900"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            At Global Solutions Tech, we are committed to maintaining the highest standards of 
            excellence and professionalism in our services. We are proud to hold the following 
            certifications, which validate our expertise and capabilities in providing quality 
            IT solutions to our clients.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/iso2015-1024x395.png"
              alt="ISO Certified"
              className="h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-c.png"
              alt="E-Verify"
              className="h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-a.png"
              alt="D&B Certified"
              className="h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <img 
              src="https://www.tanishasystems.com/assets/img/certificates/partner-xs-c.png"
              alt="MBE Certified"
              className="h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}