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
          <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            The End Result
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            This Is What You&apos;ll Be Able to <br className="md:hidden" /><span className="font-serif-italic text-[#FF5100] font-normal">Create</span>
          </h2>
          <p className="text-[#6b6b6b] text-base md:text-lg mt-6 max-w-2xl text-center">
            If these look like Apple keynote material to you, you&apos;re seeing it correctly. That&apos;s the standard you&apos;re
            learning.
          </p>
        </div>
      </ScrollReveal>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 w-full">
        {endResultVideos.map((video) => (
          <ScrollReveal key={video.id}>
            <div
              className={`relative w-full rounded-2xl md:rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-lg pattern-bg ${video.mt} md:mt-0 lg:${video.mt}`}
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
            className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button hover:scale-105 transition-all duration-300"
          >
            <a href="#pricing">I want To Create Work Like This</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
