"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { modules } from "@/lib/data";

export const Modules = () => {
  return (
    <section id="modules" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <Badge variant="secondary" className="bg-zinc-100/80 backdrop-blur-md border border-zinc-200/50 shadow-sm text-black px-3 py-1.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-6 inline-block h-auto">
            Modules
          </Badge>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black text-center leading-[1.1]">
            The Complete Vedita Editz <br className="hidden md:block" />
            <span className="font-serif-italic text-black/40 font-normal">
              Motion Design System
            </span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mt-6 max-w-2xl text-center">
            The difference between motion designers who charge $500 and those
            who charge $7K isn&apos;t talent. It&apos;s understanding what moves
            feel intentional instead of accidental. You&apos;re about to learn
            exactly that.
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {modules.left.map((module, i) => (
              <ScrollReveal key={module.id}>
                <AccordionItem
                  value={module.id}
                  className={`${
                    i === 0 ? "border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-5 md:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-lg md:text-xl font-medium text-black text-left">
                      {module.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 text-base md:text-lg leading-relaxed pt-2">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-4 md:mt-0">
          <Accordion type="single" collapsible className="w-full">
            {modules.right.map((module, i) => (
              <ScrollReveal key={module.id}>
                <AccordionItem
                  value={module.id}
                  className={`${
                    i === 0 ? "border-b-2 md:border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] pb-3 md:py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-5 md:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-lg md:text-xl font-medium text-black text-left">
                      {module.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 text-base md:text-lg leading-relaxed pt-2">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
