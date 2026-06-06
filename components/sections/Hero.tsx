"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { personal } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          playsInline
          muted={muted}
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-black/38" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.18)_100%)]" />

      <button
        type="button"
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        onClick={() => setMuted((prev) => !prev)}
        className="absolute bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-xl transition hover:bg-black/55"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <motion.div style={{ y }} className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-white/70 sm:text-xs"
            >
              PORTFOLIO • 2026
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[3.8rem] font-black uppercase leading-[0.82] tracking-tight text-white sm:text-[5rem] md:text-[6.5rem] lg:text-[7.6rem]"
            >
              {personal.firstName}
              <br />
              {personal.lastName}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs md:text-sm"
            >
              AI Engineer • ML Engineer • Full Stack Developer
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
              {personal.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105 sm:px-7"
              >
                View Projects
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur transition hover:border-cyan-400 sm:px-7"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5">
              <a aria-label="GitHub" href={personal.github} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-cyan-400">
                <Github size={18} />
              </a>

              <a aria-label="LinkedIn" href={personal.linkedin} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-cyan-400">
                <Linkedin size={18} />
              </a>

              <a aria-label="Email" href={`mailto:${personal.email}`} className="text-white/70 transition hover:text-cyan-400">
                <Mail size={18} />
              </a>

              <span className="h-4 w-px bg-white/20" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {personal.location}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                Scroll
              </span>

              <ArrowDown size={14} className="animate-bounce text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}