import { Menu, Truck, Package, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="inline-flex items-center gap-2 text-white">
              <div className="grid h-9 w-9 place-content-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight">LogiTech Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="px-6 pb-4 md:hidden">
              <nav className="grid gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-4 border-t border-white/10 pt-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
