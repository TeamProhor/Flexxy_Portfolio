import type { ReactElement } from "react";
import { WorksGrid } from "@/components/landing/WorksGrid";
import { WorksHero } from "@/components/landing/WorksHero";
import dict from "@/dictionaries/en.json";

export default function WorksPage(): ReactElement {
  return (
    <main className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
      <WorksHero dict={dict.works.hero} />
      <WorksGrid projectsData={dict.data.projects} />
    </main>
  );
}
