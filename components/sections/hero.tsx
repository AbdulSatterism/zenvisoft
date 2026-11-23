import Link from "next/link";
import { heroContent } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-28 lg:pt-28 lg:pb-36">
      {/* Brand #01163B background ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="h-[520px] w-[880px] -translate-y-12 bg-gradient-to-b from-[#f0f4fa]/90 via-[#f8faff]/50 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-10 left-1/4 h-80 w-32 bg-[#01163B]/5 blur-2xl rounded-full" />
        <div className="absolute top-10 right-1/4 h-80 w-32 bg-[#1E56A0]/5 blur-2xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-[#01163B] sm:text-6xl lg:text-[64px] lg:leading-[1.12]">
          {heroContent.headingPart1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01163B] via-[#1E56A0] to-[#3B7DDD]">
            {heroContent.headingAccent}
          </span>{" "}
          {heroContent.headingPart2}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 font-normal">
          {heroContent.subheading}
        </p>

        {/* Dual CTA buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href={heroContent.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-[#01163B] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#01163B]/30 hover:bg-[#0a2a5e] hover:shadow-lg hover:shadow-[#01163B]/40 hover:-translate-y-0.5 transition-all duration-200 min-w-[170px]"
          >
            {heroContent.primaryCta.label}
          </Link>

          <a
            href={heroContent.whatsappCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-[#01163B] shadow-xs hover:border-[#01163B] hover:bg-[#f0f4fa] hover:-translate-y-0.5 transition-all duration-200 min-w-[200px]"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.572 5.856 6.001-1.574c1.691.924 3.633 1.458 5.707 1.458 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
            <span>{heroContent.whatsappCta.label}</span>
          </a>
        </div>

        {/* Social Proof Avatars */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <p className="text-xs font-medium text-gray-500">
            {heroContent.trustedText}
          </p>

          <div className="flex items-center -space-x-2">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Client avatar"
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[11px] font-bold text-gray-600">
              +
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
