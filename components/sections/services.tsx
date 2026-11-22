import Link from "next/link";
import { services } from "@/data/content";
import { ServiceIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Our Capabilities
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Engineered for Precision, Scale & Performance
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide full-lifecycle digital engineering services to help startups, scale-ups, and enterprises innovate rapidly.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon icon={service.icon} className="w-7 h-7" />
                  </div>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-gray-600">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-brand">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <ul className="mt-6 space-y-2 border-t border-gray-100 pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckIcon className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:text-accent transition-colors"
                >
                  <span>Request Consultation</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
