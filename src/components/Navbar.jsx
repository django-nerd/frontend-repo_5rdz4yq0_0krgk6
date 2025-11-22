import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-blue-500" />
          <span className="text-sm font-semibold tracking-wide text-white">Tech VA</span>
        </a>

        <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>

        <ul className="hidden items-center gap-6 text-sm text-blue-100/80 sm:flex">
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#work" className="hover:text-white">Work</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/90 px-6 py-3">
          <ul className="flex flex-col gap-3 text-sm text-blue-100/80">
            <li><a href="#services" className="block py-1">Services</a></li>
            <li><a href="#work" className="block py-1">Work</a></li>
            <li><a href="#contact" className="block py-1">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
