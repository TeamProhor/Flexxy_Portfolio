import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Outcome } from "@/components/Outcome";
import { Purpose } from "@/components/Purpose";
import { WhyNow } from "@/components/WhyNow";
import { EndResult } from "@/components/EndResult";
import { Modules } from "@/components/Modules";
import { HowItWorks } from "@/components/HowItWorks";
import { Results } from "@/components/Results";
import { Pricing } from "@/components/Pricing";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Vedita Editz | Master Premium Motion Design",
  description: "Learn the motion design system behind Apple's premium aesthetic. Join Vedita Editz to level up your UI animation skills.",
};

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <main className="flex flex-col gap-32 px-6 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
        <Hero />
        <Outcome />
        <Purpose />
        <WhyNow />
        <EndResult />
        <Modules />
        <HowItWorks />
        <Results />
        <Pricing />
        <FAQs />
      </main>

      <Footer />
    </>
  );
}
