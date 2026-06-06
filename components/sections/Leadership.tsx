"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding py-28 md:py-36">
      <div className="cinematic-shell">
        <SectionHeader eyebrow="Beyond Code" title="Leadership & Campus Impact" subtitle="Roles showing coordination, student support, event execution, sustainability participation, and technical community involvement." />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {leadership.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="glass-card rounded-[1.8rem] p-6"
            >
              <span className="font-display text-6xl text-white/10">0{index + 1}</span>
              <p className="mt-5 text-sm leading-7 text-white/65">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
