import { ScrollReveal } from "./ScrollReveal";

export const FAQs = () => {
  const leftFaqs = [
    "Do I need prior After Effects experience to start?",
    "How long does it take before my work noticeably improves?",
    "What if my work still doesn't feel \"premium\" after finishing?",
  ];

  const rightFaqs = [
    "Is this useful if I already know After Effects well?",
    "Will this actually help me attract better-paying clients?",
    "Is this focused on cinematic editing or UI / product motion?",
  ];

  const Icon = () => (
    <svg viewBox="0 0 256 256" width="24" height="24" fill="#000" className="shrink-0 ml-4">
      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
    </svg>
  );

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
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center mb-16">FAQs</p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftFaqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <div
                className={`${
                  i === 0 ? "border-y-2" : "border-b-2"
                } border-dashed border-[#e6e6e6] py-6 flex items-center justify-between cursor-pointer hover:opacity-70 transition-opacity`}
              >
                <h4 className="text-xl font-medium">{faq}</h4>
                <Icon />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          {rightFaqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <div
                className={`${
                  i === 0 ? "border-b-2 md:border-y-2" : "border-b-2"
                } border-dashed border-[#e6e6e6] pb-6 md:py-6 flex items-center justify-between cursor-pointer hover:opacity-70 transition-opacity`}
              >
                <h4 className="text-xl font-medium pr-4">{faq}</h4>
                <Icon />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
