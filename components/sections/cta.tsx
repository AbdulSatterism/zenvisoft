import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-light to-accent px-8 py-16 text-center sm:px-16 lg:py-24 shadow-2xl">
          {/* Radial blur decor */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-accent-light/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Let&apos;s Build Together
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Ready to Accelerate Your Digital Roadmap?
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-200">
              Schedule a technical discovery session with our senior architects to discuss your project scope, technology options, and delivery timeline.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-brand shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <span>Start a project</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
