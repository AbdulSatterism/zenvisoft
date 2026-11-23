import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import ProjectsPreviewSection from "@/components/sections/projects-preview";
import TestimonialsSection from "@/components/sections/testimonials";
import TeamSection from "@/components/sections/team";
import CareersSection from "@/components/sections/careers";
import MissionVisionSection from "@/components/sections/mission-vision";
import ContactSection from "@/components/sections/contact-section";
import CtaBanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <TeamSection />
      <CareersSection />
      <MissionVisionSection />
      <ContactSection />
      <CtaBanner />
    </>
  );
}
