"use client";

import { motion, useReducedMotion } from "motion/react";

export function BackgroundEffects() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 36, -18, 0],
                y: [0, -24, 18, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-500/12 blur-3xl"
      />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -30, 16, 0],
                y: [0, 28, -12, 0],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/12 blur-3xl"
      />
      <motion.div
        animate={reduceMotion ? undefined : { y: ["-18%", "118%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-cyan-300/5 to-transparent"
      />
      <div className="noise" />
    </div>
  );
}
