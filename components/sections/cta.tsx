import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 text-center sm:px-16 lg:py-24 shadow-2xl">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-80 w-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #3b7ddd 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e56a0 0%, transparent 40%)"
          }} />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Let&apos;s Build Together
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Ready to Accelerate Your{" "}
              <span className="text-blue-200">Digital Roadmap?</span>
            </h2>

            <p className="mt-6 text-lg leading-7 text-blue-100">
              Schedule a technical discovery session with our senior architects to discuss your project scope, technology options, and delivery timeline.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-brand shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all w-full sm:w-auto hover:-translate-y-0.5"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all w-full sm:w-auto"
              >
                Explore Case Studies
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
              {["No lock-in contracts", "Free discovery call", "Response within 24hrs"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
