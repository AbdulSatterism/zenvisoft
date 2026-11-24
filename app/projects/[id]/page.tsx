import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/content";
import ContactSection from "@/components/sections/contact-section";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.items.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.items.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study | Zenvisoft`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.items.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* 1. Project Header & Navigation */}
      <section className="bg-white pt-10 pb-6 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#01163B] transition-colors"
            >
              <span>←</span>
              <span>Back to all projects</span>
            </Link>

            <div className="flex items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f0f4fa] border border-[#01163B]/10 px-3 py-1 text-[11px] font-semibold text-[#01163B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Mockup Banner (Exact Figma Layout) */}
      <section className="bg-gradient-to-b from-[#01163B] to-[#0a2a5e] py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1E56A0_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300/30 bg-white/10 px-3.5 py-1 text-xs font-semibold text-blue-200 mb-4">
            Featured Case Study
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-blue-100 max-w-2xl mx-auto">
            {project.subtitle}
          </p>

          {/* Central Hero Device Mockup */}
          <div className="mt-12 mx-auto max-w-2xl rounded-3xl bg-white/5 p-4 sm:p-6 border border-white/15 backdrop-blur-md shadow-2xl">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Split Content (Left Sidebar + Right Narrative) */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Metadata & Quick Nav Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              {/* Project Meta Card */}
              <div className="rounded-2xl border border-gray-200/80 bg-[#f0f4fa]/50 p-6 space-y-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-3">
                  Project Details
                </h3>

                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Client</p>
                  <p className="text-sm font-bold text-[#01163B]">{project.client}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Timeline</p>
                  <p className="text-sm font-bold text-[#01163B]">{project.timeline}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Services Delivered</p>
                  <p className="text-sm font-bold text-[#01163B]">{project.servicesUsed}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase">Platform Status</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E56A0] hover:underline mt-1"
                  >
                    <span>Production Live</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* In-Page Navigation */}
              <div className="rounded-2xl border border-gray-200 p-6 bg-white hidden lg:block">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Sections
                </h4>
                <ul className="space-y-2 text-xs font-semibold text-gray-600">
                  <li>
                    <a href="#overview" className="hover:text-[#01163B] transition-colors block py-1">
                      1. Project Overview
                    </a>
                  </li>
                  <li>
                    <a href="#challenge" className="hover:text-[#01163B] transition-colors block py-1">
                      2. The Challenge
                    </a>
                  </li>
                  <li>
                    <a href="#solution" className="hover:text-[#01163B] transition-colors block py-1">
                      3. The Solution & Approach
                    </a>
                  </li>
                  <li>
                    <a href="#results" className="hover:text-[#01163B] transition-colors block py-1">
                      4. Measurable Results
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#01163B] transition-colors block py-1 text-[#01163B] font-bold">
                      5. Inquire About This Project →
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Detailed Case Study Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Section 1: Overview */}
              <div id="overview" className="scroll-mt-32">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-3.5 py-1 text-xs font-semibold text-[#01163B] mb-3">
                  Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01163B] tracking-tight">
                  About the Project
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.overview}
                </p>

                {/* Secondary Showcase Mockup */}
                {project.mockups[1] && (
                  <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-[#f0f4fa] aspect-[16/9] relative">
                    <Image
                      src={project.mockups[1]}
                      alt="Project showcase secondary mockup"
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                )}
              </div>

              {/* Section 2: The Challenge */}
              <div id="challenge" className="scroll-mt-32 pt-8 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-50 px-3.5 py-1 text-xs font-semibold text-red-700 mb-3">
                  The Hurdle
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01163B] tracking-tight">
                  The Key Challenges
                </h2>
                <div className="mt-6 space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-2xs"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700 font-bold text-xs mt-0.5">
                        !
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: The Solution */}
              <div id="solution" className="scroll-mt-32 pt-8 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-3">
                  Our Engineering Approach
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01163B] tracking-tight">
                  The Architectural Solution
                </h2>
                <div className="mt-6 space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-[#f0f4fa]/40 p-4 shadow-2xs"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#01163B] text-white font-bold text-xs mt-0.5">
                        ✓
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Key Metrics & Results */}
              <div id="results" className="scroll-mt-32 pt-8 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-3.5 py-1 text-xs font-semibold text-[#01163B] mb-3">
                  Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01163B] tracking-tight">
                  Measurable Business Outcomes
                </h2>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-gray-200 bg-[#01163B] p-5 text-white text-center shadow-md flex flex-col justify-center"
                    >
                      <p className="text-2xl sm:text-3xl font-black text-white">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium text-blue-200 leading-tight">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Embedded Dynamic Contact Form */}
      <ContactSection />
    </>
  );
}
