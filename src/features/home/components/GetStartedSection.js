export default function GetStartedSection() {
  return (
    <section className="bg-[#02110f] py-20 sm:py-24">
      <div className="content-wrap">
        <div className="overflow-hidden rounded-2xl border border-emerald-200/18 bg-[radial-gradient(circle_at_50%_15%,rgba(45,212,191,0.2),rgba(1,23,20,0.95)_60%)]">
          <div className="px-6 py-14 text-center sm:px-12 sm:py-18">
            <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/85">Get Started</p>

            <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-7xl">
              From compliance to delivery, take the clear route.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-emerald-50/70 sm:text-3xl">
              Tell us what you ship, where it comes from, where it needs to land.
              We respond within one business day with a routing plan and indicative quote.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-xl bg-emerald-400 px-8 py-3 text-lg font-semibold text-[#03231f] transition-transform hover:-translate-y-0.5">
                Contact our team →
              </button>
              <a
                href="tel:+20224800100"
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10"
              >
                Call +20 2 2480 0100
              </a>
            </div>
          </div>

          <div className="border-t border-emerald-100/12 bg-[linear-gradient(90deg,rgba(16,185,129,0.08),rgba(45,212,191,0.05),rgba(16,185,129,0.08))] px-6 py-5 text-center text-sm text-emerald-50/55 sm:text-base">
            to send ・ hello@salec.eg ・ Smart Village, Cairo - Egypt
          </div>
        </div>
      </div>
    </section>
  );
}