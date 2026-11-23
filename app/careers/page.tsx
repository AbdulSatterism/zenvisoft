import type { Metadata } from "next";
import CareersSection from "@/components/sections/careers";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata = {
  title: "Careers",
  description: "Join our team of creative engineers, designers, and innovators at Zenvisoft.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-white py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B] mb-4">
            Join Our Team
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-[#01163B]">
            Build the Future With Us
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            We hire for passion and empower our team members to do their best work on global products.
          </p>
        </div>
      </section>

      <CareersSection />
      <CtaBanner />
    </>
  );
}
