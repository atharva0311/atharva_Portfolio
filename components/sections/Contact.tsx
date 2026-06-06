"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal } from "@/lib/data";

const contactCards = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, icon: Phone },
  { label: "Location", value: personal.location, href: "#contact", icon: MapPin },
  { label: "LinkedIn", value: "Connect professionally", href: personal.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding py-28 md:py-36">
      <div className="cinematic-shell">
        <SectionHeader align="center" eyebrow="Get In Touch" title="Let’s Build Something" subtitle="Open to internships, AI/ML projects, software engineering opportunities, collaborations, and portfolio-focused discussions." />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group glass-card rounded-[1.8rem] p-6 transition hover:-translate-y-2 hover:border-[var(--accent)]/40"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/8"><card.icon size={18} className="text-neon" /></span>
                <ArrowUpRight size={18} className="text-white/35 transition group-hover:text-neon" />
              </div>
              <p className="muted-label">{card.label}</p>
              <p className="mt-3 break-words text-sm leading-6 text-white/68">{card.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 glass-card overflow-hidden rounded-[2.2rem] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <h3 className="font-display text-6xl uppercase leading-none text-white md:text-7xl">Ready for the next challenge.</h3>
              <p className="mt-5 max-w-2xl text-white/62">I bring academic excellence, practical AI/ML development experience, leadership exposure, and a strong interest in building scalable technical products.</p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <a href={`mailto:${personal.email}`} className="rounded-full bg-[var(--accent)] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105">Send Message</a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white/70 transition hover:border-[var(--accent)] hover:text-white"><Github size={16} /> GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
