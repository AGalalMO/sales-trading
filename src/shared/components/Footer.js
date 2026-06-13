

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020f0e]">
      <div className="content-wrap py-12 sm:py-12">
        <div className="">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-emerald-400/20 text-lg font-bold text-emerald-300">
              <img src="/logoGreen.svg" className="rounded-lg w-[100px]"/>
              </div>
              <div className="text-sm leading-tight text-emerald-50/80">
                <p className="font-semibold">SALES Trading</p>
                <p className="text-xs text-emerald-50/55"> salec © 2009</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1 text-xs text-emerald-50/60">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>

       

       
      </div>
    </footer>
  );
}
