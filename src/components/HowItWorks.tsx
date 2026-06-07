"use client";

import { useScroll, m, LazyMotion, domAnimation, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "./ScrollReveal";
import { Check, Spinner } from "@phosphor-icons/react";

import { steps } from "@/lib/data";

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Precise thresholds based on icon positions
  const thresholds = [0, 0.26, 0.54, 0.82];

  return (
    <section id="how-it-works" className="flex flex-col gap-12 mt-10 max-w-3xl mx-auto w-full relative" ref={containerRef}>
      <LazyMotion features={domAnimation}>
        {/* Animated Background Line */}
        <div className="absolute left-[20px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gray-100 -z-10" />
        
        {/* The "Liquid" Red Line */}
        <m.div
          className="absolute left-[20px] md:left-[23px] top-0 w-[2px] bg-red-500 origin-top -z-10"
          style={{ height: "100%", scaleY: scrollYProgress }}
        />

        {steps.map((item, i) => {
          const threshold = thresholds[i];
          
          return (
            <ScrollReveal key={item.id}>
              <div className="relative flex gap-4 md:gap-8 group">
                {/* Timeline Point */}
                <div
                  className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-red-500 overflow-hidden"
                >
                  <m.div 
                    className="flex items-center justify-center"
                    style={{
                      color: useTransform(
                        scrollYProgress, 
                        [threshold - 0.02, threshold], 
                        ["#9ca3af", "#ef4444"]
                      )
                    }}
                  >
                    <StatusIcon progress={scrollYProgress} threshold={threshold} />
                  </m.div>
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-4 ${!item.isLast ? "pb-12" : ""} ${i > 0 ? "mt-2 md:mt-4" : ""}`}>
                  <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider w-max inline-block h-auto">
                    {item.step}
                  </Badge>
                  <h2 className="text-3xl md:text-[39px] leading-[1.1] text-black">
                    <span className="font-serif-italic font-normal">{item.stage}</span>
                    {item.hasBr ? <br className="hidden md:block" /> : " "}
                    <span
                      className={`tracking-tight ${
                        i === 0 ? "font-bold text-[#FF5100]" : "font-medium"
                      }`}
                    >
                      {item.title}
                    </span>
                  </h2>
                  <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <Button
                    asChild
                    className="mt-2 md:mt-4 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full glow-button hover:scale-105 transition-all duration-300 w-max"
                  >
                    <a href="#pricing">I&apos;m Ready to Learn</a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </LazyMotion>
    </section>
  );
};

const StatusIcon = ({ progress, threshold }: { progress: any, threshold: number }) => {
  const pathLength = useTransform(progress, [threshold, threshold + 0.05], [0, 1]);
  const opacity = useTransform(progress, [threshold, threshold + 0.01], [0, 1]);
  const spinnerOpacity = useTransform(progress, [threshold - 0.01, threshold], [1, 0]);
  const spinnerScale = useTransform(progress, [threshold - 0.01, threshold], [1, 0.5]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <m.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 md:w-6 md:h-6 absolute"
        style={{ opacity }}
      >
        <m.path
          d="M20 6L9 17L4 12"
          style={{ pathLength }}
        />
      </m.svg>

      <m.div
        style={{
          opacity: spinnerOpacity,
          scale: spinnerScale,
        }}
      >
        <Spinner className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" weight="bold" />
      </m.div>
    </div>
  );
};
