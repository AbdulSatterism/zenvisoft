import type { Metadata } from "next";
import AboutSection from "@/components/sections/about";
import TeamSection from "@/components/sections/team";
import ProcessSection from "@/components/sections/process";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Zenvisoft, our values, our engineering culture, and executive leadership.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand to-brand-light py-20 lg:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            Our Story
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Passionate Technologists Building Digital Futures
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Founded with the conviction that great software creates exponential business value, Zenvisoft delivers elite development services across the globe.
          </p>
        </div>
      </section>

      <AboutSection />
      <TeamSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
