import Image from "next/image";
import { missionVisionData } from "@/data/content";

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-16 lg:py-24" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mission Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-[#F9F9FC] p-8 lg:p-10 shadow-xs">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
                {missionVisionData.mission.badge}
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#01163B] sm:text-3xl leading-snug">
                {missionVisionData.mission.heading}
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                {missionVisionData.mission.description}
              </p>
            </div>

            {/* Mission Image */}
            <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src={missionVisionData.mission.image}
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-[#F9F9FC] p-8 lg:p-10 shadow-xs">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#01163B] bg-[#f0f4fa] px-4 py-1 text-xs font-semibold text-[#01163B]">
                {missionVisionData.vision.badge}
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#01163B] sm:text-3xl leading-snug">
                {missionVisionData.vision.heading}
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                {missionVisionData.vision.description}
              </p>
            </div>

            {/* Vision Image */}
            <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src={missionVisionData.vision.image}
                alt="Our vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
