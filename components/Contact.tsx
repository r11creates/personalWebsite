"use client";

import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to engineering internships, research labs, and ambitious teams."
          description="Reach out for software engineering, systems, machine learning infrastructure, developer tooling, or full-stack product opportunities."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-100"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Email Copied" : "Copy Email"}
            </button>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/8 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/8 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/8 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400">
            <Mail size={16} />
            {profile.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
