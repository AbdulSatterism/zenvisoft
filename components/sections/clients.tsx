import { clientLogos } from "@/data/content";

export default function ClientsSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by high-growth startups & enterprise innovators worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 text-sm font-bold tracking-tight text-gray-700 hover:text-brand transition-colors"
            >
              <div className="h-6 w-6 rounded-md bg-brand/10 flex items-center justify-center text-brand font-black text-xs">
                {client.name.charAt(0)}
              </div>
              <span>{client.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
