import type { Metadata } from "next";
import ServicesSection from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore Zenvisoft's end-to-end full-stack software development, mobile, cloud, and product design services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B] mb-4">
            Our Capabilities
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-[#01163B]">
            End-to-End Digital Engineering Services
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            From UX/UI design to cloud infrastructure, we build high-performance digital products engineered to scale.
          </p>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
