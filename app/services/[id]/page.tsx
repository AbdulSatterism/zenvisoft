import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData, siteConfig } from "@/data/content";
import CtaBanner from "@/components/sections/cta-banner";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return servicesData.items.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.items.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services | Zenvisoft`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = servicesData.items.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* 1. Hero Section (Exact Figma Dark Gradient & Mockup) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#01163B] via-[#051c4a] to-[#01163B] text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#1E56A0]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3B7DDD]/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-blue-200/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-white/10 px-3.5 py-1 text-xs font-semibold text-blue-200 backdrop-blur-sm mb-4">
                {service.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                {service.title}
              </h1>

              <p className="mt-3 text-lg font-medium text-blue-100">
                {service.subtitle}
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3 text-xs font-bold text-[#01163B] shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
                >
                  Start a project
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white hover:bg-white/15 transition-all"
                >
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Proof */}
              <div className="mt-10 flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex -space-x-2">
                  <span className="inline-block h-8 w-8 rounded-full bg-blue-500 ring-2 ring-[#01163B] flex items-center justify-center text-[10px] font-bold text-white">
                    ZS
                  </span>
                  <span className="inline-block h-8 w-8 rounded-full bg-emerald-500 ring-2 ring-[#01163B] flex items-center justify-center text-[10px] font-bold text-white">
                    AI
                  </span>
                  <span className="inline-block h-8 w-8 rounded-full bg-purple-500 ring-2 ring-[#01163B] flex items-center justify-center text-[10px] font-bold text-white">
                    UI
                  </span>
                </div>
                <div className="text-xs text-blue-200">
                  <span className="font-bold text-white">4.9/5 Rating</span> from 200+ fast-growing startups
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/5 p-6 backdrop-blur-md border border-white/15 shadow-2xl flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={420}
                  height={420}
                  className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Deliverables / Offerings (4 Columns) */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B] mb-3">
              Core Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01163B] tracking-tight">
              What we offer in {service.title}
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Battle-tested technical and design deliverables engineered to turn complex roadmaps into deployed reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs hover:border-[#01163B] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f4fa] text-[#01163B] font-bold text-xs mb-4 group-hover:bg-[#01163B] group-hover:text-white transition-colors">
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#01163B] group-hover:text-[#1E56A0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-[11px] font-semibold text-[#01163B]">
                  Production-Ready Standard ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process Section (4 Step Cards) */}
      <section className="bg-[#f0f4fa]/60 py-20 border-b border-gray-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-white px-4 py-1 text-xs font-semibold text-[#01163B] mb-3">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01163B] tracking-tight">
              How we deliver {service.title}
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              A transparent, milestone-driven framework providing real-time visibility from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-white p-6 border border-gray-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#01163B] px-2.5 py-0.5 text-[10px] font-bold text-white">
                      Step {step.step}
                    </span>
                    <span className="text-xs font-bold text-gray-300">Phase 0{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#01163B]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Split Feature Section (Why Us) */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Container with Floating Stats */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/figma/mission.png"
                  alt="Zenvisoft Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#01163B] text-white font-black text-sm">
                    {service.whyUs.stat.value}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#01163B]">Proven Excellence</p>
                    <p className="text-[11px] text-gray-500">{service.whyUs.stat.label}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Benefits Checklist */}
            <div className="lg:col-span-6 lg:pl-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-3.5 py-1 text-xs font-semibold text-[#01163B] mb-4">
                Why Zenvisoft
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01163B] tracking-tight">
                {service.whyUs.heading}
              </h2>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {service.whyUs.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.whyUs.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01163B] text-white text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#01163B] px-7 py-3 text-xs font-bold text-white shadow-md hover:bg-[#0a2a5e] transition-all"
                >
                  Consult with an engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technologies Stack */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Technologies & Tools We Use Everyday
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {service.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-[#f0f4fa]/50 px-4 py-2.5 shadow-2xs hover:border-[#01163B] transition-colors"
              >
                <span className="text-xs font-bold text-[#01163B]">{tech.name}</span>
                <span className="text-[11px] text-gray-400">· {tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CtaBanner />
    </>
  );
}
