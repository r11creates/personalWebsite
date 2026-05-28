"use client";

import { BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Technology leadership and applied engineering."
          description="A focused timeline of leadership, product work, and production-facing software development."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/70 via-slate-700 to-transparent sm:block" />
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative sm:pl-12"
              >
                <div className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-md border border-cyan-300/30 bg-[#08111F] text-cyan-200 sm:grid">
                  <BriefcaseBusiness size={16} />
                </div>
                <div className="glass-panel rounded-lg p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-slate-300">{item.organization}</p>
                      <p className="mt-2 text-sm text-slate-500">{item.period}</p>
                    </div>
                    <span className="rounded-md border border-violet-300/25 bg-violet-300/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
                      {item.badge}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
