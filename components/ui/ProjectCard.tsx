"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export type Project = {
  title: string;
  location: string;
  duration: string;
  description: string;
  tech: string[];
  highlights?: string[];
  points: string[];
  images?: string[];
  featured?: boolean;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export default function ProjectCard({
  project,
  index,
  total,
}: ProjectCardProps) {
  const [mainImageError, setMainImageError] = useState(false);
  const mainImage = project.images?.[0];

  return (
    <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#08090d] shadow-[0_28px_90px_rgba(0,0,0,.75)] md:rounded-[2rem]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.06),transparent_38%,rgba(0,229,255,.08))]" />

      <div className="relative grid h-full grid-rows-[42%_58%] lg:grid-cols-[1.05fr_.95fr] lg:grid-rows-1">
        <div className="relative min-h-0 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-black to-purple-500/20">
          {mainImage && !mainImageError ? (
            <img
              src={mainImage}
              alt={`${project.title} preview`}
              onError={() => setMainImageError(true)}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(0,229,255,.22),transparent_38%),linear-gradient(135deg,#071018,#020205)]">
              <div className="text-center">
                <p className="font-display text-5xl uppercase text-white/90 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-300">
                  Project Preview
                </p>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] text-white/70 backdrop-blur-md">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>{String(total).padStart(2, "0")}</span>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="absolute bottom-4 left-4 right-4 hidden flex-wrap gap-2 md:flex">
              {project.highlights.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex min-h-0 flex-col justify-between p-4 sm:p-5 lg:p-7">
          <div>
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300">
                  {project.location}
                </p>
                <p className="mt-1 text-[11px] text-white/45">
                  {project.duration}
                </p>
              </div>

              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition duration-300 group-hover:border-cyan-400 group-hover:text-cyan-400">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <h3 className="font-display text-[1.9rem] uppercase leading-[0.95] text-white sm:text-[2.4rem] lg:text-[3.2rem]">
              {project.title}
            </h3>

            <p className="mt-3 text-xs leading-5 text-white/62 sm:text-sm sm:leading-6">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/58 sm:text-[9px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {project.points.slice(0, 3).map((point) => (
              <p
                key={point}
                className="rounded-xl border border-white/8 bg-black/25 p-2.5 text-[11px] leading-4 text-white/62 sm:text-xs sm:leading-5"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}