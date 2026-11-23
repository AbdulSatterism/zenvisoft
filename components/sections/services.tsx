import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/content";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
              {servicesData.badge}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              {servicesData.heading}
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-md">
              {servicesData.description}
            </p>
          </div>

          {/* Right Column (Stack of 5 wide cards) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {servicesData.items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row items-center gap-5 rounded-2xl bg-[#F8F8FC] border border-gray-100 p-4 transition-all duration-200 hover:border-[#01163B]/30 hover:shadow-md"
              >
                {/* Left Thumbnail */}
                <div className="relative h-24 w-28 sm:h-28 sm:w-32 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Right Details */}
                <div className="flex-1 w-full flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-base font-bold text-[#01163B] group-hover:text-[#1E56A0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom row: Tool tags & See details button */}
                  <div className="mt-3.5 flex items-center justify-between border-t border-gray-200/50 pt-2.5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-white border border-gray-200/70 px-2 py-0.5 text-[10px] font-semibold text-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="rounded-full bg-white border border-gray-200 px-3.5 py-1 text-[11px] font-semibold text-gray-700 hover:border-[#01163B] hover:text-[#01163B] transition-colors shrink-0 ml-2"
                    >
                      See details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
