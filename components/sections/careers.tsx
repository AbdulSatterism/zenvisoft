import Link from "next/link";
import { careersData } from "@/data/content";

export default function CareersSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="careers">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Header */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
          {careersData.badge}
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px]">
          {careersData.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
          {careersData.subheading}
        </p>

        {/* 6 Job Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 text-left">
          {careersData.jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#F9F9FC] p-6 shadow-xs hover:border-[#01163B]/20 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Department pill */}
                <span className="inline-block rounded-full bg-[#f0f4fa] border border-[#01163B]/10 px-3 py-1 text-[11px] font-semibold text-[#01163B]">
                  {job.department}
                </span>

                {/* Job Title */}
                <h3 className="mt-4 text-lg font-bold text-[#01163B]">
                  {job.title}
                </h3>

                {/* Meta details */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-gray-500">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white border border-gray-200/80 px-2.5 py-1">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white border border-gray-200/80 px-2.5 py-1">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white border border-gray-200/80 px-2.5 py-1">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.level}
                  </span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-6 flex justify-end">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#01163B] px-5 py-1.5 text-xs font-semibold text-white hover:bg-[#0a2a5e] transition-colors shadow-xs"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
