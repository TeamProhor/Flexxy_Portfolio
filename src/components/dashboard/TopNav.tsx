"use client";

import Link from "next/link";
import { UserCircle } from "@phosphor-icons/react";

export function TopNav() {
  return (
    <div className="md:hidden">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border/40 bg-background/80 backdrop-blur-md z-40 flex items-center justify-between px-4">
        <Link href="/" className="font-serif-italic text-xl font-semibold">
          Flexxy
        </Link>
        <div className="p-2 -mr-2 text-foreground">
          <UserCircle weight="regular" size={24} />
        </div>
      </header>
    </div>
  );
}
