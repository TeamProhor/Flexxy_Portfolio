"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LazyVideo } from "./ui/LazyVideo";

import { endResultVideos } from "@/lib/data";

export const EndResult = () => {
  return (
    <section id="end-result" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            The End Result
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black leading-[1.1]">
            Cinematic Details That <br />
            <span className="font-serif-italic text-gradient-primary font-normal">Elevate The Brand</span>
          </h2>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl mx-auto">
            It's not just about cuts; it's about pacing, motion, and visual flow.
          </p>
        </div>
      </ScrollReveal>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 w-full">
        {endResultVideos.map((video, index) => (
          <ScrollReveal key={video.id} delay={index * 0.08}>
            <div
              className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-lg pattern-bg ${video.mt} md:mt-0 lg:${video.mt} transition-transform duration-500 hover:scale-[1.025] hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)]`}
            >
              <AspectRatio ratio={4 / 5}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
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
                    <Image
                      src="/icons/verified.webp"
                      className="size-4"
                      alt="Check"
                      width={16}
                      height={16}
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
            <a href="#pricing">I want To Create Work Like This</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
