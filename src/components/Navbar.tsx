"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavbarProps {
  links?: { href: string; label: string }[];
}

export const Navbar = ({ links = [] }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(navRef.current, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power4.out", delay: 0.1 }
    );
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50"
      style={{ opacity: 0 }}
    >
      <Link
        href="/"
        className="font-serif-italic text-2xl tracking-tight text-black hover:opacity-70 transition-opacity duration-300"
      >
        Alex Reed
      </Link>
      {links.length > 0 && (
        <div className="flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-500 hover:text-black transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
