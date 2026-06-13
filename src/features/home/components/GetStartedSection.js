export default function GetStartedSection() {
  return (
    <section className="bg-[#02110f] py-20 sm:py-24">
      <div className="content-wrap">
        <div className="overflow-hidden rounded-2xl border border-emerald-200/18 bg-[radial-gradient(circle_at_50%_15%,rgba(45,212,191,0.2),rgba(1,23,20,0.95)_60%)]">
          <div className="px-4 py-14 text-center sm:px-12 sm:py-18">
            <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/85">Why Egypt ?</p>

            <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-7xl">
              Strategic Market Access 
            </h2>

           

            <div className="mt-9 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-3">
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex items-center justify-center"
              >
                Gateway to Africa & Middle East 
              </a>
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10  w-full md:flex-1 h-20 flex items-center justify-center"
              >
                Growing demand across sectors 
              </a>
     
             
            </div>
            <div className="mt-9 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-3">
           
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex items-center justify-center"
              >
                Strong import opportunities
              </a>
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex items-center justify-center"
              >
                Central logistics location              </a>

            </div>
          </div>

          <div className="border-t border-emerald-100/12 bg-[linear-gradient(90deg,rgba(16,185,129,0.08),rgba(45,212,191,0.05),rgba(16,185,129,0.08))] px-6 py-5 text-center text-sm text-emerald-50/55 sm:text-base">
SALEC Trading | BARQ Systems Group          </div>
        </div>
      </div>
    </section>
  );
}