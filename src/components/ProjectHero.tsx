"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LazyVideo } from "@/components/ui/LazyVideo";
import Image from "next/image";

export const ProjectHero = ({ title, client, src }: { title: string; client: string; src: string }) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".proj-title, .proj-client, .proj-video", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".proj-title",
      { opacity: 0, y: 30, clipPath: "inset(100% 0% 0% 0%)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9 },
      0.2
    );

    tl.fromTo(".proj-client",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.45
    );

    tl.fromTo(".proj-video",
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
      0.55
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full mt-8 md:mt-12 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1
            className="proj-title text-5xl md:text-7xl font-medium tracking-tight text-foreground text-center leading-[1.05]"
            style={{ opacity: 0, letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            {title}
          </h1>
          <p className="proj-client font-serif-italic text-2xl text-muted-foreground mt-4 text-center flex items-center justify-center gap-1.5" style={{ opacity: 0 }}>
            for {client}
            <Image
              src="/icons/verified.webp"
              alt="Verified"
              width={20}
              height={20}
              className="w-5 h-5 object-contain flex-shrink-0"
            />
          </p>
        </div>
        <div className="proj-video relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-xl" style={{ opacity: 0 }}>
          <LazyVideo
            src={src}
            className="w-full h-full object-cover"
            ariaLabel={title}
          />
        </div>
      </div>
    </section>
  );
};
