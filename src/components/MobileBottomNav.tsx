"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { House, PlayCircle, EnvelopeSimple, Question } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const tabs = [
  { title: "Home", icon: House },
  { title: "Work", icon: PlayCircle },
  { type: "separator" as const },
  { title: "FAQs", icon: Question },
  { title: "Contact", icon: EnvelopeSimple },
];

const handleOnChange = (index: number | null) => {
  if (index === 0) {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }
  if (index === 1) {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }
  if (index === 3) {
    // Assuming FAQs section has id faqs
    const el = document.getElementById("faqs") || document.getElementById("faq");
    el?.scrollIntoView({ behavior: "smooth" });
  }
  if (index === 4) {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
};

export function MobileBottomNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex justify-center w-max shadow-2xl rounded-2xl">
      <ExpandableTabs 
        tabs={tabs} 
        onChange={handleOnChange} 
        activeColor="text-rose-500" 
      />
    </div>
  );
}
