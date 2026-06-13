const reasons = [
  {
    title: "Licensed where it matters",
    description:
      "Active accreditation with the Egyptian Customs Authority, GAFI, and the Ministry of Trade. Audit-grade documentation on every shipment.",
    proof: "Customs license #4029-A",
  },
  {
    title: "Trusted when it counts",
    description:
      "Born from BARQ Systems Group in 2009. The same team that built telecom rollouts across MENA now moves the gear that powers them.",
    proof: "15+ years in MENA",
  },
  {
    title: "Anchored in Egypt",
    description:
      "Headquartered in Cairo with offices in Riyadh and Dubai. We are not a forwarder bolted onto a foreign desk.",
    proof: "Cairo · Riyadh · Dubai",
  },
];

export default function WhySalecSection() {
  return (
    <section className="border-b border-white/10 bg-[#031311] py-20 sm:py-24">
      <div className="content-wrap">
        <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Why SALEC</p>
        <h2 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
Licensed & Trusted in Egypt        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-emerald-50/70 sm:text-2xl">
          Three reasons enterprise teams pick SALEC as their first call when shipping into Egypt.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl border border-emerald-200/15 bg-[linear-gradient(145deg,rgba(8,44,40,0.34),rgba(1,24,22,0.88))] px-6 py-6 sm:px-7 sm:py-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-300/12 text-emerald-300">
                <span className="h-3.5 w-3.5 rotate-45 rounded-xs bg-emerald-300" />
              </div>

              <h3 className="mt-5 text-5xl font-medium leading-tight text-emerald-50">{reason.title}</h3>
              <p className="mt-4 text-2xl leading-relaxed text-emerald-50/64">{reason.description}</p>

              <div className="mt-6 border-t border-emerald-100/14 pt-4">
                <p className="text-sm tracking-[0.08em] text-emerald-200/72">• {reason.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}