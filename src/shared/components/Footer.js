const sections = [
  {
    title: "Services",
    links: [
      "Importer of Record",
      "Customs clearance",
      "Transportation",
      "Warehousing",
      "End-to-end supply chain",
    ],
  },
  {
    title: "Markets",
    links: ["Egypt", "Saudi Arabia", "United Arab Emirates"],
  },
  {
    title: "Industries",
    links: ["Telecom", "IT & Electronics", "Industrial", "General Trading", "Infrastructure"],
  },
  {
    title: "Company",
    links: ["About SALEC", "BARQ Systems Group", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["IOR guide", "Customs FAQ", "Compliance updates", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020f0e]">
      <div className="content-wrap py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-[0.08em] text-emerald-50">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-emerald-50/65 transition-colors hover:text-emerald-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-lg font-bold text-emerald-300">
                S
              </div>
              <div className="text-sm leading-tight text-emerald-50/80">
                <p className="font-semibold">SALES Trading</p>
                <p className="text-xs text-emerald-50/55"> company © 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-emerald-50/60">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
