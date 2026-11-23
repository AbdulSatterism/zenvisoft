"use client";

import { useState } from "react";
import { contactSectionData } from "@/data/content";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMsg("Please fill in your name, email, and project details.");
      return;
    }

    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Project Inquiry (Budget: ${formData.budget || "Not specified"}) - Phone: ${formData.phone || "N/A"}`,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setStatus("success");
      setStatusMsg("Your message has been sent successfully! We'll reply within 24 hours.");
      setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setStatusMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
              {contactSectionData.badge}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px] leading-tight">
              {contactSectionData.heading}
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              {contactSectionData.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f4fa] text-[#01163B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href={`mailto:${contactSectionData.email}`} className="font-medium hover:text-[#01163B] transition-colors">
                  {contactSectionData.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f4fa] text-[#01163B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href={`tel:${contactSectionData.phone}`} className="font-medium hover:text-[#01163B] transition-colors">
                  {contactSectionData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-gray-100 bg-[#F9F9FC] p-8 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#01163B] focus:outline-none transition-colors"
                />
              </div>

              {/* Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#01163B] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#01163B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Your budget */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Your budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-[#01163B] focus:outline-none transition-colors"
                >
                  <option value="">-select your budget-</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              {/* Project details */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Project details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#01163B] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Feedback Alert */}
              {statusMsg && (
                <div
                  className={`rounded-xl p-3 text-xs font-semibold ${
                    status === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {statusMsg}
                </div>
              )}

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#01163B] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#01163B]/25 hover:bg-[#0a2a5e] hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <span>{status === "loading" ? "Sending..." : "Send"}</span>
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
