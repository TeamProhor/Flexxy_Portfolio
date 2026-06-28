"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const WorksHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".works-h1, .works-accent, .works-sub", { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".works-h1",
      { opacity: 0, y: 28, clipPath: "inset(100% 0% 0% 0%)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9 },
      0.3
    );

    tl.fromTo(".works-accent",
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0.5
    );

    tl.fromTo(".works-sub",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.65
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="flex flex-col items-center mt-12 md:mt-24 mb-16 px-6">
      <div className="flex flex-col items-center">
        <h1
          className="text-5xl md:text-7xl font-medium tracking-tight text-foreground text-center leading-[1.05]"
          style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
        >
          <span className="works-h1 inline-block" style={{ opacity: 0 }}>Selected</span>{" "}
          <span className="works-accent font-serif-italic text-rose-500 font-normal inline-block" style={{ opacity: 0 }}>Works</span>
        </h1>
        <p className="works-sub text-muted-foreground text-lg mt-6 max-w-2xl text-center" style={{ opacity: 0, textWrap: "pretty" }}>
          An archive of premium commercials, documentaries, and digital campaigns.
        </p>
      </div>
    </section>
  );
};
