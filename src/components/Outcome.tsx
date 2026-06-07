"use client";

import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";

export const Outcome = () => {
  return (
    <section id="outcome" className="flex flex-col md:flex-row gap-16 items-center">
      {/* Left: Videos */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <ScrollReveal>
          {/* Figma Video Card */}
          <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-2xl pattern-bg group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <video
              src="https://framerusercontent.com/assets/g1ZBzF5S0xNUSr65xEIQhuqtmVs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover relative z-0"
            ></video>

            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
              <Image
                src="/image/figma-avatar.webp"
                alt="Profile"
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-2xl object-cover shadow-lg border border-white/10"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
                  Figma
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

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <ScrollReveal>
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Outcome
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
            Motion Work That Actually{" "}
            <span className="font-serif-italic text-[#FF4D47] font-normal">Stops the Scroll.</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 leading-relaxed">
            Right now your work gets 200 likes from other designers but zero DMs from paying clients. Here&apos;s what&apos;s
            changed: Your Instagram feed looks like an Apple product launch. UI animations that feel intentional, not
            chaotic. Timing is so clean people assume you work for a tech giant. It&apos;s not talent — it&apos;s a system you&apos;re
            about to learn.
          </p>

          {/* Stats floating cards (approximate placement) */}
          <div className="flex gap-4 mt-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-gray-500 font-medium">1.9k profile clicks</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-gray-500 font-medium">200k+ views</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
