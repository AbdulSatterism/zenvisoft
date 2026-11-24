"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, navCta, siteConfig } from "@/data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-1" aria-label="Zenvisoft Home">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={195}
            height={51}
            priority
            unoptimized
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${isActive
                  ? "text-[#01163B] font-bold"
                  : "text-gray-600 hover:text-[#01163B]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (#01163B) */}
        <div className="hidden md:flex items-center">
          <Link
            href={navCta.href}
            className="inline-flex items-center justify-center rounded-full bg-[#01163B] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#01163B]/25 hover:bg-[#0a2a5e] hover:shadow-lg hover:shadow-[#01163B]/35 transition-all duration-200"
          >
            {navCta.label}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-[15px] font-medium text-gray-700 hover:text-[#01163B]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href={navCta.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#01163B] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#0a2a5e] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {navCta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
