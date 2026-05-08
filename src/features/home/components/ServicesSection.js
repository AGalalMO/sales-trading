const services = [
    {
        title: "Importer of Record",
        description:
            "We are the legal importer in Egypt. You ship; we hold the license, file the paperwork, and absorb compliance risk.",
        tags: ["IOR", "Tax & duty", "No local entity"],
        featured: true,
    },
    {
        title: "Customs clearance",
        description:
            "Pre-arrival HS coding, accredited brokers at every port, and sub-48h average clearance for IT and telecom cargo.",
        tags: ["Port Said", "Alexandria", "Sokhna"],
    },
    {
        title: "Transportation",
        description:
            "Owned and partner fleet - FTL, LTL, temperature-controlled lanes, with cross-border capability into KSA and UAE.",
        tags: ["FTL", "LTL", "Cross-border"],
    },
    {
        title: "Warehousing",
        description:
            "Bonded and standard warehousing in Cairo and Alexandria with WMS-integrated kitting and SLA-backed dispatch.",
        tags: ["Bonded", "WMS", "Kitting"],
    },
    {
        title: "End-to-end supply chain",
        description:
            "One accountable contract from origin pickup to your customer's receiving dock - with monthly performance reporting.",
        tags: ["One contract", "One SLA", "One team"],
    },
];

function ServiceCard ({ service }) {
    return (
        <article className="rounded-xl border border-emerald-200/15 bg-[linear-gradient(145deg,rgba(8,44,40,0.44),rgba(1,24,22,0.86))] p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-300/12">
                    <span className="block h-2.5 w-2.5 rotate-45 rounded-xs bg-emerald-300" />
                </div>
                {service.featured && (
                    <span className="rounded-md border border-emerald-200/15 bg-emerald-400/18 px-2 py-1 text-[11px] leading-none text-emerald-100/90">
                        Most used
                    </span>
                )}
            </div>

            <h3 className="text-3xl font-medium leading-tight text-emerald-50/95 sm:text-[34px]">
                {service.title}
            </h3>

            <p className="mt-3 text-lg leading-relaxed text-emerald-50/62">{service.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-sm border border-emerald-100/12 bg-white/4 px-1.5 py-1 text-[10px] uppercase tracking-[0.08em] text-emerald-50/58"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href="#"
                className="mt-5 inline-flex items-center text-lg font-medium text-emerald-300 transition-colors hover:text-emerald-200"
            >
                Learn more
                <span className="ml-1">→</span>
            </a>
        </article>
    );
}

export default function ServicesSection () {
    return (
        <section className="border-t border-b border-white/10 bg-[#031311] py-18 sm:py-24">
            <div className="content-wrap max-w-6xl">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Services</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                    A complete logistics stack - under one license.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-emerald-50/70 sm:text-2xl">
                    From compliance to delivery, take the clear route. Five connected services operated as one product.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}