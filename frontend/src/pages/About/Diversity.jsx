
import diversityImg from "../../assets/diversity.jpg";
import ContactBar from "../../components/ContactBar";
function Diversity() { 
  return (
    <div className="w-full">

      {/*section1 */}
      <section className="bg-white text-blue-900 pt-20 px-0 pb-0"> 
  <div className="text-center">
    <h1 className="text-4xl font-bold mt-8 mb-4">Diversity @ Global Solutions Tech</h1>
    <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto"> 
      Diversity is fundamental to our core values and creates a work environment 
      that helps Global Solutions to effectively compete in the global marketplace.
    </p>
  </div>

  <img 
    src={diversityImg} 
    alt="Diversity Hero" 
    className="w-full h-96 object-cover" 
  />
   <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto mt-7"> 
      Our global workforce gives clients access to a rich range of talent, representing 
      different styles, perspectives and experiences. Diversity is essential factor in our 
      ability to deliver high performance to clients. At Global Solutions takes the widest view of diversity, 
      going beyond gender, religion, race, ethnicity, sexual orientation and gender identity. We create a
       work environment that welcomes all forms of differences. We recognize and value individuals’ similarities and differences.</p>

    <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-5xl mx-auto mt-7"> 
    Our global workforce is a reflection of our clients, partners and communities 
     in which we operate and diversity is our key strength.
    </p>
</section>
{/* section 2 */}

      <ContactBar />
    </div>
  );
}

export default Diversity; 