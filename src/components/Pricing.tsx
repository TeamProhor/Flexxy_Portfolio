"use client";

import { ScrollReveal } from "./ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { pricingPlans } from "@/lib/data";

export const Pricing = () => {
  return (
    <section id="pricing" className="flex flex-col items-center md:mt-10">
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
          <Card className="bg-[#F0F0F0] rounded-[32px] border border-black/5 ring-0 shadow-sm flex flex-col h-full overflow-hidden">
            <CardHeader className="p-6 md:p-10 pb-4 md:pb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="size-12 md:size-16 bg-black/80 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <ArrowRightIcon className="size-5 md:size-6" color="#ffffff" weight="bold" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-2xl md:text-3xl font-medium text-black">
                    Basic Plan
                  </CardTitle>
                  <CardDescription className="text-[#5c5c5c] text-sm leading-relaxed max-w-[280px]">
                    The essentials of the Apple motion language to start charging more.
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-5xl md:text-6xl font-medium text-black tracking-tight">{pricingPlans.basic.price}</span>
                <span className="text-[#5c5c5c] text-base md:text-lg font-medium pb-1 md:pb-2">{pricingPlans.basic.period}</span>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-10 pt-0 flex-grow">
              <Separator className="bg-black/10 mb-8" />
              <ul className="space-y-4">
                {pricingPlans.basic.features.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-3">
                    <div className="bg-black/10 rounded-full p-1 flex items-center justify-center shrink-0">
                      <CheckIcon size={14} color="#000" weight="bold" className="md:size-4" />
                    </div>
                    <span className="text-black font-medium text-sm md:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 md:p-10 pt-0 border-t-0 bg-transparent">
              <Button
                type="button"
                className="w-full bg-black/80 hover:bg-black text-white py-6 md:py-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all border border-white/10 text-base md:text-lg"
              >
                Get Started
                <ArrowRightIcon className="size-4 md:size-5" color="#ffffff" weight="bold" />
              </Button>
            </CardFooter>
          </Card>
        </ScrollReveal>

        {/* Premium Plan */}
        <ScrollReveal>
          <Card className="relative rounded-[32px] border-0 ring-0 shadow-2xl flex flex-col h-full overflow-hidden group">
            {/* Background Image */}
            <Image
              src="/image/pricing-bg.webp"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Dark Background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-0 group-hover:bg-black/30 transition-colors duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <CardHeader className="p-6 md:p-10 pb-4 md:pb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="size-12 md:size-16 bg-red-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(255,0,0,0.3)] border border-white/20 shrink-0">
                    <ArrowRightIcon className="size-5 md:size-6" color="#ffffff" weight="bold" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl md:text-3xl font-medium text-white">
                      Premium Plan
                    </CardTitle>
                    <CardDescription className="text-white/70 text-sm leading-relaxed max-w-[280px]">
                      The full system plus 1:1 strategy to dominate the market.
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">{pricingPlans.premium.price}</span>
                  <span className="text-[#FF2D26] text-xl md:text-2xl font-bold mt-1 tracking-tight">{pricingPlans.premium.period}</span>
                </div>
              </CardHeader>

              <CardContent className="p-6 md:p-10 pt-0 flex-grow">
                <Separator className="bg-white/20 mb-8" />
                <ul className="space-y-4">
                  {pricingPlans.premium.features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center">
                        <CheckIcon size={14} color="#fff" weight="bold" className="md:size-4" />
                      </div>
                      <span className="text-white font-medium leading-tight text-sm md:text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 md:p-10 pt-0 border-t-0 bg-transparent">
                <Button
                  type="button"
                  className="w-full bg-[#FF1F1F] hover:bg-red-700 text-white py-6 md:py-8 rounded-full font-bold flex items-center justify-center gap-2 transition-all border border-white/20 shadow-xl text-base md:text-lg glow-button"
                >
                  Get Started
                  <ArrowRightIcon className="size-4 md:size-5" color="#ffffff" weight="bold" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
