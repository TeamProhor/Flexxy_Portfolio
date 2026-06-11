"use client";

import { ScrollReveal } from "./ScrollReveal";
import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { advantagesData } from "@/lib/data";

export const WhyNow = () => {
  return (
    <section id="why-now" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Why Now?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1]">
            Your Unfair Advantage
            <br />
            <span className="font-serif-italic text-gradient-primary font-normal underline decoration-2 underline-offset-8">
              Right Now
            </span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mt-6 max-w-2xl text-center">
            Every tech startup, SaaS company, and brand wants that clean, premium aesthetic but 90% of video editors can&apos;t deliver it.
          </p>
        </div>
      </ScrollReveal>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
        {/* Left: Disadvantage */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-zinc-500 text-lg md:text-xl font-medium mb-4 pl-4 text-center md:text-left">Where Most Video Editors Fall Short</h3>
            <Card className="bg-[#fcfcfc] border border-dashed border-[#d9d9d9] rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col gap-6 h-full shadow-sm ring-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-md hover:border-[#c4c4c4]">
              {/* List Items */}
              {advantagesData.disadvantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-white border border-[#e6e6e6] rounded-full p-2 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <XIcon size={18} color="#f43f5e" weight="bold" className="md:size-5" />
                  </div>
                  <p className="text-black font-medium leading-tight text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </Card>
          </div>
        </ScrollReveal>

        {/* Right: Advantage */}
        <ScrollReveal delay={0.12}>
          <div className="flex flex-col h-full">
            <h3 className="text-gradient-primary text-lg md:text-xl font-bold mb-4 pl-4 text-center md:text-left">When You Work With Me</h3>
            <Card className="bg-[#171717] border border-dashed border-[#212121] rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col gap-6 h-full shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] ring-0 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,30,30,0.1)] hover:border-[#2d2d2d]">
              {/* List Items */}
              {advantagesData.advantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-rose-600 border border-rose-400 rounded-full p-2 flex-shrink-0 mt-0.5 shadow-md flex items-center justify-center">
                    <CheckIcon size={18} color="#FCFCFC" weight="bold" className="md:size-5" />
                  </div>
                  <p className="text-[#fcfcfc] font-medium leading-tight text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </Card>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-16">
          <Button
            asChild
            className="bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button btn-shimmer hover:scale-[1.04] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          >
            <a href="#work">View My Work</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
