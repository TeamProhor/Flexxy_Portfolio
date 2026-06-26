import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AboutHero } from "@/components/AboutHero";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Flexxy | About",
  description: "Learn more about my philosophy, process, and background.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white selection:bg-rose-500/30">
        
        <AboutHero />
        <AboutContent />

        <Footer />
      </main>
    </>
  );
}
