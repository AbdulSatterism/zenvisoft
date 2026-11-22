import Link from "next/link";
import { heroContent } from "@/data/content";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface/40 to-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background radial gradient decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-40 left-1/4 h-[420px] w-[500px] rounded-full bg-accent-light/15 blur-[120px]" />
        <div className="absolute -top-20 right-1/4 h-[380px] w-[450px] rounded-full bg-brand/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            {heroContent.badge}
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            We Engineer High-Impact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-accent to-accent-light">
              Digital Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl font-normal max-w-2xl mx-auto">
            {heroContent.subheading}
          </p>

          {/* Dual Pill CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-light hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 shadow-sm hover:border-brand hover:text-brand transition-all duration-200 w-full sm:w-auto"
            >
              <span>{heroContent.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Quick trust metrics snippet */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-gray-500">
            {heroContent.statsSnippet.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span>
                  <strong className="text-gray-900 font-semibold">{s.value}</strong> {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Fidelity Interactive Dashboard Preview Card (Directly reflecting Figma Screen 1) */}
        <div className="mt-16 sm:mt-20">
          <div className="relative rounded-2xl border border-gray-200/80 bg-white p-3 sm:p-5 shadow-2xl ring-1 ring-gray-900/5 backdrop-blur">
            {/* Window controls bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-medium text-gray-400 hidden sm:inline">
                  zenvisoft-analytics.app
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                <span>Production Live</span>
              </div>
            </div>

            {/* Dashboard Inner Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Metric Card 1 */}
              <div className="rounded-xl border border-gray-100 bg-surface/50 p-4">
                <p className="text-xs font-medium text-gray-500">Monthly Active Users</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">428,910</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-medium">
                  <span>+18.4%</span>
                  <span className="text-gray-400 font-normal">vs last month</span>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="rounded-xl border border-gray-100 bg-surface/50 p-4">
                <p className="text-xs font-medium text-gray-500">Avg Response Time</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">42 ms</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-medium">
                  <span>99.99%</span>
                  <span className="text-gray-400 font-normal">SLA reliability</span>
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="rounded-xl border border-gray-100 bg-surface/50 p-4">
                <p className="text-xs font-medium text-gray-500">API Transactions</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">14.8M</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-medium">
                  <span>+32%</span>
                  <span className="text-gray-400 font-normal">throughput</span>
                </div>
              </div>

              {/* Metric Card 4 */}
              <div className="rounded-xl border border-gray-100 bg-surface/50 p-4">
                <p className="text-xs font-medium text-gray-500">Cloud Security Score</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">100 / 100</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-blue-600 font-medium">
                  <span>Zero Alerts</span>
                  <span className="text-gray-400 font-normal">A+ SSL rating</span>
                </div>
              </div>
            </div>

            {/* Chart Simulation */}
            <div className="mt-4 rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Platform Traffic & Compute Telemetry</h4>
                  <p className="text-xs text-gray-500">Real-time load balancing distribution</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-md bg-brand px-2.5 py-1 text-xs font-medium text-white">Real-Time</span>
                  <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">30 Days</span>
                </div>
              </div>

              {/* Clean SVG Line Graph */}
              <div className="h-44 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 800 150" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#01163B" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#01163B" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,110 C80,85 160,120 240,65 C320,10 400,90 480,40 C560,-10 640,75 720,30 C760,10 800,20 800,20 L800,150 L0,150 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,110 C80,85 160,120 240,65 C320,10 400,90 480,40 C560,-10 640,75 720,30 C760,10 800,20 800,20"
                    stroke="#01163B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Highlight point */}
                  <circle cx="480" cy="40" r="5" fill="#1e56a0" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
