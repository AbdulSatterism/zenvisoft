"use client";

import { useState, type FormEvent } from "react";
import { SpinnerIcon, CheckIcon, ArrowRightIcon } from "@/components/icons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) {
      e.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) e.subject = "Project subject is required";
    if (!form.message.trim()) {
      e.message = "Project message is required";
    } else if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50/60 p-8 text-center animate-in fade-in duration-300">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-green-900">
          Message Received Successfully!
        </h3>
        <p className="mt-2 text-sm text-green-800 max-w-md mx-auto">
          Thank you for reaching out to Zenvisoft. An engineering lead will review your requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors shadow-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700 animate-in fade-in">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-brand/20 ${
              errors.name ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-brand"
            }`}
            placeholder="Sarah Connor"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`mt-2 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-brand/20 ${
              errors.email ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-brand"
            }`}
            placeholder="sarah@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
          Project Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={`mt-2 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-brand/20 ${
            errors.subject ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-brand"
          }`}
          placeholder="New SaaS Platform Development / Dedicated Team"
        />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
          Project Scope & Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`mt-2 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition-all resize-none focus:ring-2 focus:ring-brand/20 ${
            errors.message ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-brand"
          }`}
          placeholder="Tell us about your project goals, timelines, budget expectations, and target technology stack..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-light hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <SpinnerIcon className="w-4 h-4" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <ArrowRightIcon className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
