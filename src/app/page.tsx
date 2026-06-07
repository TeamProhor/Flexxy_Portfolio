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

export default function Page() {
  return (
    <>
      {/* Navbar Fake / Dynamic Spacer */}
      <ScrollProgress />

      {/* MAIN CONTAINER */}
      <main className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-32 flex flex-col gap-32 overflow-x-hidden">
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
