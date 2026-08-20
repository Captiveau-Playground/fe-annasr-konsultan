import HeroSection from "@/components/home/HeroSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ClientsSection from "@/components/home/ClientsSection";
import LocationsSection from "@/components/home/LocationsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CareerBanner from "@/components/home/CareerBanner";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FounderSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <LocationsSection />
      <ProcessSection />
      <CareerBanner />
      <CtaSection />
    </div>
  );
}
