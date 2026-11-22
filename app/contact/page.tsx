import type { Metadata } from "next";
import { contactInfo } from "@/data/content";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zenvisoft. Send us a message and our technical leads will respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand to-brand-light py-20 lg:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            Let&apos;s Connect
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {contactInfo.heading}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {contactInfo.subheading}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact Details Side */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Direct Inquiries
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Whether you are planning a new software build, modernizing legacy systems, or scaling your team, we are ready to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface/50 border border-gray-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-bold text-gray-900 hover:text-brand transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface/50 border border-gray-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone Support</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-base font-bold text-gray-900 hover:text-brand transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface/50 border border-gray-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Headquarters</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      {contactInfo.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{contactInfo.availability}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="rounded-2xl border border-brand/10 bg-brand/5 p-6">
                <h4 className="text-sm font-bold text-brand">What happens next?</h4>
                <ol className="mt-3 space-y-2 text-xs text-gray-700 list-decimal list-inside">
                  <li>An engineering director reviews your submission</li>
                  <li>We sign an NDA upon request before detailed scoping</li>
                  <li>You receive an initial technical feasibility & estimate</li>
                </ol>
              </div>
            </div>

            {/* Dynamic Contact Form */}
            <div className="lg:col-span-3 rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
