"use client";

import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface ContactProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
    btn: string;
  };
}

export const Contact = ({ dict }: Readonly<ContactProps>) => {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-10 md:py-20">
      <ScrollReveal>
        <div className="bg-[#0b0c0e] border border-zinc-800/80 rounded-2xl md:rounded-3xl p-10 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/[0.07] to-transparent pointer-events-none" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white text-center leading-[1.1] max-w-2xl z-10">
            {dict.title1}
            <br />
            <span className="font-serif-italic text-rose-500 font-normal">
              {dict.title2}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed [text-wrap:pretty] z-10">
            {dict.subtitle}
          </p>

          <div className="mt-12 z-10">
            <a
              href="mailto:hello@example.com"
              className="bg-gradient-to-br from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold text-lg px-10 py-5 rounded-full glow-button btn-shimmer hover:scale-[1.04] active:scale-[0.97] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] inline-block shadow-lg"
            >
              {dict.btn}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
