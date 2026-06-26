"use client";

import { useReducer, useRef } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "./ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TestimonialState {
  activeIndex: number;
  isAnimating: boolean;
  displayedQuote: string;
  displayedRole: string;
  hoveredIndex: number | null;
}

type Action =
  | { type: "START_ANIMATION" }
  | { type: "END_ANIMATION"; index: number; quote: string; role: string }
  | { type: "FINISH_ANIMATION" }
  | { type: "SET_HOVERED"; index: number | null };

const initialState: TestimonialState = {
  activeIndex: 0,
  isAnimating: false,
  displayedQuote: testimonials[0].quote,
  displayedRole: testimonials[0].role,
  hoveredIndex: null,
};

function reducer(state: TestimonialState, action: Action): TestimonialState {
  switch (action.type) {
    case "START_ANIMATION":
      return { ...state, isAnimating: true };
    case "END_ANIMATION":
      return {
        ...state,
        activeIndex: action.index,
        displayedQuote: action.quote,
        displayedRole: action.role,
      };
    case "FINISH_ANIMATION":
      return { ...state, isAnimating: false };
    case "SET_HOVERED":
      return { ...state, hoveredIndex: action.index };
    default:
      return state;
  }
}

export function Testimonials() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);

  const handleSelect = (index: number) => {
    if (index === state.activeIndex || state.isAnimating) return;
    
    dispatch({ type: "START_ANIMATION" });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      dispatch({
        type: "END_ANIMATION",
        index,
        quote: testimonials[index].quote,
        role: testimonials[index].role,
      });
      dispatch({ type: "FINISH_ANIMATION" });
      return;
    }

    // GSAP exit animation
    const tl = gsap.timeline();
    
    tl.to([quoteRef.current, roleRef.current], {
      opacity: 0,
      y: -8,
      filter: "blur(4px)",
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.04,
      onComplete: () => {
        dispatch({
          type: "END_ANIMATION",
          index,
          quote: testimonials[index].quote,
          role: testimonials[index].role,
        });
      }
    });

    // GSAP enter animation
    tl.fromTo([quoteRef.current, roleRef.current],
      { opacity: 0, y: 12, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power4.out",
        stagger: 0.06,
        onComplete: () => dispatch({ type: "FINISH_ANIMATION" }),
      }
    );
  };

  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-10 py-16">
        {/* Quote Container */}
        <div className="relative px-8">
          <span className="absolute -left-2 -top-6 text-7xl font-serif text-foreground/[0.06] select-none pointer-events-none">
            &quot;
          </span>

          <p
            ref={quoteRef}
            className="text-2xl md:text-3xl font-light text-foreground text-center max-w-lg leading-relaxed"
          >
            {state.displayedQuote}
          </p>

          <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-foreground/[0.06] select-none pointer-events-none">
            &quot;
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 mt-2">
          {/* Role text */}
          <p
            ref={roleRef}
            className="text-xs text-muted-foreground tracking-[0.2em] uppercase"
          >
            {state.displayedRole}
          </p>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = state.activeIndex === index;
              const isHovered = state.hoveredIndex === index && !isActive;
              const showName = isActive || isHovered;

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => dispatch({ type: "SET_HOVERED", index })}
                  onMouseLeave={() => dispatch({ type: "SET_HOVERED", index: null })}
                  className={cn(
                    "relative flex items-center gap-0 rounded-full cursor-pointer",
                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isActive ? "bg-foreground shadow-lg" : "bg-transparent hover:bg-muted/80",
                    showName ? "pr-4 pl-2 py-2" : "p-0.5",
                  )}
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={32}
                      height={32}
                      className={cn(
                        "w-8 h-8 rounded-full object-cover",
                        "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        isActive ? "ring-2 ring-background/30" : "ring-0",
                        !isActive && "hover:scale-105",
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <span
                        className={cn(
                          "text-sm font-medium whitespace-nowrap flex items-center gap-1",
                          "transition-colors duration-300",
                          isActive ? "text-background" : "text-foreground",
                        )}
                      >
                        {testimonial.author}
                        <Image
                          src="/icons/verified.webp"
                          alt="Verified"
                          width={14}
                          height={14}
                          className={cn(
                            "w-3.5 h-3.5 object-contain flex-shrink-0",
                            isActive && "brightness-0 invert"
                          )}
                        />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
