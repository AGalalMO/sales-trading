const markets = [
  {
    code: "EG",
    country: "Egypt",
    status: "Active market",
    badge: "",
    cities: [],
    points: [
     
    ],
    highlight: false,
  },
  {
    code: "SA",
    country: "Kingdom of Saudi Arabia",
    status: "Active market",
    cities: [],
    points: [],
    badge: '',
    highlight: true,

  },
  {
    code: "AE",
    country: "United Arab Emirates",
    status: "Active market",
    cities: [],
    points: [],
  },
];

export default function MarketsSection() {
  return (
    <section className="border-b border-white/10 bg-[#031310] py-20 sm:py-24">
      <div className="content-wrap">
        <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Markets we serve</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Three countries. One operating standard.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-emerald-50/70 sm:text-2xl">
          Egypt is home and command center. KSA and UAE extend the same compliance posture across the region.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {markets.map((market) => (
            <article
              key={market.country}
              className={`rounded-xl border border-emerald-200/15 p-3 py-6 group ${market.highlight
                ? "bg-[linear-gradient(145deg,rgba(13,90,69,0.28),rgba(1,27,24,0.9))]"
                : "bg-[linear-gradient(145deg,rgba(7,42,36,0.25),rgba(1,24,22,0.86))] hover:bg-[linear-gradient(145deg,rgba(13,90,69,0.28),rgba(1,27,24,0.9))]"
                }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg text-sm font-semibold ${market.highlight
                      ? "bg-emerald-400 text-[#053126]"
                      : "bg-emerald-300/10 text-emerald-100 group-hover:bg-emerald-400 group-hover:hover:text-[#053126]"
                      }`}
                  >
                    {market.code}
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium leading-tight text-emerald-50">{market.country}</h3>
                    <p className="text-sm text-emerald-50/65">{market.status}</p>
                  </div>
                </div>
                {market.badge && (
                  <span className="rounded-sm bg-emerald-400/18 px-2 py-1 text-[11px] font-semibold text-emerald-100">
                    {market.badge}
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm text-emerald-50/55">{market.cities.join("  •  ")}</p>

              <ul className="mt-5 space-y-2  pt-4 text-lg text-emerald-50/76">
                {market.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-emerald-300">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}