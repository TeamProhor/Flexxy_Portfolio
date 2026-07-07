import type { ReactElement } from "react";
import { AboutContent } from "@/components/landing/AboutContent";
import { AboutHero } from "@/components/landing/AboutHero";
import dict from "@/dictionaries/en.json";

export default function AboutPage(): ReactElement {
  return (
    <main className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
      <AboutHero dict={dict.about.hero} />
      <AboutContent
        dict={dict.about.content}
        capabilitiesData={dict.data.capabilities}
      />
    </main>
  );
}
