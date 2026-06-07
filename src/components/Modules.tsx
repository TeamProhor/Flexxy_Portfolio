import { ScrollReveal } from "./ScrollReveal";

export const Modules = () => {
  const leftModules = [
    "Module 1: Foundation",
    "Module 3: From Reference to Final Export",
    "Module 5: Positioning & Getting Hired",
  ];

  const rightModules = [
    "Module 2: UI Animation That Actually Works",
    "Module 4: Developing Your Signature Style",
    "Bonus: Advanced Techniques Vault",
  ];

  const Icon = () => (
    <svg viewBox="0 0 256 256" width="24" height="24" fill="#000">
      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
    </svg>
  );

  return (
    <section id="modules" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Modules
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            The Complete Editucation <br />
            <span className="font-serif-italic text-black/40 font-normal">Motion Design System</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            The difference between motion designers who charge $500 and those who charge $7K isn&apos;t talent. It&apos;s
            understanding what moves feel intentional instead of accidental. You&apos;re about to learn exactly that.
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftModules.map((module, i) => (
            <ScrollReveal key={i}>
              <div
                className={`${
                  i === 0 ? "border-y-2" : "border-b-2"
                } border-dashed border-[#e6e6e6] py-6 flex items-center justify-between`}
              >
                <h4 className="text-xl font-medium">{module}</h4>
                <Icon />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          {rightModules.map((module, i) => (
            <ScrollReveal key={i}>
              <div
                className={`${
                  i === 0 ? "border-b-2 md:border-y-2" : "border-b-2"
                } border-dashed border-[#e6e6e6] pb-6 md:py-6 flex items-center justify-between`}
              >
                <h4 className="text-xl font-medium">{module}</h4>
                <Icon />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
