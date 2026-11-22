import type { Metadata } from "next";
import ServicesSection from "@/components/sections/services";
import TechStackSection from "@/components/sections/tech-stack";
import ProcessSection from "@/components/sections/process";
import PricingSection from "@/components/sections/pricing";
import CtaSection from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore Zenvisoft's end-to-end full-stack software development, mobile, cloud, and product design services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand to-brand-light py-20 lg:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            Our Services
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            End-to-End Digital Engineering Capabilities
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We partner with ambitious teams to conceive, design, build, and scale world-class software products.
          </p>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
