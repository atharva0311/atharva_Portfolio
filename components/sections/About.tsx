"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: "🏆",
    title: "Best Outgoing Student",
    subtitle: "Dr. D. Y. Patil Polytechnic",
  },
  {
    icon: "🥇",
    title: "Winner – TECHNOVA 2K24 Quiz",
    subtitle: "National Level",
  },
  {
    icon: "🥈",
    title: "Runner-Up – TECHNOCRAT Project",
    subtitle: "National Level 2026",
  },
  {
    icon: "🥈",
    title: "Runner-Up – Vishwavision 2K26",
    subtitle: "State Level Paper Presentation",
  },
  {
    icon: "🥉",
    title: "2nd Runner-Up – CODE FUSION",
    subtitle: "National Level Programming 2025",
  },
  {
    icon: "🏸",
    title: "Badminton Zonal Champion",
    subtitle: "3 Consecutive Years",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center overflow-hidden bg-[#030305] px-5 py-14 text-white sm:px-8 lg:px-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,0.07),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(120,80,255,0.07),transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/65">
            Who I Am
          </p>

          <h2 className="mt-4 font-display text-[3.4rem] font-black uppercase leading-[0.85] tracking-[0.12em] text-white sm:text-[4.2rem] lg:text-[5rem]">
            About Me
          </h2>

          <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-white/78 lg:text-[15px]">
            <p>
              Highly motivated Computer Engineering student with{" "}
              <span className="font-semibold text-white">96.47%</span> academic
              performance and hands-on experience in AI, Machine Learning,
              Computer Vision, and Full Stack Development.
            </p>

            <p>
              Experienced through internships, innovation projects, and
              real-world problem solving, building systems from traffic
              management AI to object detection pipelines.
            </p>
          </div>

          <div className="mt-7 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="mt-1 text-white/80">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    Diploma in Computer Engineering
                  </h3>
                  <p className="font-mono text-xs text-white/65">
                    Dr. D. Y. Patil Polytechnic
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] text-cyan-300">
                96.47%
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Best Outgoing Student",
                "First Rank",
                "100/100 in Data Structures",
                "Academic Excellence",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {achievements.map((item) => (
            <div
              key={item.title}
              className="min-h-[120px] rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <div className="text-2xl">{item.icon}</div>

              <h3 className="mt-4 text-sm font-bold leading-snug text-white">
                {item.title}
              </h3>

              <p className="mt-1.5 font-mono text-[11px] leading-4 text-white/62">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}