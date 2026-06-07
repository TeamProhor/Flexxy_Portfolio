"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";

import { testimonials } from "@/lib/data";

export const Results = () => {
  return (
    <section id="results" className="flex flex-col items-center mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Results
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Results From Motion Designers Like You
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            What happens when designers stop guessing and start animating with intention.
          </p>
        </div>
      </ScrollReveal>

      {/* Testimonials Stack */}
      <div className="flex flex-col gap-8 mt-16 w-full max-w-4xl">
        {testimonials.map((t) => (
          <ScrollReveal key={t.id}>
            <div className="bg-[#F7F7F7] rounded-[24px] p-8 md:p-10 flex flex-col gap-6 shadow-sm">
              <h3 className="text-5xl font-medium text-gray-400 font-serif leading-none">&quot;</h3>
              <p className="text-lg text-[#1c1c1c] leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={t.img}
                  width={64}
                  height={64}
                  className={`w-16 h-16 rounded-full object-cover shadow-lg ${t.imgPos}`}
                  alt={t.author}
                />
                <span className="font-medium text-lg text-black flex items-center gap-1">
                  {t.author}{" "}
                  <Image
                    src="/icons/verified.webp"
                    className="w-5 h-5"
                    alt="Verified"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
