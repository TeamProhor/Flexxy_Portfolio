"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyVideo } from "@/components/ui/LazyVideo";

export const ProjectHero = ({ title, client, src }: { title: string, client: string, src: string }) => {
  return (
    <section className="w-full mt-8 md:mt-12 px-6">
      <ScrollReveal className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black text-center leading-[1.05]">
            {title}
          </h1>
          <p className="font-serif-italic text-2xl text-zinc-500 mt-4 text-center">
            for {client}
          </p>
        </div>
        <div className="relative w-full aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden bg-zinc-900 shadow-xl">
          <LazyVideo
            src={src}
            className="w-full h-full object-cover"
            ariaLabel={title}
          />
        </div>
      </ScrollReveal>
    </section>
  );
};
