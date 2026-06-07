"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/lib/data";

export const FAQs = () => {
  return (
    <section id="faqs" className="flex flex-col items-center mt-10">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            FAQs
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Things You&apos;re Probably Wondering
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center mb-16">
            FAQs
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {faqs.left.map((faq, i) => (
              <ScrollReveal key={faq.id}>
                <AccordionItem
                  value={faq.id}
                  className={`${
                    i === 0 ? "border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-xl font-medium text-black">{faq.q}</h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] text-lg leading-relaxed pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-4 md:mt-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.right.map((faq, i) => (
              <ScrollReveal key={faq.id}>
                <AccordionItem
                  value={faq.id}
                  className={`${
                    i === 0 ? "border-b-2 md:border-y-2" : "border-b-2"
                  } border-dashed border-[#e6e6e6] py-3 md:py-3`}
                >
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-black">
                    <h4 className="text-xl font-medium text-black pr-4">
                      {faq.q}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] text-lg leading-relaxed pt-2">
                    {faq.a}
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
