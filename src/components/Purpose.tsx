"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";

export const Purpose = () => {
  return (
    <section id="purpose" className="flex flex-col-reverse md:flex-row gap-16 items-center">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <ScrollReveal>
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
            Build a Portfolio That Makes Clients <br />
            <span className="font-serif-italic text-[#FF4D47] font-normal">Choose You First</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 leading-relaxed">
            Have your reels and X page flooded with work where clients look at your rate and think &quot;that&apos;s reasonable for
            this quality&quot; instead of &quot;can you go lower?&quot;
          </p>
        </ScrollReveal>
      </div>

      {/* Right: Video */}
      <div className="w-full md:w-1/2">
        <ScrollReveal>
          <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-2xl pattern-bg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <video
              src="https://framerusercontent.com/assets/RHvEyqdnPvDAB5Vew1I6LccWE.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover relative z-0"
              aria-label="Motion portfolio demonstration"
            ></video>

            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
              <Image
                src="/image/portal-avatar.webp"
                alt="Profile"
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-2xl object-cover shadow-lg border border-white/10 bg-white"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
                  Portal
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
