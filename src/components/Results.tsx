"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { testimonials } from "@/lib/data";

export const Results = () => {
  return (
    <section id="results" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Results
          </Badge>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1]">
            Results From Motion Designers Like You
          </h2>
          <p className="text-zinc-500 text-lg mt-6 max-w-2xl text-center">
            What happens when designers stop guessing and start animating with intention.
          </p>
        </div>
      </ScrollReveal>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-7xl">
        {testimonials.map((t, index) => (
          <ScrollReveal key={t.id} delay={index * 0.1}>
            <div className="h-full">
              <Card className="bg-[#F7F7F7] rounded-[24px] p-6 md:p-8 flex flex-col gap-6 shadow-sm ring-0 h-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1.5 hover:shadow-lg hover:bg-white group">
                <div className="flex flex-col gap-4 flex-grow">
                  <h3 className="text-5xl font-medium text-gray-300 font-serif leading-none transition-colors duration-300 group-hover:text-gradient-primary/40">&quot;</h3>
                  <p className="text-base md:text-lg text-[#1c1c1c] leading-relaxed">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200/50">
                  <div className="relative size-12 rounded-full overflow-hidden shadow-sm">
                    <Image
                      src={t.img}
                      alt={t.author}
                      width={80}
                      height={80}
                      className={`object-cover w-full h-full ${t.imgPos}`}
                    />
                  </div>
                  <span className="font-medium text-base text-black flex items-center gap-1">
                    {t.author}
                    <Image
                      src="/icons/verified.webp"
                      className="w-4 h-4"
                      alt="Verified"
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
