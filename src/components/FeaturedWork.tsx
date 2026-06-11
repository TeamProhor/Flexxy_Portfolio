"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LazyVideo } from "./ui/LazyVideo";

import { allProjects } from "@/lib/data";

export const FeaturedWork = () => {
  return (
    <section id="work" className="flex flex-col items-center mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Selected Projects
          </Badge>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1]">
            Featured Work
          </h2>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl text-center">
            A curated selection of my best commercial and documentary edits.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-7xl">
        {allProjects.slice(0, 3).map((p, index) => (
          <ScrollReveal key={p.id} delay={index * 0.1}>
            <div className="flex flex-col gap-4 group">
              <div className="relative w-full rounded-[24px] overflow-hidden bg-zinc-900 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
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
    </section>
  );
};
