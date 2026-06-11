"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

export const WorksHero = () => {
  return (
    <section className="flex flex-col items-center mt-12 md:mt-24 mb-16 px-6">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Portfolio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black text-center leading-[1.05]">
            Selected <span className="font-serif-italic text-gradient-primary font-normal">Works</span>
          </h1>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl text-center">
            An archive of premium commercials, documentaries, and digital campaigns.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};
