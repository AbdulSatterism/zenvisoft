import Image from "next/image";
import { teamData } from "@/data/content";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Header */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
          {teamData.badge}
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#01163B] sm:text-4xl lg:text-[42px]">
          {teamData.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
          {teamData.subheading}
        </p>

        {/* 4 Team Member Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.members.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100 shadow-sm"
            >
              {/* Photo */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01163B]/95 via-[#01163B]/40 to-transparent flex flex-col justify-end p-5 text-white text-center">
                <h3 className="text-base font-bold text-white leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  {member.role}
                </p>

                {/* Social icons */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <a
                    href={member.socials.facebook}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-[#01163B] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-[#01163B] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-[#01163B] transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
