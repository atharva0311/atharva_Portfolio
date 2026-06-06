"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-[var(--accent)]" />
        <span className="muted-label">{eyebrow}</span>
      </div>
      <h2 className="font-display text-[clamp(3rem,8vw,6.4rem)] uppercase leading-[0.88] tracking-wide text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
