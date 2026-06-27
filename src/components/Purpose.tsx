"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LazyVideo } from "./ui/LazyVideo";

export const Purpose = () => {
  return (
    <section id="purpose" className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center md:text-left leading-[1.1] [text-wrap:balance]">
            Video Edits That Make Your Audience
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              Choose You First
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 leading-relaxed [text-wrap:pretty]">
            I partner with ambitious brands and creators to produce videos that command premium attention. Clean cuts, intentional motion, and flawless pacing.
          </p>
        </ScrollReveal>
      </div>

      {/* Right: Video */}
      <div className="w-full md:w-1/2">
        <ScrollReveal delay={0.12}>
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)]">
            <AspectRatio ratio={4 / 5}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <LazyVideo
                src="https://framerusercontent.com/assets/RHvEyqdnPvDAB5Vew1I6LccWE.mp4"
                className="w-full h-full object-cover relative z-0"
                ariaLabel="Motion portfolio demonstration"
              />

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                <div className="relative size-10 md:size-[50px] rounded-xl md:rounded-2xl border border-white/10 shadow-lg bg-background overflow-hidden">
                  <Image
                    src="/image/portal-avatar.webp"
                    alt="Portal"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tighter flex items-center gap-2">
                    Portal
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
    </section>
  );
};
