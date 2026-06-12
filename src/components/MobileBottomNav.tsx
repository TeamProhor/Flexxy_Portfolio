"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { House, PlayCircle, EnvelopeSimple, Question, User } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function MobileBottomNav() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const isHomePage = pathname === "/";

  const tabs = [
    { title: "Home", icon: House },
    { title: "Work", icon: PlayCircle },
    { title: "About", icon: User },
    { type: "separator" as const },
    { title: "FAQs", icon: Question },
    { title: "Contact", icon: EnvelopeSimple },
  ];

  const handleOnChange = (index: number | null) => {
    if (index === null) return;

    if (index === 0) {
      if (isHomePage) {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
      }
    } else if (index === 1) {
      if (isHomePage) {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/works");
      }
    } else if (index === 2) {
      router.push("/about");
    } else if (index === 4) { // Index 3 is the separator
      if (isHomePage) {
        const el = document.getElementById("faqs") || document.getElementById("faq");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#faqs");
      }
    } else if (index === 5) {
      if (isHomePage) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#contact");
      }
    }
  };

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
