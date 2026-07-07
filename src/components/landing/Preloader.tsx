"use client";

import { useGSAP } from "@gsap/react";
import { HandPalm, X } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PreloaderProps {
  dict: {
    title1: string;
    title2: string;
    subtitle: string;
    list: string[];
  };
}

export function Preloader({ dict }: Readonly<PreloaderProps>) {
  const [isMounted, setIsMounted] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsMounted(false);
          ScrollTrigger.refresh();
        },
      });

      tl.fromTo(
        ".preloader-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "easeOut",
          stagger: 0.15,
          delay: 0.2,
        },
      );

      tl.to({}, { duration: 3.5 });

      tl.to(".preloader-content", {
        opacity: 0,
        duration: 0.4,
      });

      tl.to(
        ".preloader-col",
        {
          yPercent: 100,
          duration: 0.8,
          ease: "power3.inOut",
          stagger: 0.08,
        },
        "-=0.2",
      );
    },
    { scope: container },
  );

  if (!isMounted) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex pointer-events-none"
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={`col-${i}`}
          className="preloader-col flex-1 h-full bg-background origin-top -mr-[1px] last:mr-0"
          style={{ transform: "translateY(0%)" }}
        />
      ))}

      <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto">
        <div className="max-w-4xl mx-auto w-full space-y-10 md:space-y-14">
          <div className="preloader-item flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-6 opacity-0 translate-y-5">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-5 w-full text-rose-500">
              <HandPalm
                weight="fill"
                className="w-8 h-8 md:w-16 md:h-16 shrink-0"
              />
              <h2
                className="text-3xl sm:text-4xl md:text-[72px] leading-[1.05] font-medium tracking-tight text-foreground"
                style={{ letterSpacing: "-0.03em" }}
              >
                {dict.title1}{" "}
                <span className="font-serif-italic text-rose-500 font-normal">
                  {dict.title2}
                </span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-3xl font-medium text-foreground tracking-tight max-w-xl leading-tight">
              {dict.subtitle}
            </p>
          </div>

          <ul className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
            {dict.list.map((text) => (
              <li
                key={text}
                className="preloader-item flex items-start gap-3 md:gap-4 text-sm sm:text-base md:text-2xl text-muted-foreground max-w-2xl text-left w-full md:w-auto opacity-0 translate-y-5"
              >
                <X
                  weight="bold"
                  className="w-5 h-5 md:w-8 md:h-8 text-rose-500 shrink-0 mt-0.5 md:mt-1"
                />
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
