"use client"

import { useReducer } from "react"
import { cn } from "@/lib/utils"
import { testimonials } from "@/lib/data"
import Image from "next/image"

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

  const handleSelect = (index: number) => {
    if (index === state.activeIndex || state.isAnimating) return;
    
    dispatch({ type: "START_ANIMATION" });

    setTimeout(() => {
      dispatch({
        type: "END_ANIMATION",
        index,
        quote: testimonials[index].quote,
        role: testimonials[index].role,
      });
      setTimeout(() => dispatch({ type: "FINISH_ANIMATION" }), 400);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-16">
      {/* Quote Container */}
      <div className="relative px-8">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-foreground/[0.06] select-none pointer-events-none">
          &quot;
        </span>

        <p
          className={cn(
            "text-2xl md:text-3xl font-light text-foreground text-center max-w-lg leading-relaxed transition-all duration-400 ease-out",
            state.isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
          )}
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
          className={cn(
            "text-xs text-muted-foreground tracking-[0.2em] uppercase transition-all duration-500 ease-out",
            state.isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
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
                {/* Avatar with smooth ring animation */}
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
                        "text-sm font-medium whitespace-nowrap block",
                        "transition-colors duration-300",
                        isActive ? "text-background" : "text-foreground",
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
