"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: prefersReducedMotion ? true : 0.5,
      }
    });
  });

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-[3px] bg-red-500 z-[9999] origin-left scale-x-0"
    />
  );
};
