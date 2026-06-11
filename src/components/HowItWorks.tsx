"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spinner } from "@phosphor-icons/react";

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    });

    tl.to(".progress-line", {
      scaleY: 1,
      ease: "none",
      duration: 1
    }, 0);

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

    const stepElements = gsap.utils.toArray<HTMLElement>('.step-item');
    stepElements.forEach((el, i) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section id="how-it-works" className="flex flex-col max-w-4xl mx-auto w-full px-6 md:px-0">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1]">
          My Post-Production
          <br />
          <span className="font-serif-italic text-gradient-primary font-normal underline decoration-2 underline-offset-8">
            Process
          </span>
        </h2>
      </div>

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
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
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
                <h2 className="text-3xl md:text-[39px] leading-[1.1] text-black">
                  <span className="font-serif-italic font-normal">{item.stage}</span>
                  {item.hasBr ? <br className="hidden md:block" /> : " "}
                  <span className="tracking-tighter font-bold text-gradient-primary">
                    {item.title}
                  </span>
                </h2>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
