"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spinner } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

import { steps } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".progress-line", { scaleY: 1 });
      gsap.set(".step-item", { opacity: 1, y: 0 });
      steps.forEach((_, i) => {
        gsap.set(`.step-icon-container-${i}`, { color: "#ef4444" });
        gsap.set(`.step-path-${i}`, { strokeDashoffset: 0, opacity: 1 });
        gsap.set(`.step-spinner-${i}`, { opacity: 0, scale: 0.5 });
      });
      return;
    }

    // Progress line scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.2,
      }
    });

    tl.to(".progress-line", {
      scaleY: 1,
      ease: "none",
      duration: 1
    }, 0);

    // Step icon animations scrubbed to scroll
    steps.forEach((_, i) => {
      const start = i * 0.2;
      
      gsap.set(`.step-icon-container-${i}`, { color: "#9ca3af" });
      gsap.set(`.step-path-${i}`, { strokeDasharray: "100", strokeDashoffset: "100", opacity: 0 });
      gsap.set(`.step-spinner-${i}`, { opacity: 1, scale: 1 });
      
      if (start > 0) {
        tl.to(`.step-icon-container-${i}`, {
          color: "#ef4444",
          duration: 0.02,
          ease: "none"
        }, start - 0.02);

        tl.to(`.step-spinner-${i}`, {
          opacity: 0,
          scale: 0.5,
          duration: 0.01,
          ease: "none"
        }, start - 0.01);
      } else {
        gsap.set(`.step-icon-container-${i}`, { color: "#ef4444" });
        gsap.set(`.step-spinner-${i}`, { opacity: 0, scale: 0.5 });
      }

      tl.to(`.step-path-${i}`, {
        opacity: 1,
        duration: 0.01,
        ease: "none"
      }, start);

      tl.to(`.step-path-${i}`, {
        strokeDashoffset: 0,
        duration: 0.05,
        ease: "none"
      }, start);
    });

    // Step items: staggered entrance
    const stepElements = gsap.utils.toArray<HTMLElement>('.step-item');
    ScrollTrigger.batch(stepElements, {
      interval: 0.1,
      onEnter: (batch) => {
        gsap.fromTo(batch, 
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.1,
            overwrite: true
          }
        );
      },
      start: "top 90%",
      once: true
    });

  }, { scope: containerRef });

  return (
    <section id="how-it-works" className="flex flex-col max-w-4xl mx-auto w-full px-6 md:px-0">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="text-4xl md:text-6xl font-medium tracking-tight text-foreground text-center leading-[1.1]"
            style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            My process in
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              post-production
            </span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative flex flex-col gap-12" ref={containerRef}>
        <div className="absolute left-[20px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gray-100 -z-10" />
        <div
          className="progress-line absolute left-[20px] md:left-[23px] top-0 w-[2px] bg-red-500 origin-top -z-10"
          style={{ height: "100%", transform: "scaleY(0)" }}
        />

        {steps.map((item, i) => {
          return (
            <div 
              key={item.id} 
              className="step-item relative flex gap-4 md:gap-8 group"
              style={{ opacity: 0, transform: "translateY(32px)" }}
            >
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-background border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
                <div className={`step-icon-container-${i} flex items-center justify-center text-gray-400`}>
                  <div className="relative flex items-center justify-center w-full h-full">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 absolute">
                      <path className={`step-path-${i}`} d="M20 6L9 17L4 12" pathLength="100" />
                    </svg>
                    <div className={`step-spinner-${i}`}>
                      <Spinner className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" weight="bold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col gap-4 ${!item.isLast ? "pb-12" : ""} ${i > 0 ? "mt-2 md:mt-4" : ""}`}>
                <h2 className="text-3xl md:text-[39px] leading-[1.1] text-foreground">
                  <span className="font-serif-italic font-normal">{item.stage}</span>
                  {item.hasBr ? <br className="hidden md:block" /> : " "}
                  <span className="tracking-tight font-bold text-rose-500">
                    {item.title}
                  </span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line" style={{ textWrap: "pretty" }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
