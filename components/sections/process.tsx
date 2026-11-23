import Link from "next/link";
import { processData } from "@/data/content";

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Header */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
          {processData.badge}
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px]">
          {processData.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
          {processData.subheading}
        </p>

        {/* 5 Process Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left">
          {processData.steps.map((step) => (
            <div
              key={step.step}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                step.isHighlighted
                  ? "border-[#01163B] shadow-md ring-1 ring-[#01163B]/20"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {/* Highlighted Step Badge if Step 1 */}
              {step.isHighlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#01163B] to-[#1E56A0] py-1 text-center text-[11px] font-bold text-white uppercase tracking-wider">
                  Step 1
                </div>
              )}

              <div className={step.isHighlighted ? "mt-4" : ""}>
                {/* Icon box */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f4fa] text-[#01163B] mb-5">
                  {step.icon === "cube" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  )}
                  {step.icon === "pen" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  )}
                  {step.icon === "terminal" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M6.75 7.5l3 3-3 3m4.5 0h4.5m-10.5 4.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  )}
                  {step.icon === "crown" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )}
                  {step.icon === "rocket" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#01163B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="mt-12">
          <Link
            href={processData.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-[#01163B] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#01163B]/30 hover:bg-[#0a2a5e] hover:shadow-lg hover:shadow-[#01163B]/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            {processData.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
