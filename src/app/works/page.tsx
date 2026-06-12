import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WorksHero } from "@/components/WorksHero";
import { WorksGrid } from "@/components/WorksGrid";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alex Reed | Selected Works",
  description: "Premium video editing and motion design portfolio.",
};

export default function WorksPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white selection:bg-rose-500/30">
        
        <Navbar links={[
          { href: "/works", label: "Works" },
          { href: "/about", label: "About" },
          { href: "/#contact", label: "Contact" },
        ]} />

        <WorksHero />
        <WorksGrid />

        <Footer />
      </main>
    </>
  );
}
