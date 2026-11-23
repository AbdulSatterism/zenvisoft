import Link from "next/link";
import Image from "next/image";
import { ctaBannerData } from "@/data/content";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#01163B] py-20 lg:py-24 text-white">
      {/* Background Image (Developer hands typing code) */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 opacity-70 pointer-events-none">
        <Image
          src={ctaBannerData.backgroundImage}
          alt="Developer coding background"
          fill
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01163B] via-[#01163B]/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            {ctaBannerData.heading}
          </h2>
          <p className="mt-4 text-base text-blue-200 leading-relaxed">
            {ctaBannerData.description}
          </p>
          <div className="mt-8">
            <Link
              href={ctaBannerData.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#01163B] shadow-md hover:bg-[#f0f4fa] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {ctaBannerData.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
