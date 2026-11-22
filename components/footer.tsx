import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLinks, socialLinks } from "@/data/content";
import { SocialIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-brand text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-gray-300 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white hover:text-brand transition-all"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Capabilities
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support & Engagement */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Get Started
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.support.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; 2026 {siteConfig.name}. All rights reserved. Designed to pixel-precision.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/contact" className="hover:text-white transition-colors">Security</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
