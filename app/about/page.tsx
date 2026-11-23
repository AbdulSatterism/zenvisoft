import type { Metadata } from "next";
import MissionVisionSection from "@/components/sections/mission-vision";
import TeamSection from "@/components/sections/team";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Zenvisoft, our mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B] mb-4">
            About Zenvisoft
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-[#01163B]">
            Passionate Technologists Building Digital Futures
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            We are dedicated to bridging the gap between complex ideas and intuitive digital solutions.
          </p>
        </div>
      </section>

      <MissionVisionSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
