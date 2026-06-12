"use client";

import { ScrollReveal } from "./ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LazyVideo } from "./ui/LazyVideo";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allProjects } from "@/lib/data";

export const FeaturedWork = () => {
  return (
    <section id="work" className="flex flex-col items-center mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1] [text-wrap:balance]">
            Featured
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              Work
            </span>
          </h2>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl text-center">
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
                <h3 className="text-xl font-medium text-black">{p.title}</h3>
                <p className="text-zinc-500">{p.client}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-12 md:mt-16">
          <Button
            asChild
            variant="outline"
            className="border-zinc-200 hover:bg-zinc-50 text-black font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link href="/works">View All Works</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
