import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AboutHero } from "@/components/AboutHero";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Alex Reed | About",
  description: "Learn more about my philosophy, process, and background.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white selection:bg-rose-500/30">
        
        <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50">
          <Link href="/" className="font-serif-italic text-2xl tracking-tight text-black hover:opacity-70 transition-opacity">
            Alex Reed
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/works" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">
              Works
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-black hover:text-rose-500 transition-colors">
              Contact
            </Link>
          </div>
        </nav>

        <AboutHero />
        <AboutContent />

        <Footer />
      </main>
    </>
  );
}
