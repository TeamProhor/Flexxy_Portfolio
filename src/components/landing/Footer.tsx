"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FooterProps {
  dict?: {
    copyright: string;
    largeText: string;
  };
}

const defaultFooterDict = {
  copyright: "Copyright © Vedita Editz 2026",
  largeText: "VeditaEditz",
};

export const Footer = ({ dict = defaultFooterDict }: Readonly<FooterProps>) => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const nameEl = footerRef.current.querySelector(".footer-name");
      if (!nameEl) return;

      if (prefersReducedMotion) {
        gsap.set(nameEl, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        nameEl,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="w-full border-t-2 border-dashed border-border pt-12 mt-12 overflow-hidden flex flex-col items-center px-4"
    >
      <div className="text-muted-foreground text-xs md:text-sm mb-12 text-center">
        {dict.copyright}
      </div>

      <div className="w-full relative md:px-10 max-w-[1400px] mx-auto pb-8 md:pb-4">
        <h2
          className="footer-name text-[14vw] md:text-[12vw] font-medium tracking-tighter text-center leading-none text-zinc-200 select-none"
          style={{ opacity: 0 }}
        >
          {dict.largeText}
        </h2>
      </div>
    </footer>
  );
};
