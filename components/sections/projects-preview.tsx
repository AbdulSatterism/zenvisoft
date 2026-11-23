import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/content";

export default function ProjectsPreviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
              {projectsData.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px]">
              {projectsData.heading}
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl">
              {projectsData.subheading}
            </p>
          </div>

          <Link
            href={projectsData.seeAllLink.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-semibold text-[#01163B] hover:border-[#01163B] hover:bg-[#f0f4fa] transition-all shrink-0 self-start sm:self-auto"
          >
            <span>{projectsData.seeAllLink.label}</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 6 Cards Grid (2 rows of 3) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-[#F9F9FC] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="mt-4">
                  <h3 className="text-base font-bold text-[#01163B] group-hover:text-[#1E56A0] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f0f4fa] border border-[#01163B]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#01163B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full Width Action Button */}
              <div className="mt-5 pt-3 border-t border-gray-200/60">
                <Link
                  href={item.href}
                  className="block w-full rounded-full border border-gray-200 bg-white py-2 text-center text-xs font-semibold text-[#01163B] hover:border-[#01163B] hover:bg-[#f0f4fa] transition-colors shadow-xs"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
