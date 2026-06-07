"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { modules } from "@/lib/data";

export const Modules = () => {
  return (
    <section id="modules" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Modules
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            The Complete Vedita Editz <br />
            <span className="font-serif-italic text-black/40 font-normal">
              Motion Design System
            </span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            The difference between motion designers who charge $500 and those
            who charge $7K isn&apos;t talent. It&apos;s understanding what moves
            feel intentional instead of accidental. You&apos;re about to learn
            exactly that.
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {modules.left.map((module, i) => (
              <ScrollReveal key={i}>
                <AccordionItem
                  value={`left-${i}`}
                  className={`${
                    i === 0 ? "border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-xl font-medium text-black">
                      {module.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] text-lg leading-relaxed pt-2">
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
              <ScrollReveal key={i}>
                <AccordionItem
                  value={`right-${i}`}
                  className={`${
                    i === 0 ? "border-b-2 md:border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] pb-3 md:py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-xl font-medium text-black">
                      {module.title}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] text-lg leading-relaxed pt-2">
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

