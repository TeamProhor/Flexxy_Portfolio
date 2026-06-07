"use client";

import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "100%" }: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        style={{ width }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
