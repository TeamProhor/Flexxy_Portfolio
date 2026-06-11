"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: {
            type: "spring" as const,
            damping: 28,
            stiffness: 85,
            delay,
          },
        };

  return (
    <section id="hero" className="relative flex flex-col items-center text-center mt-10 md:mt-12">
      {/* Radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-[560px]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(255,50,50,0.065) 0%, transparent 100%)",
        }}
      />

      <LazyMotion features={domAnimation}>
        {/* Top pill */}
        <m.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-1 py-1 pr-4 bg-zinc-900 rounded-full mb-8 shadow-sm"
        >
          <Badge className="bg-black text-white text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-700 h-auto">
            Available for booking
          </Badge>
          <span className="text-zinc-300 text-xs md:text-sm font-medium">Hire</span>
        </m.div>

        {/* Headline */}
        <m.h1
          {...fadeUp(0.10)}
          className="text-4xl md:text-[72px] leading-[1.05] tracking-tighter font-medium text-black max-w-4xl mx-auto"
        >
          Crafting Cinematic Stories.
          <br />
          <PointerHighlight
            rectangleClassName="bg-zinc-100 border-zinc-200"
            pointerClassName="text-gradient-primary"
            containerClassName="inline-block"
          >
            <span className="font-serif-italic text-gradient-primary font-normal tracking-normal px-6 relative z-10">
              Premium Editor
            </span>
          </PointerHighlight>
        </m.h1>

        {/* Subtitle */}
        <m.p
          {...fadeUp(0.20)}
          className="text-zinc-500 text-base md:text-xl mt-6 max-w-2xl mx-auto"
        >
          Premium video editing and post-production that elevates your brand and turns viewers into paying customers.
        </m.p>

        {/* CTA */}
        <m.div {...fadeUp(0.30)}>
          <Button
            asChild
            className="mt-10 bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button btn-shimmer hover:scale-[1.04] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          >
            <a href="#work">View Featured Work</a>
          </Button>
        </m.div>

        {/* Hero video */}
        <m.div {...fadeUp(0.44)} className="mt-16 md:mt-20 w-full max-w-5xl mx-auto">
          <div className="rounded-2xl md:rounded-[36px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] relative bg-zinc-100 border border-zinc-200/50 shadow-sm transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)]">
            <AspectRatio ratio={16 / 9}>
              {!isPlaying ? (
                <button
                  type="button"
                  className="absolute inset-0 cursor-pointer group w-full h-full border-none p-0 appearance-none bg-transparent"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Video"
                >
                  <Image
                    src="https://img.youtube.com/vi/88OFD4fWJc4/hqdefault.jpg"
                    alt="Video Thumbnail"
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-16 md:size-20 bg-white/90 rounded-full flex items-center justify-center shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                      <div className="w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[18px] md:border-l-[22px] border-l-black ml-1.5" />
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  sandbox="allow-scripts allow-presentation allow-popups"
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/88OFD4fWJc4?autoplay=1&mute=0&modestbranding=1&rel=0"
                  title="Youtube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </AspectRatio>
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};
