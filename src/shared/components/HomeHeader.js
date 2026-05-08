const navItems = ["Services", "Process", "Industries", "Markets"];

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04120CCC] backdrop-blur-md">
      <div className="content-wrap flex h-18 items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-emerald-200/20 bg-emerald-400/10 px-2 py-1 text-xs font-semibold tracking-[0.18em] text-emerald-300">
            SALEC
          </div>
          <p className="hidden text-xs text-emerald-50/70 sm:block">BAS Systems Group</p>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-emerald-50/80 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-emerald-200">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm text-emerald-50/85 transition-colors hover:text-emerald-200 sm:block">
            Talk to sales
          </a>
          <button className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#02221e] transition-transform hover:-translate-y-0.5">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}