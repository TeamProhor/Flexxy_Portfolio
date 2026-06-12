"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealVariant = "fade-up" | "fade" | "slide-left" | "slide-right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  /** Duration in seconds */
  duration?: number;
}

const variantConfig: Record<RevealVariant, { from: gsap.TweenVars }> = {
  "fade-up": { from: { opacity: 0, y: 40 } },
  "fade": { from: { opacity: 0 } },
  "slide-left": { from: { opacity: 0, x: -60 } },
  "slide-right": { from: { opacity: 0, x: 60 } },
  "scale": { from: { opacity: 0, scale: 0.92 } },
};

export const ScrollReveal = ({
  children,
  width = "100%",
  delay = 0,
  className,
  variant = "fade-up",
  duration = 0.9,
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const config = variantConfig[variant];

    gsap.fromTo(
      containerRef.current,
      config.from,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
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
