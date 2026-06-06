"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Lightbulb } from "lucide-react";

const publications = [
  {
    type: "Published",
    year: "2025",
    icon: BookOpen,
    accent: "violet",
    title:
      "AI-Powered Smart Automated Traffic System with Accident Detection & Violation Detection with E-Challan",
    organization:
      "International Journal of Scientific Research and Engineering Development (IJSRED)",
    tags: ["AI-Powered", "Traffic Analysis", "Violation Detection", "E-Challan"],
    linkLabel: "View Publication",
  },
  {
    type: "Design Patent Filed",
    year: "India Patent Office",
    icon: Lightbulb,
    accent: "amber",
    title: "FLUX SYNCHRONIZED TRANSFORMER DIAGNOSTIC DEVICE",
    organization:
      "Innovative transformer monitoring and diagnostic technology for enhanced reliability, fault detection, and diagnostic monitoring.",
    tags: ["Innovation", "Fault Detection", "Reliability", "Diagnostics"],
    linkLabel: "Patent Filed",
  },
];

export default function Publications() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.07),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-white/75">
            Research & Innovation
          </p>

          <h2 className="mt-6 font-display text-[3.8rem] font-black uppercase leading-none tracking-[0.12em] text-white sm:text-[5rem] lg:text-[6rem]">
            Publications
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {publications.map((item, index) => {
            const Icon = item.icon;
            const isAmber = item.accent === "amber";

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group min-h-[410px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-white/[0.055] sm:p-10"
              >
                <div className="flex items-start gap-8">
                  <Icon
                    size={28}
                    className={isAmber ? "text-amber-400" : "text-white"}
                  />

                  <div>
                    <span
                      className={
                        isAmber
                          ? "rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 font-mono text-xs text-amber-300"
                          : "rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-1.5 font-mono text-xs text-violet-300"
                      }
                    >
                      {item.type}
                    </span>

                    <p className="mt-4 font-mono text-sm font-semibold text-white">
                      {item.year}
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 max-w-2xl text-2xl font-black uppercase leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/75">
                  {item.organization}
                </p>

                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-semibold tracking-[0.08em] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-12 inline-flex items-center gap-3 font-mono text-sm font-bold text-white transition group-hover:text-cyan-300">
                  <ExternalLink size={16} />
                  {item.linkLabel}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}