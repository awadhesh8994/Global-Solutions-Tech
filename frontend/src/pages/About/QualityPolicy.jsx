import React from "react";

import ContactBar from "../../components/ContactBar";
import qualitypolicyImg from "../../assets/quality-policy.jpg";
import trustintegrityImg from "../../assets/trust-integrity.jpg"
import trustIcon from "../../assets/trust.png";
import commitementImg from "../../assets/commitement.jpg";
import commitementIcon from"../../assets/commitment.png";
import customersatisafactionImg  from"../../assets/customer-satisfaction.jpg";
import  customerIcon from"../../assets/customer.png";
import  openenvImg from"../../assets/open-environment.jpg";
import envIcon from"../../assets/environment.png";
import respectindImg from"../../assets/respect-individuals.jpg";
import respectIcon from"../../assets/respect.png";

function QualityPolicy() { 
  return (
    <div className="w-full">

      {/*section1 */}
      <section className="bg-white text-blue-900 pt-20 px-0 pb-0"> 
  <div className="text-center">
    <h1 className="text-4xl font-bold mt-8 mb-4">Quality Policy</h1>
    <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto"> 
      We aspire to be early movers & create an environment for a dynamic customer 
      insight in all transactions by constantly aligning our business strategies & capabilities.
    </p>
  </div>

  <img 
    src={qualitypolicyImg} 
    alt="Quality Policy" 
    className="w-full h-96 object-cover" 
  />
</section>

{/* section 2 */} 
<section className="bg-gray-200 text-blue-900 px-0">
  <div className="text-center pt-8"> 
    <h1 className="text-3xl font-bold mb-4">
      Global Solutions Tech's Quality Policy
  </h1>
    <p className="text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto pb-8">
      Global Solutions Tech  Values Are The Building Blocks Of Our Vibrant Global Work Culture.
       Our Culture Has Developed From Our Quality Policy. 
       It Inspires Our Behavior, Relationships, And Business Decisions.
    </p>
  </div>
</section>

      {/* section 3 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
        
          <div className="p-6">
              <img 
            src={trustIcon} 
            alt="Trust" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Trust and Integrity</h2>
            <p className="text-gray-800 leading-relaxed ">
              We are in the business of intellectual capital related by humans
               and their interaction with other humans. To operate successfully 
               in such a dynamic environment, trust is a key element in everyday interactions. 
               We believe that our business grows only as fast as our trust in one another expands. 
               We honor our commitments and act with responsibility in all our relationships.
            </p>
          </div>
         

          <img 
            src={trustintegrityImg} 
            alt="trust integrity" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* section 4 */} 
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={commitementImg} 
            alt="Commitement" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
                   <img 
            src={commitementIcon} 
            alt="commitement" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Commitment and Professionalism</h2>
            <p className="text-gray-800 leading-relaxed">
              As a people's firm, we believe that it's our responsibility to act professionally. 
              We deliver excellence by working together and demonstrate mutual respect.
               We believe in dealing with issues with courage and integrity. 
               We go beyond what we commit to deliver and pursue excellence in everything we do.
                This is our commitment to the civilized way of doing business.
            </p>
          </div>
        </div>
      </section>
      {/*section 5*/}
<section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
            <img 
            src={customerIcon} 
            alt="customer" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Relentless quest for customer satisfaction

</h2>
            <p className="text-gray-800 leading-relaxed">
We take customer satisfaction very seriously and put all our efforts in fulfilling them. 
We carry out this commitment by providing the highest level of value to our clients through exceptional, 
responsive, and efficient delivery of services. We wouldn't be in business without them, 
and we are in business for them and with them. 
Serving them with the highest quality of solutions and resource offerings is a value very dear to us.
            </p>
</div>
         

          <img 
            src={customersatisafactionImg} 
            alt="Customer Satisfaction" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      {/*section 6*/}
         <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <img 
            src={openenvImg} 
            alt="Environment" 
            className="w-full h-full object-cover order-1 md:order-0"
          />

          <div className="p-6">
              <img 
            src={envIcon} 
            alt="environment" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Open Environment</h2>
            <p className="text-gray-800 leading-relaxed">
             We listen, learn, and help selflessly in our interactions with others.
              We embrace change, respect diverse viewpoints and are inclusive. 
              We identify opportunities and proactively seek areas 
              for improvement in processes and encourage diverse viewpoints.
            </p>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section className="py-0 px-0">
        <div className="w-full grid md:grid-cols-2 gap-0 items-center">
          <div className="p-6">
          <img 
            src={respectIcon} 
            alt="respect" 
            className="w-20 h-20 mb-6 py-1 px-1"
          />
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Respect for Individuals
            </h2>
            <p className="text-gray-700 leading-relaxed">
              More than a lip service, this is probably the strongest value we adhere to.
               And this comes straight from the heart of our organization.
                No matter what this aspect will never be compromised, irrespective of the individual's belief system,
                 gender, sexual orientation, race, religion and national origin. We believe that grown up human beings
                  like to be treated as adults and are mature enough to be treated that way.
            </p>
          </div>
         

          <img 
            src={respectindImg} 
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

export default QualityPolicy; 