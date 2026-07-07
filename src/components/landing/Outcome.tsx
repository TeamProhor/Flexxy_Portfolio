"use client";

import { SealCheck } from "@phosphor-icons/react";
import Image from "next/image";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { LazyVideo } from "@/components/ui/LazyVideo";

interface StatItem {
  id: string;
  label: string;
}

interface OutcomeProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
  };
  statsData: StatItem[];
}

const colors = ["bg-gray-400", "bg-rose-500"];

export const Outcome = ({ dict, statsData }: Readonly<OutcomeProps>) => {
  return (
    <section
      id="outcome"
      className="flex flex-col md:flex-row gap-12 md:gap-16 items-center"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <ScrollReveal>
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] group">
            <AspectRatio ratio={4 / 5}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <LazyVideo
                src="/videos/04.mp4"
                className="w-full h-full object-cover relative z-0"
                ariaLabel="UI animation demonstration in Figma"
              />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                <div className="relative size-10 md:size-[50px] rounded-xl md:rounded-2xl border border-white/10 shadow-lg overflow-hidden">
                  <Image
                    src="/avatar.webp"
                    alt="Figma"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tighter flex items-center gap-2">
                    Figma
                    <SealCheck
                      weight="fill"
                      className="size-4 md:size-5 text-rose-500 shrink-0"
                    />
                  </span>
                </div>
              </div>
            </AspectRatio>
          </div>
        </ScrollReveal>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <ScrollReveal delay={0.12}>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center md:text-left leading-[1.1] [text-wrap:balance]">
            {dict.title1}
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              {dict.title2}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 leading-relaxed [text-wrap:pretty]">
            {dict.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full md:w-auto">
            {statsData.map((stat, i) => (
              <Card
                key={stat.id}
                className="bg-background border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-row items-center justify-center md:justify-start gap-3 ring-0 transition-all duration-200 hover:shadow-md hover:border-gray-300"
              >
                <div
                  className={`w-2 h-2 ${colors[i % colors.length]} rounded-full shrink-0`}
                />
                <span className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">
                  {stat.label}
                </span>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
