import Link from "next/link";
import { pricingPlans } from "@/data/content";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Flexible Engagements
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transparent Pricing Models Designed to Scale
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the engagement framework that matches your development velocity, technical scope, and team requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-brand text-white shadow-2xl ring-2 ring-brand scale-105 z-10"
                  : "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-lg"
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                      plan.highlighted
                        ? "bg-white/20 text-white"
                        : "bg-brand/10 text-brand"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={`mt-3 text-sm leading-6 ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`text-xs ${plan.highlighted ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5 border-t border-gray-200/20 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted
                            ? "bg-accent-light text-brand"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      <span className={plan.highlighted ? "text-gray-200" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 w-full rounded-full py-3.5 px-6 text-sm font-semibold transition-all shadow-sm ${
                    plan.highlighted
                      ? "bg-white text-brand hover:bg-gray-100"
                      : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
