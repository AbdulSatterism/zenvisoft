"use client";

import Link from "next/link";
import { footerData, siteConfig } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#EBEBEE] text-[#01163B] pt-16 pb-12 overflow-hidden border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Col 1: Skills / Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Skills / Services
            </h4>
            <ul className="space-y-2.5">
              {footerData.skillsServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-[#01163B] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Sitemap */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2.5">
              {footerData.sitemap.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-[#01163B] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: WhatsApp & Back to Top */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#00A859] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#00924d] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.572 5.856 6.001-1.574c1.691.924 3.633 1.458 5.707 1.458 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                </svg>
                <span>Whatsapp</span>
                <span className="text-white">↗</span>
              </a>

              {/* Scroll to Top Circle Button */}
              <button
                type="button"
                onClick={scrollToTop}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-[#01163B] transition-colors"
                aria-label="Scroll to top"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>

            {/* Email Contact info */}
            <div className="text-left md:text-right">
              <p className="text-xs text-gray-500">Send me an email</p>
              <a
                href={`mailto:${footerData.email}`}
                className="text-sm font-bold text-[#01163B] hover:text-[#1E56A0] transition-colors"
              >
                {footerData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-gray-300/60">
          <p className="text-xs text-gray-500">
            {footerData.copyright}
          </p>
        </div>

        {/* Giant Watermark Typography across bottom: "Zenvisoft SOFTWARE COMPANY" */}
        <div className="mt-6 select-none pointer-events-none">
          <p className="text-[48px] sm:text-[80px] lg:text-[110px] font-black text-[#01163B]/10 tracking-tight leading-none whitespace-nowrap overflow-hidden">
            Zenvisoft <span className="text-[30px] sm:text-[45px] lg:text-[60px] font-normal text-[#01163B]/10">SOFTWARE COMPANY</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
