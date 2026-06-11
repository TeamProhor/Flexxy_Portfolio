"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ children, width = "100%", delay = 0, className }: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width, opacity: 0 }}
    >
      {children}
    </div>
  );
};
