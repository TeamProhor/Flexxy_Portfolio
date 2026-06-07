import { ScrollReveal } from "./ScrollReveal";

export const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      stage: "Stage 1:",
      title: "Foundation & Control",
      description:
        "If you’re starting from zero, this stage gets you oriented fast. You’ll learn how After Effects actually works — interface, layers, compositions, and core tools — without getting lost in features you don’t need yet. By the end, you can move confidently instead of guessing.",
      isLast: false,
      hasBr: false,
    },
    {
      step: "Step 2",
      stage: "Stage 2:",
      title: "Motion Techniques",
      description:
        "Here’s where your work starts separating from tutorials. You’ll learn the effects, workflows, and techniques used daily in real motion projects — the ones that feel subtle, hard to master, and immediately level up your animations when done right.",
      isLast: false,
      hasBr: true,
    },
    {
      step: "Step 3",
      stage: "Stage 3:",
      title: "Advanced Execution",
      description:
        "This stage focuses on depth and polish. You’ll watch full editing sessions (1–2 hours) where complete animations are built end to end — decisions, mistakes, refinements included. This is where timing, restraint, and confidence come together.",
      isLast: false,
      hasBr: true,
    },
    {
      step: "Step 4",
      stage: "Stage 4:",
      title: "Instagram Growth Strategy",
      description:
        "Motion alone isn’t enough if no one sees it. You’ll get a clear Instagram strategy: what to post, how to frame your work, and how to grow without chasing trends. Includes a step-by-step breakdown of how I reached 20K — and how to replicate the process.",
      isLast: true,
      hasBr: true,
    },
  ];

  return (
    <section id="how-it-works" className="flex flex-col gap-12 mt-10 max-w-3xl mx-auto w-full">
      {steps.map((item, i) => (
        <ScrollReveal key={i}>
          <div className={`relative flex gap-8 ${!item.isLast ? "timeline-line" : ""}`}>
            <div
              className={`relative z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${
                i > 0 ? "mt-4" : ""
              }`}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className={`flex flex-col gap-4 ${!item.isLast ? "pb-12" : ""} ${i > 0 ? "mt-4" : ""}`}>
              <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider w-max inline-block">
                {item.step}
              </span>
              <h2 className="text-[39px] leading-[1.1] text-black">
                <span className="font-serif-italic font-normal">{item.stage}</span>
                {item.hasBr ? <br /> : " "}
                <span
                  className={`tracking-tight ${
                    i === 0 ? "font-bold text-[#FF5100]" : "font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </h2>
              <p className="text-[#6b6b6b] text-lg leading-relaxed">{item.description}</p>
              <a
                href="#pricing"
                className="mt-4 inline-block bg-[#ff0000] text-white font-semibold text-lg px-8 py-3 rounded-full glow-button hover:scale-105 transition-transform duration-300 w-max"
              >
                I&apos;m Ready to Learn the System
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
};
