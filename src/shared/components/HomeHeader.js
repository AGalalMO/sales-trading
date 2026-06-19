const navItems = ["Services", "Process", "Industries", "Markets"];

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04120CCC] backdrop-blur-md">
      <div className="content-wrap flex h-18 items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" className="w-[220px] object-fill" />       
        </div>

        <nav className="hidden items-center gap-7 text-sm text-emerald-50/80 md:flex">
          <a className="underline" href="files/salec-company-Profile.pdf" download>Download Our Company Profile</a>
        </nav>

       
      </div>
    </header>
  );
}