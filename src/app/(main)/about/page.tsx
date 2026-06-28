import { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { AboutHero } from "@/components/landing/AboutHero";
import { AboutContent } from "@/components/landing/AboutContent";

export const metadata: Metadata = {
  title: "Flexxy | About",
  description: "Learn more about my philosophy, process, and background.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-background selection:bg-rose-500/30">
        
        <AboutHero />
        <AboutContent />

        <Footer />
      </main>
    </>
  );
}
