"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || !wrapperRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(".highlight-wrapper", { opacity: 0, scale: 0.95, transformOrigin: "0% 0%" });
    gsap.set(".highlight-rect", { width: 0, height: 0 });
    gsap.set(".highlight-pointer", { opacity: 0, x: 0, y: 0, rotation: -90 });

    if (prefersReducedMotion) {
      gsap.set(".highlight-wrapper", { opacity: 1, scale: 1 });
      gsap.set(".highlight-rect", { width: dimensions.width, height: dimensions.height });
      gsap.set(".highlight-pointer", { opacity: 1, x: dimensions.width + 4, y: dimensions.height + 4 });
      return;
    }

    gsap.to(".highlight-wrapper", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 10,
    });

    tl.to(".highlight-rect", {
      width: dimensions.width,
      height: dimensions.height,
      duration: 2,
      ease: "power1.inOut"
    }, 0);

    tl.to(".highlight-pointer", {
      opacity: 1,
      duration: 0.2,
      ease: "power1.inOut"
    }, 0);

    tl.to(".highlight-pointer", {
      x: dimensions.width + 4,
      y: dimensions.height + 4,
      duration: 2,
      ease: "power1.inOut"
    }, 0);

  }, { dependencies: [dimensions], scope: wrapperRef });

  return (
    <span
      className={cn("relative w-fit", containerClassName)}
      ref={containerRef}
    >
      {children}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div ref={wrapperRef} className="pointer-events-none absolute inset-0 z-0">
          <div className="highlight-wrapper absolute inset-0">
            <div
              className={cn(
                "highlight-rect absolute inset-0 border border-neutral-800 dark:border-neutral-200",
                rectangleClassName,
              )}
            />
            <div className="highlight-pointer pointer-events-none absolute">
              <Pointer
                className={cn("h-5 w-5 text-blue-500", pointerClassName)}
              />
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  );
};
