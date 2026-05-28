"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (reduceMotion) return;

    const update = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
      animate={{ x: position.x - 144, y: position.y - 144 }}
      transition={{ type: "spring", damping: 35, stiffness: 220, mass: 0.4 }}
    />
  );
}
