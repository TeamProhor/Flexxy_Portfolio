"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center text-center mt-12 px-4">
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
          Master the design system behind Apple&apos;s{" "}
          <span className="font-serif-italic text-[#FF4D47] font-normal tracking-normal pr-2">
            motion language
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#6b6b6b] text-base md:text-xl mt-6 max-w-2xl mx-auto px-4 md:px-0">
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
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/88OFD4fWJc4?autoplay=1&mute=1&loop=1&playlist=88OFD4fWJc4&color=white&modestbranding=1&playsinline=1&rel=0"
              title="Youtube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-popups allow-forms allow-presentation"
            ></iframe>
          </AspectRatio>
        </div>
      </ScrollReveal>
    </section>
  );
};
