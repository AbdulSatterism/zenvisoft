import type { Metadata } from "next";
import ProjectsPreviewSection from "@/components/sections/projects-preview";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Discover our featured digital products, web applications, and mobile solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-white py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B] mb-4">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-[#01163B]">
            Our Work Speaks Louder Than Words
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Explore the innovative digital products, intuitive UX systems, and custom SaaS platforms we&apos;ve crafted.
          </p>
        </div>
      </section>

      <ProjectsPreviewSection />
      <CtaBanner />
    </>
  );
}
