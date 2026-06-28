"use client";

import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { capabilities } from "@/lib/data";
import Image from "next/image";

export const AboutContent = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pb-32">
      <div className="flex flex-col gap-24">
        
        {/* Philosophy */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <ScrollReveal variant="slide-left">
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6"
                style={{ textWrap: "balance", letterSpacing: "-0.02em" }}
              >
                Post-production is the final rewrite of the story.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6" style={{ textWrap: "pretty" }}>
                Most editors just cut clips. I focus on rhythm, pacing, and emotional resonance. Whether it&apos;s a 15-second social commercial or a 20-minute documentary, every single frame has to justify its existence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light" style={{ textWrap: "pretty" }}>
                My approach blends high-end motion design with documentary-style storytelling to create work that feels premium, effortless, and entirely unique to your brand.
              </p>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2">
            <ScrollReveal variant="slide-right" delay={0.15}>
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop"
                  alt="Minimalist desk setup with a laptop and notebook"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Toolkit / Capabilities */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="bg-[#171717] rounded-2xl md:rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-serif-italic text-white">Capabilities</h3>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.id}>
                  <h4 className="text-white font-medium mb-2">{cap.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
