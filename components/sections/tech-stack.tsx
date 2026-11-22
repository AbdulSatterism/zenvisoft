import { techStackCategories } from "@/data/content";

export default function TechStackSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/50" id="tech">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Technology Ecosystem
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Modern, Resilient & Battle-Tested Tech Stacks
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We build with cutting-edge open-source tools and enterprise standards to ensure lifetime maintainability.
          </p>
        </div>

        {/* 4 Categorized Columns */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStackCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-brand pb-3 border-b border-gray-100">
                {cat.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-brand/10 hover:text-brand transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
