"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { endResultVideos } from "@/lib/data";

export const EndResult = () => {
  return (
    <section id="end-result" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            The End Result
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            This Is What You&apos;ll Be Able to <span className="font-serif-italic text-[#FF5100] font-normal">Create</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            If these look like Apple keynote material to you, you&apos;re seeing it correctly. That&apos;s the standard you&apos;re
            learning.
          </p>
        </div>
      </ScrollReveal>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
        {endResultVideos.map((video) => (
          <ScrollReveal key={video.id}>
            <div
              className={`relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-lg pattern-bg ${video.mt}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-0"
                aria-label={`Motion design preview for ${video.title}`}
              ></video>
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <Avatar className="w-10 h-10 rounded-xl border border-white/20">
                  <AvatarImage
                    src={video.img}
                    alt={video.title}
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-xl">{video.title[0]}</AvatarFallback>
                </Avatar>
                <span className="text-[#f5f5f5] font-bold text-lg flex items-center gap-1">
                  {video.title}
                  <Image
                    src="/icons/verified.webp"
                    className="w-4 h-4"
                    alt="Check"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-16">
          <Button
            asChild
            className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-lg px-10 py-7 rounded-full glow-button hover:scale-105 transition-all duration-300"
          >
            <a href="#pricing">I want To Create Work Like This</a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
