
import deliveryImg from "../../assets/delivery.jpg";
import eliteworkImg from "../../assets/elite-workforce.jpg";
import deliveryIcon from "../../assets/fastdelivery.png";
import highqualityImg from "../../assets/high-quality-solutions.jpg";
import leadershipImg from "../../assets/leaderships.jpg";
import outstandingImg from "../../assets/outstanding-service.jpg";
import rankingIcon from "../../assets/ranking.png";
import serviceIcon from "../../assets/service.png";
import teamleaderIcon from "../../assets/teamleader.png";
import whyusImg from "../../assets/whyus.jpg";
import workforceIcon from "../../assets/workforce.png";
import ContactBar from "../../components/ContactBar";

function WhyUs() { 
  return (
    <div className="w-full">

      {/*section1 */}
      <section className="bg-white text-blue-900 pt-20 px-0 pb-0"> 
  <div className="text-center">
    <h1 className="text-4xl font-bold mt-8 mb-4">Why Us?</h1>
    <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto"> 
      Global Solutions Tech consistently delivers Custom Applications Development, 
      Outsource & Co-Source Projects, IT Services, and Business Process Outsourcing (BPO) 
      services globally through a combination of technology, domain and elite work force. 
      We believe in simplified development processes, optimal tool selection and quality 
      workforce to harness maximum value out of your IT spending.
    </p>
  </div>

  <img 
    src={whyusImg} 
    alt="Why Us Hero" 
    className="w-full h-96 object-cover" 
  />
</section>

{/* section 2 */} 
<section className="bg-gray-200 text-blue-900 px-0">
  <div className="text-center pt-8"> 
    <h1 className="text-3xl font-bold mb-4">
      Global Solutions Tech Differentiators
    </h1>
    <p className="text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto pb-8">
      We deliver what we promise, as this has been our guiding principle.
    </p>
  </div>
</section>

      {/* section 3 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
        
          <div className="p-6">
              <img 
            src={rankingIcon} 
            alt="Ranking" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Outstanding Service</h2>
            <p className="text-gray-800 leading-relaxed ">
              The Company’s most distinctive competitive differentiator is its flexible,
               client-centric, performance-driven Global Engagement Model,
                which is based on strong company values, collaboration with clients, 
                high level of communication and adherence to IT standards and processes to meet client needs.
            </p>
</div>
         

          <img 
            src={outstandingImg} 
            alt="Outstanding Service" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* section 4 */} 
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={eliteworkImg} 
            alt="Elitework force" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
                   <img 
            src={workforceIcon} 
            alt="workforce" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Elite Workforce</h2>
            <p className="text-gray-800 leading-relaxed">
              Global elite workforce of IT professionals to meet challenging and specific 
              IT needs of our clients. We hire only the highest caliber and most knowledgeable 
              IT professionals available. Our professionals include technology 
              specialists, domain experts, business process gurus and management 
              professionals with years of experience in designing and developing 
              solutions for industries globally.
            </p>
          </div>
        </div>
      </section>
      {/*section 5*/}
<section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
            <img 
            src={serviceIcon} 
            alt="service" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">High Quality Solutions

</h2>
            <p className="text-gray-800 leading-relaxed">
              We have consistently designed, developed, and delivered 
              high quality solutions for our clients. 
              Global Solutions creates significant value for its clients with vertical
               subject matter expertise and industry specific solutions.
            </p>
</div>
         

          <img 
            src={highqualityImg} 
            alt="High quality solutions" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      {/*section 6*/}
         <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={deliveryImg} 
            alt="Delivery" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
              <img 
            src={deliveryIcon} 
            alt="delivery" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Deliver On-Time and In-Budget</h2>
            <p className="text-gray-800 leading-relaxed">
              We do what we say we will do, and when we say we will do it. 
              We consistently meet and exceed on-time and on-budget delivery.
            </p>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
          <img 
            src={teamleaderIcon} 
            alt="teamleader" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Leaderships & Global Presence

</h2>
            <p className="text-gray-700 leading-relaxed">
              We have consistently designed, developed, and delivered high quality solutions for our clients.
               Global Solutions creates significant value for its clients with vertical subject 
               matter expertise and industry specific solutions.
            </p>
</div>
         

          <img 
            src={leadershipImg} 
            alt="Leadership" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* section 8 */}

      <ContactBar />
    </div>
  );
}

export default WhyUs; 