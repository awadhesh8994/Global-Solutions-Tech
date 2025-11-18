export default function ClientLogos() {
  const logos = [
    "https://www.tanishasystems.com/assets/img/clients/MPHASIS_logo.png",
    "https://www.tanishasystems.com/assets/img/clients/infosys-logo.jpg",
    "https://www.tanishasystems.com/assets/img/clients/Wipro_Logo.png",
    "https://www.tanishasystems.com/assets/img/clients/IBM-57502b16.png",
    "https://www.tanishasystems.com/assets/img/clients/incedo_Logo.jpg",
    "https://www.tanishasystems.com/assets/img/clients/tavant-technologies.png",
    "https://www.tanishasystems.com/assets/img/clients/200X100_Atos.jpg",
    "https://www.tanishasystems.com/assets/img/clients/200X100_UBS.jpg",
    "https://www.tanishasystems.com/assets/img/clients/200X100_McKesson.jpg",
    "https://www.tanishasystems.com/assets/img/clients/200X100_Dell.jpg",
    "https://www.tanishasystems.com/assets/img/clients/200X100_PartnersHealthCare.jpg"
    
  ];

return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <div className="logo-slider flex items-center">
        
        {/* First Group */}
        <div className="flex">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="client"
              className="h-14 w-auto mx-10 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Second Group (duplicate for infinite scroll) */}
        <div className="flex">
          {logos.map((logo, i) => (
            <img
              key={`copy-${i}`}
              src={logo}
              alt="client"
              className="h-14 w-auto mx-10 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </div>
  );
}