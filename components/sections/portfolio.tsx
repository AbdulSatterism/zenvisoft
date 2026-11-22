import Link from "next/link";
import { projects } from "@/data/content";
import { ArrowRightIcon } from "@/components/icons";

export default function PortfolioSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/50" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Featured Case Studies
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Proven Digital Products Delivered for Industry Leaders
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:border-brand hover:text-brand transition-all"
          >
            <span>Have a project in mind?</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              {/* Graphic Mockup Area */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-brand via-brand-light to-accent p-6 flex flex-col justify-between overflow-hidden text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-green-500/90 text-white px-3 py-0.5 text-xs font-bold tracking-wide">
                    {project.metrics}
                  </span>
                </div>

                {/* Centered Graphic Identity */}
                <div className="my-auto text-center z-10">
                  <p className="text-xs uppercase tracking-widest text-gray-300">Client Partner</p>
                  <p className="text-xl font-black tracking-tight">{project.client}</p>
                </div>

                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-accent transition-colors"
                  >
                    <span>Discuss Similar Solution</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
