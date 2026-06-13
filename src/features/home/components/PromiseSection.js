const metrics = [
    { value: "17+", label: "Years" },
    { value: "12.4K", label: "Solutions Provided" },
    { value: "98.6%", label: "On-time delivery" },
];

export default function PromiseSection () {
    return (
        <section className="border-b border-white/10 bg-[#031614] py-20 sm:py-24">
            <div className="content-wrap">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">About us</p>

                <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Who We Are ?
                    <span className="block text-emerald-50/55">It&apos;s about entering with confidence.</span>
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-emerald-50/70 sm:text-lg">
                    SALEC Trading, the trading arm of BARQ Systems.
                    was established under Law No. 159 of 1981 (Reg. No. 39878) on July 6, 2009.
                    We provide Importer of Record (IOR) services and end-to-end supply chain solutions across a wide range of products and commodities.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-emerald-100/12 bg-emerald-100/10 sm:grid-cols-1 lg:grid-cols-3">
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
