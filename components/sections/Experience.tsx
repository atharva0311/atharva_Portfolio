"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding py-6 md:py-12">
      <div className="cinematic-shell">
        <SectionHeader eyebrow="Career Path" title="Experience Timeline" subtitle="Internship and training experience focused on AI/ML workflows, Python development, data analysis, and applied engineering problem solving." />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent)] via-white/12 to-transparent md:block" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                <span className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_25px_rgba(191,255,0,.8)] md:block" />
                <div className="glass-card rounded-[2rem] p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon">{item.period}</p>
                      <h3 className="mt-3 font-display text-4xl uppercase tracking-wide text-white md:text-5xl">{item.role}</h3>
                      <p className="mt-2 text-white/65">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white/55">
                      <MapPin size={14} /> {item.location} · {item.type}
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3 md:grid-cols-3">
                    {item.points.map((point) => (
                      <li key={point} className="rounded-2xl border border-white/8 bg-black/24 p-4 text-sm leading-7 text-white/62">{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
