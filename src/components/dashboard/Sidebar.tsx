"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChartLineUp, Users, PresentationChart, EnvelopeSimpleOpen, Receipt, House, Folders, FileVideo } from "@phosphor-icons/react";
import { useState } from "react";

const adminLinks = [
  { name: "Overview", href: "/dashboard", icon: ChartLineUp },
  { name: "Projects", href: "/dashboard/projects", icon: PresentationChart },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Inquiries", href: "/dashboard/inquiries", icon: EnvelopeSimpleOpen },
  { name: "Invoices", href: "/dashboard/invoices", icon: Receipt },
];

const clientLinks = [
  { name: "Overview", href: "/dashboard/portal", icon: House },
  { name: "Deliverables", href: "/dashboard/portal/deliverables", icon: FileVideo },
  { name: "Invoices", href: "/dashboard/portal/invoices", icon: Receipt },
  { name: "Requests", href: "/dashboard/portal/requests", icon: Folders },
];

export function Sidebar() {
  const pathname = usePathname();
  // Using a simple state to toggle mock views for now.
  const [isAdmin, setIsAdmin] = useState(true);

  // Auto switch based on route for better UX during dev
  const isClientRoute = pathname.includes('/portal');
  const activeLinks = isClientRoute || !isAdmin ? clientLinks : adminLinks;

  return (
    <aside className="w-64 border-r border-border/40 min-h-screen bg-background flex flex-col pt-8 px-4 hidden md:flex fixed left-0 top-0">
      <div className="flex items-center justify-between mb-10 px-2">
        <Link href="/" className="font-serif-italic text-2xl font-semibold hover:opacity-80 transition-opacity">
          Flexxy
        </Link>
        <button 
          type="button"
          onClick={() => setIsAdmin(!isAdmin)}
          className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium bg-muted/20 px-2 py-1 rounded"
        >
          {isClientRoute || !isAdmin ? "Client" : "Admin"}
        </button>
      </div>

      <nav className="flex flex-col gap-1.5 flex-1 mt-4">
        <div className="px-3 mb-2 text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
          Main Menu
        </div>
        {activeLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
                isActive 
                  ? "bg-foreground/5 text-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Icon weight={isActive ? "fill" : "regular"} className={cn("text-lg", isActive ? "text-primary" : "")} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pb-8 border-t border-border/40 pt-6">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all duration-200"
        >
          <House weight="regular" className="text-lg" />
          Exit Dashboard
        </Link>
      </div>
    </aside>
  );
}
