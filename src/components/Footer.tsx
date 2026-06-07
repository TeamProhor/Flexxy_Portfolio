"use client";

import { ScrollReveal } from "./ScrollReveal";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dashed border-[#e6e6e6] pt-12 mt-12 overflow-hidden flex flex-col items-center px-4">
      <div className="text-[#6b6b6b] text-xs md:text-sm mb-12 text-center">Copyright © Vedita Editz 2026</div>

      <div className="w-full relative md:px-10 max-w-[1400px] mx-auto pb-8 md:pb-4">
        <ScrollReveal>
          <h1 className="text-[14vw] md:text-[12vw] font-medium tracking-tighter text-center leading-none gradient-text-footer select-none">
            VeditaEditz.com
          </h1>
        </ScrollReveal>
      </div>
    </footer>
  );
};
