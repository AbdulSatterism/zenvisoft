import { aboutContent, stats } from "@/data/content";
import { CheckIcon } from "@/components/icons";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Graphic / Stats Showcase */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-brand via-brand-light to-accent p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                  Zenvisoft Advantage
                </span>
                <h3 className="mt-6 text-3xl font-extrabold sm:text-4xl leading-tight">
                  Software Built for Visionaries
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-200">
                  We don&apos;t just write code; we partner with enterprise leaders to architect products that win markets, scale smoothly, and maintain uncompromising quality.
                </p>

                {/* Grid of Key Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-black">{s.value}</p>
                      <p className="text-xs font-semibold text-gray-300 mt-0.5">{s.label}</p>
                      <p className="text-[11px] text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              About Zenvisoft
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {aboutContent.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {aboutContent.subheading}
            </p>

            <ul className="mt-8 space-y-5">
              {aboutContent.features.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
