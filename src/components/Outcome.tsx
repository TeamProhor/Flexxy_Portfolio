"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { LazyVideo } from "./ui/LazyVideo";

export const Outcome = () => {
  return (
    <section id="outcome" className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      {/* Left: Videos */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <ScrollReveal>
          {/* Figma Video Card */}
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] pattern-bg group">
            <AspectRatio ratio={4 / 5}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <LazyVideo
                src="https://framerusercontent.com/assets/g1ZBzF5S0xNUSr65xEIQhuqtmVs.mp4"
                className="w-full h-full object-cover relative z-0"
                ariaLabel="UI animation demonstration in Figma"
              />
...
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                <div className="relative size-10 md:size-[50px] rounded-xl md:rounded-2xl border border-white/10 shadow-lg overflow-hidden">
                  <Image
                    src="/image/figma-avatar.webp"
                    alt="Figma"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tighter flex items-center gap-2">
                    Figma
                    <Image
                      src="/icons/verified.webp"
                      className="size-4 md:size-5"
                      alt="Verified"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </AspectRatio>
          </div>
        </ScrollReveal>
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <ScrollReveal delay={0.12}>
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Outcome
          </Badge>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-black leading-[1.1]">
            Motion Work That Actually{" "}
            <span className="font-serif-italic text-gradient-primary font-normal">Stops the Scroll.</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mt-6 leading-relaxed">
            Your brand deserves video content that looks like an Apple product launch. From dynamic commercials to cinematic documentaries, I deliver high-end post-production that captures attention and drives results. It&apos;s not just editing — it&apos;s crafting a visual experience.
          </p>

          {/* Stats floating cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full md:w-auto">
            <Card className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-row items-center justify-center md:justify-start gap-3 ring-0 transition-all duration-200 hover:shadow-md hover:border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
              <span className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">10M+ Views Delivered</span>
            </Card>
            <Card className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-row items-center justify-center md:justify-start gap-3 ring-0 transition-all duration-200 hover:shadow-md hover:border-gray-300">
              <div className="w-2 h-2 bg-rose-500 rounded-full shrink-0"></div>
              <span className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">Award-Winning Edits</span>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
