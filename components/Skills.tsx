"use client";

import { Code2, Cpu, Database, Layers3, Network, Sigma, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const icons = [Code2, Cpu, Sigma, Database, Layers3, Wrench, Network];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building across systems and products."
          description="Grouped by the areas I work in most: low-level engineering, machine learning, backend platforms, frontend interfaces, tooling, and rigorous CS coursework."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="glass-panel rounded-lg p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
                    <Icon size={19} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
