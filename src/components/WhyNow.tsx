import { ScrollReveal } from "./ScrollReveal";

export const WhyNow = () => {
  return (
    <section id="why-now" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Why Now?
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Your Unfair Advantage
            <br />
            <span className="font-serif-italic text-[#FF4D47] font-normal underline decoration-2 underline-offset-8">
              Right Now
            </span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            Every tech startup, SaaS company, and app brand wants that clean, premium Apple aesthetic but 90% of motion
            designers can&apos;t deliver it.
          </p>
        </div>
      </ScrollReveal>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
        {/* Left: Disadvantage */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-[#6b6b6b] text-xl font-medium mb-4 pl-4">Where Most Motion Designers Are Stuck</h3>
            <div className="bg-[#fcfcfc] border border-dashed border-[#d9d9d9] rounded-[24px] p-8 flex flex-col gap-6 h-full shadow-sm">
              {/* List Items */}
              {[
                "Overly complex animations that feel chaotic, not confident",
                "Slightly off timing too slow or too bouncy",
                "Color and typography choices that clash with modern branding",
                "Random portfolio posts with no strategic direction",
                "Competing on price because the work doesn't command premium rates",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-white border border-[#e6e6e6] rounded-full p-2 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="20"
                      height="20"
                      fill="#FF1F1F"
                    >
                      <path
                        d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
                        transform="rotate(45 128 128)"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-black font-medium leading-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Advantage */}
        <ScrollReveal>
          <div className="flex flex-col h-full">
            <h3 className="text-[#FF2823] text-xl font-bold mb-4 pl-4">Editucation Students</h3>
            <div className="bg-[#171717] border border-dashed border-[#212121] rounded-[24px] p-8 flex flex-col gap-6 h-full shadow-2xl">
              {/* List Items */}
              {[
                "Movement that feels expensive because every frame is intentional",
                "Perfect easing curves that make interfaces feel alive, not robotic",
                "Design fundamentals baked into every animation (hierarchy, rhythm, contrast)",
                "A signature aesthetic clients recognize and request specifically",
                "$5K–$10K project rates because your work looks like you're part of their team",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-[#FF1F1F] border border-[#FF5100] rounded-full p-2 flex-shrink-0 mt-0.5 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="20"
                      height="20"
                      fill="#FCFCFC"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#fcfcfc] font-medium leading-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-16">
          <a
            href="#pricing"
            className="inline-block bg-[#ff0000] text-white font-semibold text-lg px-10 py-4 rounded-full glow-button hover:scale-105 transition-transform duration-300"
          >
            Get Started With Editucation
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
