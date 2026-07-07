"use client";

import { useGSAP } from "@gsap/react";
import { SealCheck } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { allProjects } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectTranslation {
  id: number;
  slug: string;
  title: string;
  client: string;
  role: string;
  year: string;
  description: string;
}

interface WorksGridProps {
  projectsData: ProjectTranslation[];
}

export const WorksGrid = ({ projectsData }: Readonly<WorksGridProps>) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const items = gsap.utils.toArray<HTMLElement>(".works-grid-item");

      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      ScrollTrigger.batch(items, {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.1,
              overwrite: true,
            },
          );
        },
        start: "top 92%",
        once: true,
      });
    },
    { scope: gridRef },
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-6 pb-32">
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]"
      >
        {projectsData.map((p) => {
          const asset = allProjects.find((ap) => ap.id === p.id);
          if (!asset) return null;

          return (
            <div
              key={p.id}
              className={`works-grid-item h-full w-full ${asset.colSpan}`}
              style={{ opacity: 0 }}
            >
              <Link
                href={`/works/${p.slug}`}
                className="flex flex-col gap-4 group h-full w-full block"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                  <LazyVideo
                    src={asset.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    ariaLabel={p.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-6 left-6 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-medium text-white">
                      {p.title}
                    </h3>
                    <p className="text-zinc-300 flex items-center gap-1">
                      {p.client}
                      <SealCheck
                        weight="fill"
                        className="w-3.5 h-3.5 text-white shrink-0"
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
