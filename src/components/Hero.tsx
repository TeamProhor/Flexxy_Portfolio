"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";
import { Demo as Loader } from "@/components/Loader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".hero-pill, .hero-headline, .hero-accent, .hero-sub, .hero-loader, .hero-video", {
        opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", filter: "blur(0px)",
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Pill badge — fade up from slight blur
    tl.fromTo(".hero-pill",
      { opacity: 0, y: 20, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
      0.2
    );

    // 2. Headline line 1 — clip-path wipe from bottom
    tl.fromTo(".hero-headline",
      { opacity: 0, y: 30, clipPath: "inset(100% 0% 0% 0%)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
      0.35
    );

    // 3. Accented text — slightly later, with a scale pop
    tl.fromTo(".hero-accent",
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9 },
      0.55
    );

    // 4. Subtitle — clean fade up
    tl.fromTo(".hero-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.7
    );

    // 5. Loader widget
    tl.fromTo(".hero-loader",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.85
    );

    // 6. Video container — scale up with shadow bloom
    tl.fromTo(".hero-video",
      { opacity: 0, y: 60, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
      0.95
    );

    // Parallax: video container moves subtly on scroll
    const videoEl = containerRef.current.querySelector(".hero-video");
    if (videoEl) {
      gsap.to(videoEl, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className="relative flex flex-col items-center text-center mt-10 md:mt-12">
      {/* Radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-[560px]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(255,50,50,0.065) 0%, transparent 100%)",
        }}
      />



      {/* Headline */}
      <h1 className="text-4xl md:text-[72px] leading-[1.05] tracking-tight font-medium text-foreground max-w-4xl mx-auto" style={{ letterSpacing: "-0.03em" }}>
        <span className="hero-headline inline-block" style={{ opacity: 0 }}>
          Editor that actually
        </span>
        <br />
        <PointerHighlight
          rectangleClassName="bg-secondary border-border"
          pointerClassName="text-rose-500"
          containerClassName="inline-block"
        >
          <span className="hero-accent font-serif-italic text-rose-500 font-normal tracking-normal px-6 relative z-10 inline-block" style={{ opacity: 0 }}>
            stops the scroll
          </span>
        </PointerHighlight>
      </h1>

      {/* Subtitle */}
      <p
        className="hero-sub text-muted-foreground text-base md:text-xl mt-6 max-w-2xl mx-auto"
        style={{ opacity: 0, textWrap: "pretty" }}
      >
        Premium video editing and post-production that elevates your brand and turns viewers into paying customers.
      </p>

      {/* Loader */}
      <div className="hero-loader mt-10 flex justify-center w-full" style={{ opacity: 0 }}>
        <Loader />
      </div>

      {/* Hero video */}
      <div className="hero-video mt-16 md:mt-20 w-full max-w-5xl mx-auto" style={{ opacity: 0 }}>
        <div className="rounded-2xl md:rounded-[28px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.12)] relative bg-secondary border border-border/50 transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.16)]">
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
                  <div className="size-16 md:size-20 bg-background/90 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:bg-background group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
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
      </div>
    </section>
  );
};
