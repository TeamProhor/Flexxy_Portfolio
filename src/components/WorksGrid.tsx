"use client";

import Link from "next/link";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { allProjects } from "@/lib/data";

export const WorksGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
        {allProjects.map((p, index) => (
          <ScrollReveal key={p.id} delay={index * 0.1} className={`h-full w-full ${p.colSpan}`}>
            <Link href={`/works/${p.slug}`} className="flex flex-col gap-4 group h-full w-full block">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-zinc-900 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                <LazyVideo
                  src={p.src}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  ariaLabel={p.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-medium text-white">{p.title}</h3>
                  <p className="text-zinc-300">{p.client}</p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
