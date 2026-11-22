import { stats } from "@/data/content";

export default function StatsSection() {
  return (
    <section className="bg-brand py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
