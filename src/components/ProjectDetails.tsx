"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

export const ProjectDetails = ({ role, year, description }: { role: string; year: string; description: string }) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <ScrollReveal variant="fade-up">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-8 w-full md:w-1/3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-lg font-medium text-foreground">{role}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Year</p>
              <p className="text-lg font-medium text-foreground">{year}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Project Overview</p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light" style={{ textWrap: "pretty" }}>
              {description}
            </p>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2} className="mt-24 flex justify-center">
        <Link 
          href="/works" 
          className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors duration-300 hover:scale-[1.03] active:scale-[0.97] transition-transform"
        >
          View All Works
        </Link>
      </ScrollReveal>
    </section>
  );
};
