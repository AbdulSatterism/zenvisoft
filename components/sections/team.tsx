import { teamMembers } from "@/data/content";

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/40" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Executive Leadership
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Minds Behind Zenvisoft
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A seasoned team of technologists, architects, and product leads committed to engineering excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              {/* Avatar Initials Badge */}
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-brand via-brand-light to-accent text-2xl font-black text-white shadow-md group-hover:scale-105 transition-transform">
                {member.initials}
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-1">
                {member.role}
              </p>
              <p className="mt-3 text-xs leading-5 text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
