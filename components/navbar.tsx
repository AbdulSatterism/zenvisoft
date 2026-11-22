"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, navCta, siteConfig } from "@/data/content";
import { MenuIcon, XIcon, ArrowRightIcon } from "@/components/icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={165}
            height={42}
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 hover:text-brand transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right CTA Button (Pill Button Matching Node 55:2215) */}
        <div className="hidden lg:flex items-center">
          <Link
            href={navCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-light hover:shadow-md transition-all duration-200"
          >
            <span>{navCta.label}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-brand transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href={navCta.href}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-light transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <span>{navCta.label}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
