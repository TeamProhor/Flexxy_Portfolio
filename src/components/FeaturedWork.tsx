"use client";

import { ScrollReveal } from "./ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LazyVideo } from "./ui/LazyVideo";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allProjects } from "@/lib/data";
import Image from "next/image";

export const FeaturedWork = () => {
  return (
    <section id="work" className="flex flex-col items-center mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1] [text-wrap:balance]">
            Some of my
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              featured work
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl text-center">
            A curated selection of my best commercial and documentary edits.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-7xl">
        {allProjects.slice(0, 3).map((p, index) => (
          <ScrollReveal key={p.id} delay={index * 0.1} variant="scale">
            <div className="flex flex-col gap-4 group">
              <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                <AspectRatio ratio={4 / 5}>
                  <LazyVideo
                    src={p.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    ariaLabel={p.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </AspectRatio>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">{p.title}</h3>
                <p className="text-muted-foreground flex items-center gap-1">
                  {p.client}
                  <Image
                    src="/icons/verified.webp"
                    alt="Verified"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain flex-shrink-0"
                  />
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-12 md:mt-16">
          <Button
            asChild
            className="bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold text-base px-8 py-6 rounded-full glow-button btn-shimmer hover:scale-[1.04] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          >
            <Link href="/works">View All Works</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
