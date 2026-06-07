"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

export const Outcome = () => {
  return (
    <section id="outcome" className="flex flex-col md:flex-row gap-12 md:gap-16 items-center px-4 md:px-0">
      {/* Left: Videos */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <ScrollReveal>
          {/* Figma Video Card */}
          <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-2xl pattern-bg group">
            <AspectRatio ratio={4 / 5}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <video
                src="https://framerusercontent.com/assets/g1ZBzF5S0xNUSr65xEIQhuqtmVs.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-0"
                aria-label="UI animation demonstration in Figma"
              ></video>

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-3">
                <Avatar className="size-10 md:size-[50px] rounded-xl md:rounded-2xl border border-white/10 shadow-lg">
                  <AvatarImage
                    src="/image/figma-avatar.webp"
                    alt="Figma"
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-2xl">F</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight flex items-center gap-2">
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
        <ScrollReveal>
          <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Outcome
          </Badge>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
            Motion Work That Actually{" "}
            <span className="font-serif-italic text-[#FF4D47] font-normal">Stops the Scroll.</span>
          </h2>
          <p className="text-[#6b6b6b] text-base md:text-lg mt-6 leading-relaxed">
            Right now your work gets 200 likes from other designers but zero DMs from paying clients. Here&apos;s what&apos;s
            changed: Your Instagram feed looks like an Apple product launch. UI animations that feel intentional, not
            chaotic. Timing is so clean people assume you work for a tech giant. It&apos;s not talent — it&apos;s a system you&apos;re
            about to learn.
          </p>

          {/* Stats floating cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full md:w-auto">
            <Card className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-row items-center justify-center md:justify-start gap-3 ring-0">
              <div className="w-2 h-2 bg-gray-400 rounded-full shrink-0"></div>
              <span className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">1.9k profile clicks</span>
            </Card>
            <Card className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-row items-center justify-center md:justify-start gap-3 ring-0">
              <div className="w-2 h-2 bg-pink-400 rounded-full shrink-0"></div>
              <span className="text-gray-500 font-medium whitespace-nowrap text-sm md:text-base">200k+ views</span>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
