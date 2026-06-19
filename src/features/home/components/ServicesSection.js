const services = [
    {
        title: "Importer of Record",
        description:
            `Act as your legal importer in
Egypt — no local entity required`,
        tags: ["IOR"],
        featured: true,
    },
    {
        title: "Freight Coordination",
        description:
            `End-to-end shipping coordination
across air, sea, and land.`,
        tags: [],
    },
    {
        title: "Customs Clearance",
        description:
            "Full documentation handling and regulatory compliance at all ports of entry",
        tags: [], },
    {
        title: "Warehousing & Delivery",
        description:
            `Secure storage and last-mile
delivery across Egypt.`,
        tags: [],
    },
    {
        title: "Compliance Support",
        description:
            `Import documentation,
licensing, and regulatory guidance.`,
        tags: [],
    }, ];

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

          
        </article>
    );
}

export default function ServicesSection () {
    return (
        <section className="border-t border-b border-white/10 bg-[#031311] py-18 sm:py-24">
            <div className="content-wrap max-w-6xl">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Services</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                    A complete logistics stack - under one solution.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-emerald-50/70 sm:text-2xl">
                    From compliance to delivery, take the clear route. Five connected services operated as one product.
                </p>
                <div className="mt-10 grid gap-3 w-full">
                    <ServiceCard key={services[4].title} service={services[4]} />

                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                    {services?.slice(0,4).map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
               
            </div>
        </section>
    );
}