import { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { Preloader } from "@/components/landing/Preloader";
import { Outcome } from "@/components/landing/Outcome";
import { Purpose } from "@/components/landing/Purpose";
import { WhyNow } from "@/components/landing/WhyNow";
import { EndResult } from "@/components/landing/EndResult";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturedWork } from "@/components/landing/FeaturedWork";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQs } from "@/components/landing/FAQs";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Logos } from "@/components/landing/Logos";


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
