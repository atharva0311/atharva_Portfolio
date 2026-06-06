"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) trigger.kill();
      });

      cards.forEach((card, index) => {
        gsap.set(card, {
          yPercent: index === 0 ? 0 : 115,
          scale: index === 0 ? 1 : 0.96,
          opacity: 1,
          zIndex: index + 1,
          transformOrigin: "center center",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.max(cards.length - 1, 1) * 620}`,
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        timeline
          .to(
            card,
            {
              yPercent: 0,
              scale: 1,
              duration: 1,
              ease: "none",
            },
            index - 1
          )
          .to(
            cards[index - 1],
            {
              yPercent: -9,
              scale: 0.93,
              opacity: 0.62,
              duration: 1,
              ease: "none",
            },
            index - 1
          );
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#030305] px-4 py-6 text-white sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,229,255,.10),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(120,80,255,.10),transparent_30%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col">
        <div className="mb-4 shrink-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/60">
            Selected Work
          </p>

          <h2 className="mt-2 font-display text-[2.8rem] font-black uppercase leading-none tracking-[0.08em] text-white sm:text-[3.8rem] lg:text-[4.8rem]">
            Projects
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
            Scroll through a cinematic stacked-card showcase of AI, computer
            vision, full-stack engineering, and intelligent systems.
          </p>
        </div>

        <div className="relative flex-1">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-0 will-change-transform"
            >
              <ProjectCard
                project={project}
                index={index}
                total={projects.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}