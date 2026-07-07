import { Contact } from "@/components/landing/Contact";
import { EndResult } from "@/components/landing/EndResult";
import { FAQs } from "@/components/landing/FAQs";
import { FeaturedWork } from "@/components/landing/FeaturedWork";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Logos } from "@/components/landing/Logos";
import { Outcome } from "@/components/landing/Outcome";
import { Preloader } from "@/components/landing/Preloader";
import { Purpose } from "@/components/landing/Purpose";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyNow } from "@/components/landing/WhyNow";
import dict from "@/dictionaries/en.json";

export default function Page() {
  return (
    <>
      <Preloader dict={dict.landing.preloader} />
      <ScrollProgress />
      <main className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
        <Hero dict={dict.landing.hero} />
        <Logos dict={dict.landing.logos} />
        <FeaturedWork
          dict={dict.landing.featuredWork}
          projectsData={dict.data.projects}
        />
        <WhyNow
          dict={dict.landing.whyNow}
          advantagesData={dict.data.advantages}
        />
        <Purpose dict={dict.landing.purpose} />
        <Outcome
          dict={dict.landing.outcome}
          statsData={dict.data.outcomeStats}
        />
        <HowItWorks
          dict={dict.landing.howItWorks}
          stepsData={dict.data.steps}
        />
        <EndResult dict={dict.landing.endResult} />
        <Testimonials testimonialsData={dict.data.testimonials} />
        <FAQs dict={dict.landing.faqs} faqsData={dict.data.faqs} />
        <Contact dict={dict.landing.contact} />
      </main>
      <Footer dict={dict.landing.footer} />
    </>
  );
}
