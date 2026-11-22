import HeroSection from "@/components/sections/hero";
import ClientsSection from "@/components/sections/clients";
import ServicesSection from "@/components/sections/services";
import PortfolioSection from "@/components/sections/portfolio";
import AboutSection from "@/components/sections/about";
import ProcessSection from "@/components/sections/process";
import PricingSection from "@/components/sections/pricing";
import TeamSection from "@/components/sections/team";
import TestimonialsSection from "@/components/sections/testimonials";
import TechStackSection from "@/components/sections/tech-stack";
import CtaSection from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <TechStackSection />
      <CtaSection />
    </>
  );
}
