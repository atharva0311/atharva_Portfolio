import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-padding border-t border-white/10 py-10">
      <div className="cinematic-shell flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="font-display text-3xl tracking-wider text-white">
          ATHARVA<span className="text-neon">.</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
          © 2026 {personal.name} · Built with Next.js 15, TypeScript, Tailwind CSS v4 & Framer Motion
        </p>
        <a href="#home" className="font-mono text-xs uppercase tracking-[0.18em] text-neon">Back to top</a>
      </div>
    </footer>
  );
}
