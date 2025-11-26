
import applicationImg from "../../assets/application-management-outsourcing.jpg";
import appIcon from "../../assets/application.png";
import buildtransferImg from "../../assets/build-transfer.jpg";
import buildIcon from "../../assets/build.png";
import businessImg from "../../assets/business-process-outsourcing.jpg";
import businessIcon from "../../assets/business.png";
import fixedcostImg from "../../assets/fixed-cost.jpg";
import fixedIcon from "../../assets/fixed.png";
import helpImg from "../../assets/help.jpg";
import offshoreImg from "../../assets/offshore-team.jpg";
import shoreIcon from "../../assets/shore.png";
import timemeterialImg from "../../assets/time-material.jpg";
import timeIcon from "../../assets/time.png";
import ContactBar from "../../components/ContactBar";


function HowCanWeHelp() { 
  return (
    <div className="w-full">

      {/*section1 */}
      <section className="bg-white text-blue-900 pt-20 px-0 pb-0"> 
  <div className="text-center">
    <h1 className="text-4xl font-bold mt-8 mb-4">How Can We Help?</h1>
    <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto"> 
      We deliver software solutions determined by business need.
    </p>
  </div>

  <img 
    src={helpImg} 
    alt="How Can We Help Hero" 
    className="w-full h-96 object-cover" 
  />
</section>

{/* section 2 */} 
<section className="bg-gray-200 text-blue-900 px-0">
  <div className="text-center pt-8"> 
    <h1 className="text-3xl font-bold mb-4">
     Our specialization and offerings
    </h1>
    <p className="text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto pb-8">
Our Specialization And Offerings, Can Help You To Get IT Solutions To Market More Quickly.
    </p>
  </div>
</section>

      {/* section 3 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
        
          <div className="p-6">
              <img 
            src={fixedIcon} 
            alt="Fixed Cost Business Solution" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Fixed Cost Business Solution</h2>
            <p className="text-gray-800 leading-relaxed ">
              The Fixed Price- Custom Application Development model is used, 
              when the client needs are well defined and client requires Global Solutions Tech to deliver solution or specific task 
              at a fixed price as per the defined specification and agreed project path. 
              As per agreement with client Global Solutions Tech can use combination of on-site,
               off-site or off-shore teams to deliver solution on-time and on-budget as per the 
               understanding and agreement with the client.
            </p>
</div>
         

          <img 
            src={fixedcostImg} 
            alt="Fixed Cost Business Solution" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* section 4 */} 
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={timemeterialImg} 
            alt="Time and Material" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
                   <img 
            src={timeIcon} 
            alt="time and material" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Time and Material</h2>
            <p className="text-gray-800 leading-relaxed">
              This model allows our clients to request Global Solutions Tech to provide 
              IT professionals for the assignment where work allocation will be done by clients.
               The pricing model is used when it is difficult to determine project
                scope and make accurate estimates. Resources can be provided on-site, 
                off-site or off-shore locations as per the client requirement.
            </p>
          </div>
        </div>
      </section>
      {/*section 5*/}
<section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
            <img 
            src={businessIcon} 
            alt="business process outsourcing" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Business Process Outsourcing

</h2>
            <p className="text-gray-800 leading-relaxed">
              Business process outsourcing is a valuable strategy for client
               to achieve high performance by controlling costs, reducing risk, 
               and fostering collaboration. This is based upon philosophy to have 
               client focus on its core competence, and let Global Solutions team manage 
               the non-core business process.
            </p>
</div>
         

          <img 
            src={businessImg} 
            alt="Business Process Outsourcing" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      {/*section 6*/}
         <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={applicationImg} 
            alt="Application Management Outsourcing" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
              <img 
            src={appIcon} 
            alt="application management outsourcing" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Application Management Outsourcing</h2>
            <p className="text-gray-800 leading-relaxed">
              Client can focus on creating new technology solution 
              and let Global Solutions off-shore infrastructure team manage
               and support your applications in production and test environment. 
               To our clients it gives better value for each IT Dollar spent,
                exposure to skilled global expertise and advantage of round-the-clock 
                support because of the time zone difference.
            </p>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
          <img 
            src={buildIcon} 
            alt="build and transfer" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Build and Transfer

</h2>
            <p className="text-gray-700 leading-relaxed">
              The entire application/solution is developed and deployed
               for a specific client, and then transfer the application 
               management to the client after delivery.
            </p>
</div>
         

          <img 
            src={buildtransferImg} 
            alt="Build and Transfer" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* section 9 */}

     
    
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={offshoreImg} 
            alt="Offshore Infrastructure Management" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
              <img 
            src={shoreIcon} 
            alt="Offshore Infrastructure Management" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Off-Shore Delivery Center</h2>
            <p className="text-gray-800 leading-relaxed">
              This model, Global Solutions Tech provides a client with a dedicated team or 
              resources for a fixed period of time at a fixed cost. Client 
              can use the team as they want and let Global Solutions take care of all the logistics.
            </p>
          </div>
        </div>
      </section>
      {/* section 9 */}
       <ContactBar />
    </div>
  );
}

export default HowCanWeHelp ; 