"use client";

import { ArrowDown, Download, Github, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const taglines = [
  "Building intelligent developer tools",
  "Engineering reliable systems",
  "Creating full-stack applications",
  "Exploring compilers and machine learning",
  "Turning ideas into products",
];

const terminalMessages = [
  "indexing repositories...",
  "training models...",
  "compiling systems...",
  "shipping software...",
  "solving problems...",
];

const interests = [
  "Systems Programming",
  "Machine Learning",
  "Developer Tools",
  "Compilers",
  "AI Infrastructure",
  "Distributed Systems",
  "Full-Stack Engineering",
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const taglineTimer = window.setInterval(
      () => setTaglineIndex((index) => (index + 1) % taglines.length),
      2600,
    );
    const messageTimer = window.setInterval(
      () =>
        setMessageIndex((index) => (index + 1) % terminalMessages.length),
      1800,
    );

    return () => {
      window.clearInterval(taglineTimer);
      window.clearInterval(messageTimer);
    };
  }, [reduceMotion]);

  return (
    <section id="home" className="relative pt-24">
      <div className="section-shell grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            {profile.subtitle}
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building software from silicon to AI.
          </h1>
          <div className="mt-5 h-8 overflow-hidden text-lg font-medium text-cyan-200">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {taglines[taglineIndex]}
            </motion.p>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I build software across the stack-from low-level systems programming
            and performance-focused C++ projects to AI-powered developer tools
            and modern web applications.
          </p>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            {profile.role}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold !text-[#000000] transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-100"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="glass-panel rounded-lg p-4"
          aria-label="Current engineering status"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs uppercase tracking-[0.22em] text-slate-400">
              status
            </span>
          </div>
          <div className="min-h-80 rounded-md border border-cyan-300/12 bg-[#030508]/80 p-5 font-mono text-sm text-slate-300 shadow-inner">
            <p className="text-cyan-200">$ engineer --profile rithvik</p>
            <p className="mt-5 text-slate-500">loading capabilities</p>
            <div className="mt-4 space-y-3">
              {["systems", "ml", "backend", "frontend", "tooling"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-20 text-slate-500">{item}</span>
                    <span className="h-1 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: `${74 + index * 4}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="block h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                      />
                    </span>
                  </div>
                ),
              )}
            </div>
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-cyan-200"
            >
              &gt; {terminalMessages[messageIndex]}
            </motion.p>
            <p className="mt-6 text-slate-500">
              ready for research labs, startup teams, and engineering internships
            </p>
          </div>
        </motion.aside>
      </div>

      <div className="section-shell pb-6">
        <div className="glass-panel flex flex-wrap gap-2 rounded-lg p-3">
          {interests.map((interest) => (
            <motion.span
              key={interest}
              whileHover={{ y: -2 }}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
