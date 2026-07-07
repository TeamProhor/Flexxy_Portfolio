"use client";

import { SealCheck } from "@phosphor-icons/react";
import Image from "next/image";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/LazyVideo";

import { endResultVideos } from "@/lib/data";

interface EndResultProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
    btn: string;
  };
}

export const EndResult = ({ dict }: Readonly<EndResultProps>) => {
  return (
    <section id="end-result" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1] [text-wrap:balance]">
            {dict.title1}
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              {dict.title2}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto [text-wrap:pretty]">
            {dict.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 w-full">
        {endResultVideos.map((video, index) => (
          <ScrollReveal key={video.id} delay={index * 0.08}>
            <div
              className={`relative w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-lg ${video.mt} md:mt-0 lg:${video.mt} transition-transform duration-500 hover:scale-[1.025] hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)]`}
            >
              <AspectRatio ratio={4 / 5}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60" />
                <LazyVideo
                  src={video.src}
                  className="w-full h-full object-cover relative z-0"
                  ariaLabel={`Motion design preview for ${video.title}`}
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                  <div className="relative size-8 md:size-10 rounded-lg md:rounded-xl border border-white/20 overflow-hidden">
                    <Image
                      src={video.img}
                      alt={video.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-[#f5f5f5] font-bold text-base md:text-lg flex items-center gap-1">
                    {video.title}
                    <SealCheck
                      weight="fill"
                      className="size-4 text-rose-500 shrink-0"
                    />
                  </span>
                </div>
              </AspectRatio>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-12 md:mt-16">
          <Button
            asChild
            className="bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button btn-shimmer hover:scale-[1.04] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          >
            <a href="#contact">{dict.btn}</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
