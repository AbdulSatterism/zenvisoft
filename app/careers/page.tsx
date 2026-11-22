import type { Metadata } from "next";
import Link from "next/link";
import { jobOpenings } from "@/data/content";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import CtaSection from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the engineering and design team at Zenvisoft. Explore our current open positions.",
};

const perks = [
  "100% Remote-First Culture with flexible working hours",
  "Competitive compensation with annual performance bonuses",
  "$2,500 annual home-office and learning allowance",
  "Comprehensive global health, dental, and wellness insurance",
  "Generous paid time off, parental leave, and company retreats",
  "Work alongside world-class ex-FAANG engineers and designers",
];

export default function CareersPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-b from-brand to-brand-light py-20 lg:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            Join Zenvisoft
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Build the Future of Digital Software
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We are always on the lookout for passionate engineers, thoughtful designers, and innovative problem solvers.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Build With Us?</h2>
            <p className="mt-3 text-base text-gray-600">
              We empower our team members with autonomy, top-tier compensation, and high-impact projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-surface/40 p-6">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-surface/50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Current Open Positions</h2>
            <p className="mt-3 text-base text-gray-600">
              Explore our active vacancies across engineering and design departments.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-md bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                      {job.department}
                    </span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                      {job.type}
                    </span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">Experience: {job.experience}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-light transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  <span>Apply Now</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
