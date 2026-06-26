"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { House, PlayCircle, EnvelopeSimple, Question, User, UserCircle } from "@phosphor-icons/react";
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
    { title: "FAQs", icon: Question },
    { title: "Contact", icon: EnvelopeSimple },
    { type: "separator" as const },
    { title: "Profile", icon: UserCircle },
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
    } else if (index === 3) {
      if (isHomePage) {
        const el = document.getElementById("faqs") || document.getElementById("faq");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#faqs");
      }
    } else if (index === 4) {
      if (isHomePage) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#contact");
      }
    } else if (index === 6) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex justify-center w-max shadow-2xl rounded-2xl md:scale-125 origin-bottom transition-all">
      <ExpandableTabs 
        tabs={tabs} 
        onChange={handleOnChange} 
        activeColor="text-rose-500" 
      >
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
        <AnimatedThemeToggler 
          className="relative flex items-center justify-center rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-300"
        />
      </ExpandableTabs>
    </div>
  );
}
