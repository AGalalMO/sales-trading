const metrics = [
    { value: "15+", label: "Years in MENA logistics" },
    { value: "12.4K", label: "Shipments cleared" },
    { value: "98.6%", label: "On-time delivery" },
    { value: "< 48h", label: "Avg customs clearance" },
];

export default function PromiseSection () {
    return (
        <section className="border-b border-white/10 bg-[#031614] py-20 sm:py-24">
            <div className="content-wrap">
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/80">The SALEC Promise</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    It&apos;s not just about moving shipments.
                    <span className="block text-emerald-50/55">It&apos;s about entering with confidence.</span>
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50/70 sm:text-lg">
                    Every container you send into Egypt carries documentation, customs, and timeline risk.
                    SALEC absorbs all three under one license and one team so market entry does not depend on luck.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-emerald-100/12 bg-emerald-100/10 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric) => (
                        <article key={metric.label} className="bg-[#062321] px-6 py-7">
                            <p className="text-4xl font-semibold text-white">{metric.value}</p>
                            <p className="mt-1 text-sm text-emerald-50/65">{metric.label}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
