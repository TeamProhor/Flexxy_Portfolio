"use client";

import { ScrollReveal } from "./ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import Image from "next/image";

import { pricingPlans } from "@/lib/data";

export const Pricing = () => {
  return (
    <section id="pricing" className="flex flex-col items-center mt-10">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Pricing
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Price It Once. <br />
            <span className="font-serif-italic text-black/40 font-normal">Use It for Years.</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            Most designers never learn why some motion commands higher rates. You will and you’ll apply it immediately.
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
        {/* Basic Plan */}
        <ScrollReveal>
          <div className="bg-[#F0F0F0] rounded-[32px] p-10 flex flex-col justify-between shadow-sm h-full">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-black/80 rounded-2xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <ArrowRightIcon size={24} color="#ffffff" weight="bold" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-black">Basic Plan</h3>
                  <p className="text-[#5c5c5c] mt-2 text-sm leading-relaxed max-w-[280px]">
                    The difference between motion designers who charge $500 and those who charge $7K isn&apos;t talent. It&apos;s
                    understanding what moves feel intentional instead of accidental. You&apos;re about to learn exactly that.
                  </p>
                </div>
              </div>

              <div className="flex items-end mb-8">
                <span className="text-6xl font-medium text-black">{pricingPlans.basic.price}</span>
                <span className="text-[#5c5c5c] text-lg mb-2 ml-1">{pricingPlans.basic.period}</span>
              </div>

              <hr className="border-black/10 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {pricingPlans.basic.features.map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-black/10 rounded-full p-1 flex items-center justify-center">
                      <CheckIcon size={16} color="#000" weight="bold" />
                    </div>
                    <span className="text-black font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="w-full bg-black/80 hover:bg-black text-white text-center py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors border border-white/10"
            >
              Get Started
              <ArrowRightIcon size={18} color="#ffffff" weight="bold" />
            </a>
          </div>
        </ScrollReveal>

        {/* Premium Plan */}
        <ScrollReveal>
          <div className="relative rounded-[32px] p-10 flex flex-col justify-between overflow-hidden shadow-2xl group h-full">
            <Image
              src="/image/pricing-bg.webp"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Dark Background"
              fill
            />
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-black/80 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0">
                  <ArrowRightIcon size={24} color="#ffffff" weight="bold" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-white">Premium Plan</h3>
                  <p className="text-white/70 mt-2 text-sm leading-relaxed max-w-[280px]">
                    Built for designers who want to turn premium motion into premium rates. Includes advanced strategy,
                    client acquisition frameworks, and direct 1:1 help so you&apos;re not just improving your work, but your
                    positioning and income.
                  </p>
                </div>
              </div>

              <div className="flex flex-col mb-8">
                <span className="text-6xl font-medium text-white">{pricingPlans.premium.price}</span>
                <span className="text-[#FF2D26] text-2xl font-normal mt-1">{pricingPlans.premium.period}</span>
              </div>

              <hr className="border-white/20 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {pricingPlans.premium.features.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center">
                      <CheckIcon size={16} color="#fff" weight="bold" />
                    </div>
                    <span className="text-white font-medium leading-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="relative z-10 w-full bg-black/80 hover:bg-black text-white text-center py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors border border-white/20 shadow-xl"
            >
              Get Started
              <ArrowRightIcon size={18} color="#ffffff" weight="bold" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
