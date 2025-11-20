import HeroSection from "../components/HeroSection";
import ClientLogos from "../components/ClientLogos";
import AboutServicesSection from "../components/AboutServicesSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChooseSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />

      {/* More sections here */}
      <ClientLogos />
      <AboutServicesSection />
      <StatsSection />
      <ServicesSection />
      <WhyChoose />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
