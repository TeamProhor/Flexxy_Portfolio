"use client";

import { ScrollReveal } from "@/components/landing/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export const FAQs = () => {
  return (
    <section id="faqs" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1] [text-wrap:balance]">
            Things You&apos;re
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              Probably Wondering
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl text-center mb-12 md:mb-16 [text-wrap:pretty]">
            Everything you need to know about my video editing process.
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
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-5 md:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-foreground">
                    <h4 className="text-lg md:text-xl font-medium text-foreground text-left pr-4">
                      {faq.q}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2">
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
                  <AccordionTrigger className="hover:no-underline hover:opacity-70 transition-opacity **:data-[slot=accordion-trigger-icon]:size-5 md:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-foreground">
                    <h4 className="text-lg md:text-xl font-medium text-foreground text-left pr-4">
                      {faq.q}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2">
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
