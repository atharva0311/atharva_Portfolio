"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personal } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 py-4"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 md:px-6 ${
            scrolled ? "glass-card border-white/15" : "border border-transparent bg-transparent"
          }`}
          aria-label="Main navigation"
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Atharva Shinde home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] font-display text-2xl tracking-wider text-neon">AS</span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.28em] text-white/70 sm:block">Portfolio</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/62 transition hover:bg-white/10 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <a href={`mailto:${personal.email}`} className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_35px_rgba(191,255,0,.28)] transition hover:scale-105 md:inline-flex">
            Hire Me
          </a>

          <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white md:hidden" aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/90 px-6 pt-28 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-5xl uppercase tracking-wider text-white">
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
