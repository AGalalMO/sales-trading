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
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex flex-col items-center justify-center"
              >
                <span>Gatewayy to Africa & Middle East</span>
              </a>
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10  w-full md:flex-1 h-20 flex flex-col items-center justify-center"
              >
                <span>Growing demand across sectors</span>
              </a>
     
             
            </div>
            <div className="mt-9 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-3">
           
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex flex-col items-center justify-center"
              >
                <span>Strong import opportunities</span>
              </a>
              <a
                className="rounded-xl border border-emerald-100/20 bg-white/4 px-8 py-3 text-lg font-medium text-emerald-50/90 transition-colors hover:bg-white/10 w-full md:flex-1 h-20 flex flex-col items-center justify-center"
              >
                <span>Central logistics location</span>
              </a>

            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}