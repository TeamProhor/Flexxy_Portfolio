"use client";

import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ children, width = "100%", delay = 0, className }: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", damping: 28, stiffness: 90, delay }
        }
        style={{ width }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
