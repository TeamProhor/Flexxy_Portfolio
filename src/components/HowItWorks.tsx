"use client";

import { useScroll, m, LazyMotion, domAnimation, useTransform } from "framer-motion";
import { useRef } from "react";
import { Spinner } from "@phosphor-icons/react";

import { steps } from "@/lib/data";

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Precise thresholds based on icon positions (5 steps)
  const thresholds = [0, 0.2, 0.4, 0.6, 0.8];

  // --- STEP 1 ANIMATIONS ---
  const c1 = useTransform(scrollYProgress, [thresholds[0] - 0.02, thresholds[0]], ["#9ca3af", "#ef4444"]);
  const p1 = useTransform(scrollYProgress, [thresholds[0], thresholds[0] + 0.05], [0, 1]);
  const o1 = useTransform(scrollYProgress, [thresholds[0], thresholds[0] + 0.01], [0, 1]);
  const so1 = useTransform(scrollYProgress, [thresholds[0] - 0.01, thresholds[0]], [1, 0]);
  const ss1 = useTransform(scrollYProgress, [thresholds[0] - 0.01, thresholds[0]], [1, 0.5]);

  // --- STEP 2 ANIMATIONS ---
  const c2 = useTransform(scrollYProgress, [thresholds[1] - 0.02, thresholds[1]], ["#9ca3af", "#ef4444"]);
  const p2 = useTransform(scrollYProgress, [thresholds[1], thresholds[1] + 0.05], [0, 1]);
  const o2 = useTransform(scrollYProgress, [thresholds[1], thresholds[1] + 0.01], [0, 1]);
  const so2 = useTransform(scrollYProgress, [thresholds[1] - 0.01, thresholds[1]], [1, 0]);
  const ss2 = useTransform(scrollYProgress, [thresholds[1] - 0.01, thresholds[1]], [1, 0.5]);

  // --- STEP 3 ANIMATIONS ---
  const c3 = useTransform(scrollYProgress, [thresholds[2] - 0.02, thresholds[2]], ["#9ca3af", "#ef4444"]);
  const p3 = useTransform(scrollYProgress, [thresholds[2], thresholds[2] + 0.05], [0, 1]);
  const o3 = useTransform(scrollYProgress, [thresholds[2], thresholds[2] + 0.01], [0, 1]);
  const so3 = useTransform(scrollYProgress, [thresholds[2] - 0.01, thresholds[2]], [1, 0]);
  const ss3 = useTransform(scrollYProgress, [thresholds[2] - 0.01, thresholds[2]], [1, 0.5]);

  // --- STEP 4 ANIMATIONS ---
  const c4 = useTransform(scrollYProgress, [thresholds[3] - 0.02, thresholds[3]], ["#9ca3af", "#ef4444"]);
  const p4 = useTransform(scrollYProgress, [thresholds[3], thresholds[3] + 0.05], [0, 1]);
  const o4 = useTransform(scrollYProgress, [thresholds[3], thresholds[3] + 0.01], [0, 1]);
  const so4 = useTransform(scrollYProgress, [thresholds[3] - 0.01, thresholds[3]], [1, 0]);
  const ss4 = useTransform(scrollYProgress, [thresholds[3] - 0.01, thresholds[3]], [1, 0.5]);

  // --- STEP 5 ANIMATIONS ---
  const c5 = useTransform(scrollYProgress, [thresholds[4] - 0.02, thresholds[4]], ["#9ca3af", "#ef4444"]);
  const p5 = useTransform(scrollYProgress, [thresholds[4], thresholds[4] + 0.05], [0, 1]);
  const o5 = useTransform(scrollYProgress, [thresholds[4], thresholds[4] + 0.01], [0, 1]);
  const so5 = useTransform(scrollYProgress, [thresholds[4] - 0.01, thresholds[4]], [1, 0]);
  const ss5 = useTransform(scrollYProgress, [thresholds[4] - 0.01, thresholds[4]], [1, 0.5]);

  const states = [
    { color: c1, path: p1, opacity: o1, spinOp: so1, spinSc: ss1 },
    { color: c2, path: p2, opacity: o2, spinOp: so2, spinSc: ss2 },
    { color: c3, path: p3, opacity: o3, spinOp: so3, spinSc: ss3 },
    { color: c4, path: p4, opacity: o4, spinOp: so4, spinSc: ss4 },
    { color: c5, path: p5, opacity: o5, spinOp: so5, spinSc: ss5 },
  ];

  return (
    <section id="how-it-works" className="flex flex-col mt-20 md:mt-32 max-w-4xl mx-auto w-full px-6 md:px-0">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
          How do we actually <br />
          <span className="text-[#FF5100] font-serif-italic font-normal">edit your videos?</span>
        </h2>
      </div>

      <div className="relative flex flex-col gap-12" ref={containerRef}>
        <LazyMotion features={domAnimation}>
          <div className="absolute left-[20px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gray-100 -z-10" />
          <m.div
            className="absolute left-[20px] md:left-[23px] top-0 w-[2px] bg-red-500 origin-top -z-10"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />

          {steps.map((item, i) => {
            const s = states[i];
            return (
              <m.div 
                key={item.id} 
                className="relative flex gap-4 md:gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
                  <m.div className="flex items-center justify-center" style={{ color: s.color }}>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <m.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 absolute" style={{ opacity: s.opacity }}>
                        <m.path d="M20 6L9 17L4 12" style={{ pathLength: s.path }} />
                      </m.svg>
                      <m.div style={{ opacity: s.spinOp, scale: s.spinSc }}>
                        <Spinner className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" weight="bold" />
                      </m.div>
                    </div>
                  </m.div>
                </div>

                <div className={`flex flex-col gap-4 ${!item.isLast ? "pb-12" : ""} ${i > 0 ? "mt-2 md:mt-4" : ""}`}>
                  <h2 className="text-3xl md:text-[39px] leading-[1.1] text-black">
                    <span className="font-serif-italic font-normal">{item.stage}</span>
                    {item.hasBr ? <br className="hidden md:block" /> : " "}
                    <span className={`tracking-tight ${i === 0 ? "font-bold text-[#FF5100]" : "font-medium"}`}>
                      {item.title}
                    </span>
                  </h2>
                  <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed whitespace-pre-line">{item.description}</p>
                </div>
              </m.div>
            );
          })}
        </LazyMotion>
      </div>
    </section>
  );
};
