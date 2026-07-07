"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

interface AboutContentProps {
  dict: {
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    capabilitiesTitle: string;
  };
  capabilitiesData: CapabilityItem[];
}

export const AboutContent = ({
  dict,
  capabilitiesData,
}: Readonly<AboutContentProps>) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pb-32">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <ScrollReveal variant="slide-left">
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6"
                style={{ textWrap: "balance", letterSpacing: "-0.02em" }}
              >
                {dict.philosophyTitle}
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed font-light mb-6"
                style={{ textWrap: "pretty" }}
              >
                {dict.philosophyP1}
              </p>
              <p
                className="text-lg text-muted-foreground leading-relaxed font-light"
                style={{ textWrap: "pretty" }}
              >
                {dict.philosophyP2}
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

        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="bg-[#171717] rounded-2xl md:rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-serif-italic text-white">
                {dict.capabilitiesTitle}
              </h3>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilitiesData.map((cap) => (
                <div key={cap.id}>
                  <h4 className="text-white font-medium mb-2">{cap.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
