"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="hero" className="flex flex-col items-center text-center mt-10 md:mt-12">
      <ScrollReveal>
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-1 py-1 pr-4 bg-zinc-900 rounded-full mb-8 shadow-sm">
          <Badge className="bg-black text-white text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-700 h-auto">
            For motion designers
          </Badge>
          <span className="text-zinc-300 text-xs md:text-sm font-medium">Join</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-[72px] leading-[1.05] tracking-tight font-medium text-black max-w-4xl mx-auto">
         Editor that actually stops the scroll
          <br />
          <PointerHighlight
            rectangleClassName="bg-zinc-100 border-zinc-200"
            pointerClassName="text-[#FF4D47]"
            containerClassName="inline-block"
          >
            <span className="font-serif-italic text-[#FF4D47] font-normal tracking-normal px-6 relative z-10">
              vedita editz
            </span>
          </PointerHighlight>
        </h1>

        {/* Subtitle */}
        <p className="text-[#6b6b6b] text-base md:text-xl mt-6 max-w-2xl mx-auto">
        The motion design language that separates $500 freelancers from designers who command $10K per project.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          className="mt-10 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full glow-button hover:scale-105 transition-all duration-300"
        >
          <a href="#pricing">Get Access Now</a>
        </Button>

        {/* Hero Video Embed */}
        <div className="mt-16 md:mt-20 w-full max-w-5xl mx-auto rounded-2xl md:rounded-[36px] overflow-hidden shadow-2xl relative bg-zinc-100 ring-1 ring-black/5">
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-16 md:size-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[18px] md:border-l-[22px] border-l-black ml-1.5" />
                  </div>
                </div>
              </button>
            ) : (
              <iframe sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/88OFD4fWJc4?autoplay=1&mute=0&modestbranding=1&rel=0"
                title="Youtube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </AspectRatio>
        </div>
      </ScrollReveal>
    </section>
  );
};
