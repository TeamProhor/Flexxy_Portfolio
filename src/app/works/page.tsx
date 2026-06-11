import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WorksHero } from "@/components/WorksHero";
import { WorksGrid } from "@/components/WorksGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alex Reed | Selected Works",
  description: "Premium video editing and motion design portfolio.",
};

export default function WorksPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white selection:bg-rose-500/30">
        
        {/* Simple Navbar substitute for the works page to go back home */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50">
          <Link href="/" className="font-serif-italic text-2xl tracking-tight text-black hover:opacity-70 transition-opacity">
            Alex Reed
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-black hover:text-rose-500 transition-colors">
            Contact
          </Link>
        </nav>

        <WorksHero />
        <WorksGrid />

        <Footer />
      </main>
    </>
  );
}
