"use client";

import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AdvantageItem {
  id: string;
  text: string;
}

interface WhyNowProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
    disadvantagesTitle: string;
    advantagesTitle: string;
    btn: string;
  };
  advantagesData: {
    disadvantages: AdvantageItem[];
    advantages: AdvantageItem[];
  };
}

export const WhyNow = ({ dict, advantagesData }: Readonly<WhyNowProps>) => {
  return (
    <section id="why-now" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1] [text-wrap:balance]">
            {dict.title1}
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              {dict.title2}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl text-center [text-wrap:pretty]">
            {dict.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-muted-foreground text-lg md:text-xl font-medium mb-4 pl-4 text-center md:text-left">
              {dict.disadvantagesTitle}
            </h3>
            <Card className="bg-[#fcfcfc] border border-dashed border-[#d9d9d9] rounded-2xl p-6 md:p-8 flex flex-col gap-6 h-full shadow-sm ring-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-md hover:border-[#c4c4c4]">
              {advantagesData.disadvantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-background border border-[#e6e6e6] rounded-full p-2 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <XIcon
                      size={18}
                      color="#f43f5e"
                      weight="bold"
                      className="md:size-5"
                    />
                  </div>
                  <p className="text-foreground font-medium leading-tight text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="flex flex-col h-full">
            <h3 className="text-rose-500 text-lg md:text-xl font-bold mb-4 pl-4 text-center md:text-left">
              {dict.advantagesTitle}
            </h3>
            <Card className="bg-[#171717] border border-dashed border-[#212121] rounded-2xl p-6 md:p-8 flex flex-col gap-6 h-full shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] ring-0 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,30,30,0.1)] hover:border-[#2d2d2d]">
              {advantagesData.advantages.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="bg-rose-600 border border-rose-400 rounded-full p-2 flex-shrink-0 mt-0.5 shadow-md flex items-center justify-center">
                    <CheckIcon
                      size={18}
                      color="#FCFCFC"
                      weight="bold"
                      className="md:size-5"
                    />
                  </div>
                  <p className="text-[#fcfcfc] font-medium leading-tight text-sm md:text-base">
                    {item.text}
                  </p>
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
            <a href="#work">{dict.btn}</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
