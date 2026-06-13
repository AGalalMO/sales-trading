const steps = [
  {
    number: "01",
    title: "Registered",
    description: "with the National Telecom Regulatory Authority (NTRA)",
    icon: "diamond",
  },
  {
    number: "02",
    title: "Authorized",
    description:
      "to import electronics shipments ",
    icon: "diamond",
  },
  {
    number: "03",
    title: "Serving",
    description:
      "Serving major telecom and industrial companies in Egypt",
    icon: "circle",
  },
  {
    number: "04",
    title: "Strong",
    description:
      "compliance with local regulations",
    icon: "circle",
  },
  
];

function StepIcon({ icon }) {
  if (icon === "circle") {
    return <span className="h-3 w-3 rounded-full bg-emerald-300" />;
  }

  if (icon === "half") {
    return (
      <span className="relative h-3 w-3 overflow-hidden rounded-full border border-emerald-300">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-emerald-300" />
      </span>
    );
  }

  if (icon === "outlined") {
    return <span className="h-3 w-3 rotate-45 rounded-xs border border-emerald-300" />;
  }

  return <span className="h-3 w-3 rotate-45 rounded-xs bg-emerald-300" />;
}

export default function ClearRouteSection() {
  return (
    <section className="border-b border-white/10 bg-[#021210] py-20 sm:py-24">
      <div className="content-wrap">
        <p className="text-xs uppercase tracking-[0.14em] text-emerald-300/85">Why SALEC</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Licensed & Trusted in Egypt
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-emerald-50/70 sm:text-2xl">
          Designed to make market entry boring in the way that compounding returns are boring.
        </p>

        <div className="mt-11 rounded-2xl border border-emerald-100/12 bg-[linear-gradient(145deg,rgba(8,44,40,0.34),rgba(1,19,17,0.88))] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {steps.map((step) => (
              <article key={step.number} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-200/18 bg-emerald-300/10 text-emerald-300">
                  <StepIcon icon={step.icon} />
                </div>

                <span className="mt-5 inline-block rounded-sm bg-white/6 px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-emerald-50/55">
                  {step.number}
                </span>
                <h3 className="mt-2 text-3xl font-medium leading-tight text-emerald-50">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-emerald-50/62">{step.description}</p>

                <div className="absolute left-14 top-6 hidden h-px w-[calc(100%-2.8rem)] border-t border-dashed border-emerald-300/30 lg:block" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}