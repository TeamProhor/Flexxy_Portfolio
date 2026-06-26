"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { Icon } from "@phosphor-icons/react";

interface Tab {
  title: string;
  icon: Icon;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  children?: React.ReactNode;
}

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
  children,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(outsideClickRef as React.RefObject<HTMLElement>, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  useGSAP(() => {
    if (!containerRef.current) return;
    
    tabs.forEach((tab, index) => {
      if (tab.type === "separator") return;
      
      const isSelected = selected === index;
      
      gsap.to(`.tab-btn-${index}`, {
        gap: isSelected ? "0.5rem" : "0px",
        paddingLeft: isSelected ? "1rem" : "0.5rem",
        paddingRight: isSelected ? "1rem" : "0.5rem",
        duration: 0.4,
        ease: "power2.out",
      });

      const span = document.querySelector(`.tab-span-${index}`) as HTMLElement;
      if (span) {
        if (isSelected) {
          gsap.to(span, {
            width: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(span, {
            width: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }
    });
  }, { dependencies: [selected, tabs], scope: containerRef });

  return (
    <div ref={outsideClickRef} className="w-fit">
      <div
        ref={containerRef}
        className={cn(
          "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
          className
        )}
      >
        {tabs.map((tab, index) => {
          if (tab.type === "separator") {
            return <Separator key={`separator-${index}`} />;
          }

          const Icon = tab.icon;
          return (
            <button
              key={tab.title}
              onClick={() => handleSelect(index)}
              className={cn(
                `tab-btn-${index} relative flex items-center rounded-xl px-2 py-2 text-sm font-medium transition-colors duration-300`,
                selected === index
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} />
              <span
                className={`tab-span-${index} overflow-hidden whitespace-nowrap inline-block`}
                style={{ width: 0, opacity: 0 }}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
        {children}
      </div>
    </div>
  );
}
