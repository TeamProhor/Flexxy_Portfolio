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
          <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Why Now?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Your Unfair Advantage
            <br />
            <span className="font-serif-italic text-[#FF4D47] font-normal underline decoration-2 underline-offset-8">
              Right Now
            </span>
          </h2>
          <p className="text-[#6b6b6b] text-base md:text-lg mt-6 max-w-2xl text-center">
            Every tech startup, SaaS company, and app brand wants that clean, premium Apple aesthetic but 90% of motion
            designers can&apos;t deliver it.
          </p>
        </div>
      </ScrollReveal>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
        {/* Left: Disadvantage */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-[#6b6b6b] text-lg md:text-xl font-medium mb-4 pl-4 text-center md:text-left">Where Most Motion Designers Are Stuck</h3>
            <Card className="bg-[#fcfcfc] border border-dashed border-[#d9d9d9] rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col gap-6 h-full shadow-sm ring-0">
              {/* List Items */}
              {advantagesData.disadvantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-white border border-[#e6e6e6] rounded-full p-2 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <XIcon size={18} color="#FF1F1F" weight="bold" className="md:size-5" />
                  </div>
                  <p className="text-black font-medium leading-tight text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </Card>
          </div>
        </ScrollReveal>

        {/* Right: Advantage */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-[#FF2823] text-lg md:text-xl font-bold mb-4 pl-4 text-center md:text-left">Vedita Editz Students</h3>
            <Card className="bg-[#171717] border border-dashed border-[#212121] rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col gap-6 h-full shadow-2xl ring-0">
              {/* List Items */}
              {advantagesData.advantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-[#FF1F1F] border border-[#FF5100] rounded-full p-2 flex-shrink-0 mt-0.5 shadow-md flex items-center justify-center">
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
            className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button hover:scale-105 transition-all duration-300"
          >
            <a href="#pricing">Get Started With Vedita Editz</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
