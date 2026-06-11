"use client";
import { m, useScroll, useSpring, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-500 z-[9999] origin-left"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
      />
    </LazyMotion>
  );
};
