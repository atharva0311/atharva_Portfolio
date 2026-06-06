"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, skills } from "@/lib/data";

const labels: Record<string, string> = {
  programming: "Programming",
  aiml: "AI / ML",
  web: "Web Engineering",
  tools: "Tools",
  professional: "Professional",
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center overflow-hidden section-padding py-6 md:py-12">
      <div className="cinematic-shell">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills"
          subtitle="A clean technical stack with emphasis on AI systems, computer vision, Python engineering, full-stack development, and practical tooling."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([key, items], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="glass-card rounded-[1.6rem] p-5 min-h-[220px]"
            >
              <h3 className="font-display text-3xl uppercase tracking-wide text-white">
                {labels[key] ?? key}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/58"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Credentials"
            title="Certifications"
            subtitle="Relevant certifications and learning achievements supporting AI, software engineering, and technical development."
          />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] font-bold text-black">
                  ✓
                </span>

                <span className="font-mono text-xs text-neon">
                  {cert.year}
                </span>
              </div>

              <h4 className="font-semibold leading-snug text-white">
                {cert.name}
              </h4>

              <p className="mt-2 font-mono text-xs text-white/45">
                {cert.issuer}
              </p>

              {cert.note && (
                <p className="mt-3 text-xs leading-6 text-white/45">
                  {cert.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}