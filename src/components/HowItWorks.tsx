"use client";

import { ScrollReveal } from "./ScrollReveal";

import { steps } from "@/lib/data";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="flex flex-col gap-12 mt-10 max-w-3xl mx-auto w-full">
      {steps.map((item, i) => (
        <ScrollReveal key={i}>
          <div className={`relative flex gap-8 ${!item.isLast ? "timeline-line" : ""}`}>
            <div
              className={`relative z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${
                i > 0 ? "mt-4" : ""
              }`}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className={`flex flex-col gap-4 ${!item.isLast ? "pb-12" : ""} ${i > 0 ? "mt-4" : ""}`}>
              <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider w-max inline-block">
                {item.step}
              </span>
              <h2 className="text-[39px] leading-[1.1] text-black">
                <span className="font-serif-italic font-normal">{item.stage}</span>
                {item.hasBr ? <br /> : " "}
                <span
                  className={`tracking-tight ${
                    i === 0 ? "font-bold text-[#FF5100]" : "font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed">{item.description}</p>
              <a
                href="#pricing"
                className="mt-4 inline-block bg-[#ff0000] text-white font-semibold text-lg px-8 py-3 rounded-full glow-button hover:scale-105 transition-transform duration-300 w-max"
              >
                I&apos;m Ready to Learn the System
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
};
