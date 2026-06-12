"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(".nf-code, .nf-tagline, .nf-body, .nf-cta", { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".nf-code",
      { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
      0.15
    );

    tl.fromTo(".nf-tagline",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.4
    );

    tl.fromTo(".nf-body",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.55
    );

    tl.fromTo(".nf-cta",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.7
    );
  }, { scope: containerRef });

  return (
    <>
      <ScrollProgress />
      <main ref={containerRef} className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-white selection:bg-rose-500/30">
        
        <Navbar links={[
          { href: "/works", label: "Works" },
          { href: "/about", label: "About" },
          { href: "/#contact", label: "Contact" },
        ]} />

        <section className="flex flex-col items-center justify-center flex-1 px-6 text-center">
          <h1
            className="nf-code text-8xl md:text-[120px] font-medium tracking-tighter text-black leading-none mb-4"
            style={{ opacity: 0, letterSpacing: "-0.04em" }}
          >
            404
          </h1>
          <p className="nf-tagline font-serif-italic text-3xl md:text-4xl text-zinc-500 mb-8" style={{ opacity: 0 }}>
            Frame not found.
          </p>
          <p className="nf-body text-zinc-400 max-w-md mx-auto mb-12 text-lg" style={{ opacity: 0, textWrap: "pretty" }}>
            The page you&apos;re looking for has been cut from the final edit. 
          </p>
          <Link 
            href="/" 
            className="nf-cta bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{ opacity: 0 }}
          >
            Back to Home
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
