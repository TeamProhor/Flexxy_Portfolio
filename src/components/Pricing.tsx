"use client";

import { ScrollReveal } from "./ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { pricingPlans } from "@/lib/data";

export const Pricing = () => {
  return (
    <section id="pricing" className="flex flex-col items-center mt-10 px-4 md:px-0">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-[#e6e6e6] text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Price It Once. <br />
            <span className="font-serif-italic text-black/40 font-normal">Use It for Years.</span>
          </h2>
          <p className="text-[#6b6b6b] text-base md:text-lg mt-6 max-w-2xl text-center">
            Most designers never learn why some motion commands higher rates. You will and you’ll apply it immediately.
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-16 w-full max-w-5xl">
        {/* Basic Plan */}
        <ScrollReveal>
          <Card className="bg-[#F0F0F0] rounded-[32px] p-6 md:p-10 flex flex-col justify-between shadow-sm h-full border border-black/5 ring-0">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="size-12 md:size-16 bg-black/80 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <ArrowRightIcon className="size-5 md:size-6" color="#ffffff" weight="bold" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-black">Basic Plan</h3>
                  <p className="text-[#5c5c5c] mt-2 text-sm leading-relaxed max-w-[280px]">
                    The difference between motion designers who charge $500 and those who charge $7K isn&apos;t talent. It&apos;s
                    understanding what moves feel intentional instead of accidental.
                  </p>
                </div>
              </div>

              <div className="flex items-end mb-8">
                <span className="text-5xl md:text-6xl font-medium text-black">{pricingPlans.basic.price}</span>
                <span className="text-[#5c5c5c] text-base md:text-lg mb-1 md:mb-2 ml-1">{pricingPlans.basic.period}</span>
              </div>

              <Separator className="bg-black/10 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {pricingPlans.basic.features.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-3">
                    <div className="bg-black/10 rounded-full p-1 flex items-center justify-center shrink-0">
                      <CheckIcon size={14} color="#000" weight="bold" className="md:size-4" />
                    </div>
                    <span className="text-black font-medium text-sm md:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              type="button"
              className="w-full bg-black/80 hover:bg-black text-white py-6 md:py-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all border border-white/10 text-base md:text-lg"
              aria-label="Get started with Basic Plan"
            >
              Get Started
              <ArrowRightIcon className="size-4 md:size-5" color="#ffffff" weight="bold" />
            </Button>
          </Card>
        </ScrollReveal>

        {/* Premium Plan */}
        <ScrollReveal>
          <Card className="relative rounded-[32px] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl group h-full ring-0 border-0">
            <Image
              src="/image/pricing-bg.webp"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Dark Background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="size-12 md:size-16 bg-black/80 rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0">
                  <ArrowRightIcon className="size-5 md:size-6" color="#ffffff" weight="bold" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">Premium Plan</h3>
                  <p className="text-white/70 mt-2 text-sm leading-relaxed max-w-[280px]">
                    Built for designers who want to turn premium motion into premium rates. Includes advanced strategy and 1:1 help.
                  </p>
                </div>
              </div>

              <div className="flex flex-col mb-8">
                <span className="text-5xl md:text-6xl font-medium text-white">{pricingPlans.premium.price}</span>
                <span className="text-[#FF2D26] text-xl md:text-2xl font-normal mt-1">{pricingPlans.premium.period}</span>
              </div>

              <Separator className="bg-white/20 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {pricingPlans.premium.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center">
                      <CheckIcon size={14} color="#fff" weight="bold" className="md:size-4" />
                    </div>
                    <span className="text-white font-medium leading-tight text-sm md:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              type="button"
              className="relative z-10 w-full bg-black/80 hover:bg-black text-white py-6 md:py-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all border border-white/20 shadow-xl text-base md:text-lg"
              aria-label="Get started with Premium Plan"
            >
              Get Started
              <ArrowRightIcon className="size-4 md:size-5" color="#ffffff" weight="bold" />
            </Button>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
