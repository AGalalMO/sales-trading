const routeItems = [
    { place: "END-TO-END IMPORT SOLUTIONS", label: "", state: "" },
    { place: "IOR SPECIALIST", label: "", state: "", active: true },
    { place: "TECHNOLOGY IMPORTS", label: "", state: "", },
    { place: "EGYPT MARKET ENTRY", label: "", state: "" },
];

export default function HeroSection () {
    return (
        <section className="relative overflow-hidden border-b border-white/10 bg-[#021211] py-18 sm:py-24">
            <div className="hero-glow" aria-hidden="true" />
            <div className="content-wrap relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-emerald-200/75">
                        <span className="rounded-full bg-emerald-400/20 px-3 py-1 font-medium text-emerald-200">
                            SALEC TRADING
                        </span>
                    </div>

                    <h1 className="max-w-2xl text-xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
                        Providing Importer of
Record (IOR)                        <span className="block text-emerald-300 mt-4">Market Access to Egyptian Market</span>
                    </h1>

                  

                  

                  
                </div>

                <div className="relative mx-auto w-full max-w-140">
                    <div className="rounded-2xl border border-emerald-100/10 bg-[#06201f]/75 p-4 shadow-[0_30px_80px_-35px_rgba(16,185,129,0.5)] backdrop-blur">
                       
                        <div className="space-y-2">
                            {routeItems.map((item) => (
                                <div
                                    key={item.place}
                                    className={`flex items-center justify-between rounded-lg border px-3 py-2 ${item.active
                                        ? "border-emerald-300/35 bg-emerald-300/10"
                                        : "border-emerald-100/10 bg-black/10"
                                        }`}
                                >
                                    <p className="text-sm font-medium text-emerald-50">
                                        {item.place}
                                        {item.label ? `  ${item.label}` : ""}
                                    </p>
                                    <p className="text-xs text-emerald-100/65">{item.state}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                   

                  
                </div>
            </div>
        </section>
    );
}
