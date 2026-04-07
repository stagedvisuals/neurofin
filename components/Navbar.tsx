"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "features", label: "Features" },
  { id: "stats", label: "Impact" },
  { id: "pricing", label: "Prijzen" },
  { id: "roadmap", label: "Roadmap" },
  { id: "tech", label: "Stack" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 border border-white/20 rounded-sm flex items-center justify-center group-hover:border-white/40 transition-colors">
            <span className="text-xs font-mono font-bold">N</span>
          </div>
          <span className="text-sm font-display font-medium tracking-wider uppercase">
            NeuroFin
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-xs font-mono text-white/40 hover:text-white transition-colors tracking-wider uppercase"
            >
              {n.label}
            </button>
          ))}
          <button className="text-xs font-mono text-black bg-white px-5 py-2 hover:bg-white/90 transition-colors tracking-wider uppercase">
            Early Access
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white text-lg"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl px-6 py-6">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="block w-full text-left text-sm font-mono text-white/50 hover:text-white py-3 tracking-wider uppercase transition-colors"
            >
              {n.label}
            </button>
          ))}
          <button className="mt-4 w-full text-xs font-mono text-black bg-white px-5 py-3 tracking-wider uppercase">
            Early Access
          </button>
        </div>
      )}
    </nav>
  );
}