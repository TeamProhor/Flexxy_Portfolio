import { ScrollReveal } from "./ScrollReveal";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dashed border-[#e6e6e6] pt-12 mt-12 overflow-hidden flex flex-col items-center">
      <div className="text-[#6b6b6b] text-sm mb-12 px-6 text-center">Copyright © Editucation 2026</div>

      <div className="w-full relative px-6 md:px-10 max-w-[1400px] mx-auto pb-4">
        <ScrollReveal>
          <h1 className="text-[12vw] font-medium tracking-tighter text-center leading-none gradient-text-footer select-none">
            Editucation.io
          </h1>
        </ScrollReveal>
      </div>
    </footer>
  );
};
