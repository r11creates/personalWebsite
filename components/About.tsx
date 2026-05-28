"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";

const recentWork = [
  "Building CodeAtlas AI",
  "Developing NeuroCPP",
  "Implementing a complete Dr. Mario game in MIPS Assembly",
  "Leading technology initiatives as Director of Technology at UTSRI",
];

const currentlyExploring = [
  "Machine Learning Systems",
  "AI Infrastructure",
  "Compilers",
  "Distributed Systems",
  "Modern C++",
  "Developer Tooling",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering across layers of abstraction."
          description="I am a Computer Science student at the University of Toronto pursuing a minor in Statistics."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-lg p-6 sm:p-8"
          >
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                My interests span systems programming, software engineering,
                machine learning, developer tools, and full-stack product
                development.
              </p>
              <p>
                I enjoy understanding software at multiple layers of
                abstraction-from memory management, operating systems, and
                compiler concepts to distributed AI systems and modern web
                applications.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Recent work
              </h3>
              <ul className="mt-4 grid gap-3">
                {recentWork.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-200"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass-panel rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">
              Currently Exploring
            </h3>
            <div className="mt-5 grid gap-3">
              {currentlyExploring.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className="rounded-md border border-cyan-300/14 bg-cyan-300/[0.035] px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
