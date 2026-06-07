"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Purpose = () => {
  return (
    <section id="purpose" className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <ScrollReveal>
          <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Purpose
          </Badge>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
            Build a Portfolio That Makes Clients <br className="hidden md:block" />
            <span className="font-serif-italic text-[#FF4D47] font-normal">Choose You First</span>
          </h2>
          <p className="text-[#6b6b6b] text-base md:text-lg mt-6 leading-relaxed">
            Have your reels and X page flooded with work where clients look at your rate and think &quot;that&apos;s reasonable for
            this quality&quot; instead of &quot;can you go lower?&quot;
          </p>
        </ScrollReveal>
      </div>

      {/* Right: Video */}
      <div className="w-full md:w-1/2">
        <ScrollReveal>
          <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-2xl pattern-bg">
            <AspectRatio ratio={4 / 5}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <video
                src="https://framerusercontent.com/assets/RHvEyqdnPvDAB5Vew1I6LccWE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-0"
                aria-label="Motion portfolio demonstration"
              ></video>

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                <Avatar className="size-10 md:size-[50px] rounded-xl md:rounded-2xl border border-white/10 shadow-lg bg-white">
                  <AvatarImage
                    src="/image/portal-avatar.webp"
                    alt="Portal"
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-2xl">P</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight flex items-center gap-2">
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
