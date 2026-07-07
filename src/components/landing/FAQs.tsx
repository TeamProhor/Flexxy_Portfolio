"use client";

import { ScrollReveal } from "@/components/landing/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

interface FAQsProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
  };
  faqsData: {
    left: FAQItem[];
    right: FAQItem[];
  };
}

export const FAQs = ({ dict, faqsData }: Readonly<FAQsProps>) => {
  return (
    <section id="faqs" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1] [text-wrap:balance]">
            {dict.title1}
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              {dict.title2}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl text-center mb-12 md:mb-16 [text-wrap:pretty]">
            {dict.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {faqsData.left.map((faq, i) => (
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

        <div className="flex flex-col mt-4 md:mt-0">
          <Accordion type="single" collapsible className="w-full">
            {faqsData.right.map((faq, i) => (
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
