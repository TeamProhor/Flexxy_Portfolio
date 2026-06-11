"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { socialLinks } from "@/lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-10 md:py-20">
      <ScrollReveal>
        <div className="bg-[#171717] rounded-[32px] md:rounded-[48px] p-10 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent pointer-events-none" />

          <Badge variant="secondary" className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wider mb-8">
            Available for Booking
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white leading-[1.1] max-w-2xl">
            Let&apos;s create something <br className="hidden md:block" />
            <span className="font-serif-italic text-gradient-primary font-normal">extraordinary.</span>
          </h2>
          
          <p className="text-zinc-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            I&apos;m currently taking on new projects for Q3. Whether you need a high-end commercial, a cinematic documentary, or a scroll-stopping social campaign, let&apos;s talk.
          </p>

          <a 
            href="mailto:hello@example.com" 
            className="mt-12 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] inline-block"
          >
            Start a Project
          </a>

          <div className="mt-16 flex gap-6 text-zinc-500 text-sm font-medium z-10 relative">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};
