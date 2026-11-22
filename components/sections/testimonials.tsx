import { testimonials } from "@/data/content";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Client Voices
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Leaders Who Value Quality
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover why global companies rely on Zenvisoft for mission-critical software engineering.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-surface/30 p-8 shadow-sm transition-all hover:border-brand/30 hover:shadow-lg"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-amber-400 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-6 text-gray-700 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-200/60 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-xs">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role}, <span className="font-semibold text-gray-700">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
