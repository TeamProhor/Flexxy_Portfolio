import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Preloader } from "@/components/Preloader";
import { Outcome } from "@/components/Outcome";
import { Purpose } from "@/components/Purpose";
import { WhyNow } from "@/components/WhyNow";
import { EndResult } from "@/components/EndResult";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Logos } from "@/components/Logos";


export const metadata: Metadata = {
  title: "Flexxy | Premium Video Editor",
  description: "Crafting cinematic stories and premium motion design for top brands.",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <main className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
        <Hero />
        <Logos />
        <FeaturedWork />
        <WhyNow />
        <Purpose />
        <Outcome />
        <HowItWorks />
        <EndResult />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
