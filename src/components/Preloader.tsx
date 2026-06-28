"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HandPalm, X } from "@phosphor-icons/react";

export function Preloader() {
  const [isMounted, setIsMounted] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsMounted(false)
    });

    // Intro animation: staggered text and items fading up
    tl.fromTo(".preloader-item", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "easeOut", stagger: 0.15, delay: 0.2 }
    );

    // Wait for the user to read the text
    tl.to({}, { duration: 3.5 });

    // Exit animation: text fades out
    tl.to(".preloader-content", {
      opacity: 0,
      duration: 0.4
    });

    // Columns slide down
    tl.to(".preloader-col", {
      yPercent: 100,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: 0.08
    }, "-=0.2");

  }, { scope: container });

  if (!isMounted) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[9999] flex pointer-events-none">
      {/* Columns for the stair effect */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="preloader-col flex-1 h-full bg-background origin-top"
          style={{ transform: "translateY(0%)" }}
        />
      ))}

      {/* Overlay Text Content */}
      <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto">
        <div className="max-w-4xl mx-auto w-full space-y-10 md:space-y-14">
          
          {/* Header */}
          <div className="preloader-item flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-6 opacity-0 translate-y-5">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-5 w-full text-rose-500">
              <HandPalm weight="fill" className="w-8 h-8 md:w-16 md:h-16 shrink-0" />
              <h2 className="text-3xl sm:text-4xl md:text-[72px] leading-[1.05] font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.03em" }}>
                Stop <span className="font-serif-italic text-rose-500 font-normal">here</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-3xl font-medium text-foreground tracking-tight max-w-xl leading-tight">
              You can definitely leave the website:
            </p>
          </div>

          {/* List */}
          <ul className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
            {[
              "If you think editing doesn't matter anything",
              "Isn't looking for premium editors.",
              "Doesn't want to grow your business and wants to get stucked at the place you are",
              "just looking for a cheap editor who copy paste your reels from a template"
            ].map((text, idx) => (
              <li 
                key={idx}
                className="preloader-item flex items-start gap-3 md:gap-4 text-sm sm:text-base md:text-2xl text-muted-foreground max-w-2xl text-left w-full md:w-auto opacity-0 translate-y-5"
              >
                <X weight="bold" className="w-5 h-5 md:w-8 md:h-8 text-rose-500 shrink-0 mt-0.5 md:mt-1" />
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

