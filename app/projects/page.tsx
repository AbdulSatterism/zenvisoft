import type { Metadata } from "next";
import PortfolioSection from "@/components/sections/portfolio";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Browse Zenvisoft's featured software engineering and digital product case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand to-brand-light py-20 lg:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            Our Work
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Case Studies & Delivered Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our track record of engineering scalable, high-performance web applications, mobile suites, and cloud systems.
          </p>
        </div>
      </section>

      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
