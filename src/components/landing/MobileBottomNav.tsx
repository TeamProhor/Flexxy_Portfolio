"use client";

import {
  EnvelopeSimple,
  House,
  PlayCircle,
  Question,
  User,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggler } from "@/components/theme-toggler";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

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
        const el =
          document.getElementById("faqs") || document.getElementById("faq");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#faqs");
      }
    } else if (index === 4) {
      if (isHomePage) {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#contact");
      }
    }
  };

  return (
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex justify-center w-max shadow-2xl rounded-2xl md:scale-125 origin-bottom transition-all">
      <ExpandableTabs
        tabs={tabs}
        onChange={handleOnChange}
        activeColor="text-rose-500"
      >
        <ThemeToggler className="size-8 rounded-xl flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-all" />
      </ExpandableTabs>
    </div>
  );
}
