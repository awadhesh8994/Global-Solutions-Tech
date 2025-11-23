


import React from "react";
import StatsSection from "../../components/StatsSection"; 
import ContactBar from "../../components/ContactBar";
import heroImg from "../../assets/hero.jpg";
import missionImg from "../../assets/mission.jpg";
import visionImg from "../../assets/Vision.jpg";


function About() {
  return (
    <div className="w-full">

      {/* section  hero overview */}
      <section className="bg-white text-blue-900 py-20 px-0">
    
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 m-6 ">Overview</h1>
            <p className="text-lg  text-gray-800 leading-relaxed mb-8 m-4 ">
              We are leading provider of custom application and end-to-end IT service.
            </p>
   
          </div>

          <img src={heroImg} alt="About Hero" className="w-full  h-130 object-cover" />
      </section>







{/* section 2 */} 
<section className="bg-white text-blue-900 py-0 px-0 ">
  <div className="text-center">
<h1 className="text-4xl font-bold mb-8">
      Experts are behind everything we do
    </h1>
    <p className="text-lg text-gray-800 leading-relaxed mb-8 m-4 max-w-5xl mx-auto ">
      We deliver what we promise, as this has been our guiding principle. 
      Our vision is to improve the quality of human life 
      through relentless innovation in business and technological processes and practices.
    </p>
  </div>

</section>
{/* section 3 stats */}
<StatsSection />
{/*section 4*/}
      <section className="py-0 px-0">
  <div className="w-full grid md:grid-cols-2 gap-0 items-center">
    
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        To develop Outsource and Co-source Turnkey Projects for Government and Industries 
        around the globe and yield higher productivity, higher profitability 
        and higher satisfaction for our clients.
      </p>

      <ul className="list-disc list-inside text-gray-700 py-5 px-6">
        <li className="text-gray-700 m-1">Help clients to achieve critical business objectives.</li>
        <li className="text-gray-700 m-1">Setting new standard in IT Project Delivery & Service</li>
        <li className="text-gray-700 m-1">Transforming lives by collaborating with clients</li>
      </ul>
    </div>

    <img 
      src={missionImg} 
      alt="Mission" 
      className="w-full h-full object-cover"
    />

  </div>
</section>



    {/*section 5*/} 
<section className="py-0 px-0">
  <div className="w-full grid md:grid-cols-2 gap-0 items-center">

    <img 
      src={visionImg} 
      alt="Vision" 
      className="w-full h-full object-cover order-1 md:order-0"
    />

    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Vision</h2>
      <p className="text-gray-700 leading-relaxed">
        Our vision is to accelerate execution of our growth strategy while continuing to build our brand with clients, 
        community and our employees. In every business engagement, 
        we seek the opportunity to build long-lasting, strategic relationships
         with our client-centric focus that forms the basis for how we, as a company, 
         operate and serve our clients. To be the best global IT delivery company,
          delivering solution by combining our unparalleled experience and capabilities across all industries, 
          and collaborating with clients.
      </p>
    </div>

  </div>
</section>
{/*section 6 */}
   <ContactBar />

 

</div>
  );
}

export default About;
