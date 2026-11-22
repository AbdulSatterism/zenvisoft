import { processSteps } from "@/data/content";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Our Methodology
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            From Initial Concept to Scaled Production
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A rigorous, battle-tested 4-step engineering lifecycle that guarantees predictable delivery and exceptional code quality.
          </p>
        </div>

        {/* Step-by-Step Grid with Connectors */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {processSteps.map((s, idx) => (
            <div key={s.step} className="relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-surface/30 p-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand font-black text-lg text-white shadow-sm">
                    {s.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-gray-600">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
