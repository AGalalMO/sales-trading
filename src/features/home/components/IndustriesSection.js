const industries = [
  { name: "Telecommunications", short: "TELECOM" },
  { name: "IT & Electronics", short: "IT" },
  { name: "Industrial & Manufacturing", short: "INDUSTRIAL" },
  { name: "General Trading & Commodities", short: "TRADE" },
  { name: " Infrastructure & Projects", short: "INFRA" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#02110f] py-20 sm:py-24">
      <div className="content-wrap">
        <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Key Sectors</p>
        <h2 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Built for the verticals that actually move volume.
        </h2>
       

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="rounded-xl border border-emerald-200/15 bg-[linear-gradient(145deg,rgba(8,44,40,0.28),rgba(1,24,22,0.84))] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-300">
                <span className="h-3 w-3 rounded-xs border border-emerald-300" />
              </div>

              <h3 className="mt-6 text-3xl font-medium leading-tight text-emerald-50 wrap-break-word">{industry.name}</h3>
              <span className="mt-6 inline-block rounded-sm border border-emerald-100/12 bg-white/6 px-2 py-1 text-xs tracking-[0.09em] text-emerald-50/62">
                {industry.short}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}