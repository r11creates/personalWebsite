"use client";

import { ExternalLink, Github, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  if (visual === "neural") {
    return (
      <div className="absolute inset-0 opacity-70">
        {[18, 36, 58, 78].map((left, index) => (
          <span
            key={left}
            className="absolute h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_24px_rgba(139,92,246,0.7)]"
            style={{ left: `${left}%`, top: `${24 + (index % 2) * 34}%` }}
          />
        ))}
        <svg className="h-full w-full" viewBox="0 0 300 180" fill="none">
          <path d="M55 55L120 105L185 55L240 118" stroke="rgba(34,211,238,.38)" />
          <path d="M55 115L120 105L185 125L240 62" stroke="rgba(232,121,249,.34)" />
        </svg>
      </div>
    );
  }

  if (visual === "assembly") {
    return (
      <div className="absolute inset-0 grid grid-cols-8 gap-1 p-5 opacity-70">
        {Array.from({ length: 40 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "rounded-sm border border-cyan-300/10 bg-white/[0.04]",
              index % 7 === 0 && "bg-cyan-300/20",
              index % 11 === 0 && "bg-magenta-300/20",
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <svg className="h-full w-full opacity-80" viewBox="0 0 420 220" fill="none">
        <path
          d="M38 162C98 70 158 188 220 92C282 -4 332 132 390 52"
          stroke="rgba(34,211,238,.36)"
          strokeWidth="1.5"
        />
        <path
          d="M58 82C124 132 172 28 242 126C294 198 350 96 386 144"
          stroke="rgba(139,92,246,.34)"
          strokeWidth="1.5"
        />
        {[74, 136, 214, 286, 354].map((cx, index) => (
          <circle
            key={cx}
            cx={cx}
            cy={index % 2 ? 128 : 82}
            r="5"
            fill="rgba(34,211,238,.72)"
          />
        ))}
      </svg>
    </div>
  );
}

export function ProjectCard({ project, large }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -5, rotateX: 1.2, rotateY: -1.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "group glass-panel relative overflow-hidden rounded-lg p-5 transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_46px_rgba(34,211,238,0.12)]",
        large && "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:p-6",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative mb-5 min-h-48 overflow-hidden rounded-md border border-white/10 bg-[#060A12] lg:mb-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <ProjectVisual visual={project.visual} />
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.featured ? (
            <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">
              FEATURED PROJECT
            </span>
          ) : null}
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {project.date}
          </span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        {project.emphasis ? (
          <p className="mt-2 text-sm font-medium text-cyan-200">
            {project.emphasis}
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/8 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
          aria-expanded={expanded}
        >
          <Plus size={16} className={cn("transition", expanded && "rotate-45")} />
          Highlights
        </button>

        {expanded ? (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 grid gap-2 overflow-hidden"
          >
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {highlight}
              </li>
            ))}
          </motion.ul>
        ) : null}

        <div className="mt-6 flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold !text-[#000000] transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Github size={16} />
            GitHub
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-white"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
