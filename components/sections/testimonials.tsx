import { testimonialsData } from "@/data/content";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Header */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
          {testimonialsData.badge}
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px]">
          {testimonialsData.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
          {testimonialsData.subheading}
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {testimonialsData.items.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#F9F9FC] p-6 shadow-xs transition-all hover:border-[#01163B]/20 hover:shadow-md"
            >
              <div>
                {/* Quotation Mark & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#01163B] leading-none">“</span>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-200/50 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#01163B] text-white text-xs font-bold">
                  {t.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#01163B]">{t.author}</p>
                  <p className="text-[11px] text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Prev/Next Arrows */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-[#01163B] hover:text-[#01163B] transition-colors"
            aria-label="Previous Testimonial"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-[#01163B] hover:text-[#01163B] transition-colors"
            aria-label="Next Testimonial"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
