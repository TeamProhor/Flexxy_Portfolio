"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { ChartLineUp, Users, PresentationChart, EnvelopeSimpleOpen, Receipt, House, Folders, FileVideo, Swap } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function DashboardMobileNav() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !isMobile) return null;

  const isClientRoute = pathname.includes('/portal');
  const showClientTabs = isClientRoute || !isAdmin;

  const adminTabs = [
    { title: "Overview", icon: ChartLineUp, href: "/dashboard" },
    { title: "Projects", icon: PresentationChart, href: "/dashboard/projects" },
    { title: "Invoices", icon: Receipt, href: "/dashboard/invoices" },
    { type: "separator" as const },
    { title: "Client View", icon: Swap, action: "toggle" },
  ];

  const clientTabs = [
    { title: "Overview", icon: House, href: "/dashboard/portal" },
    { title: "Deliverables", icon: FileVideo, href: "/dashboard/portal/deliverables" },
    { title: "Invoices", icon: Receipt, href: "/dashboard/portal/invoices" },
    { type: "separator" as const },
    { title: "Admin View", icon: Swap, action: "toggle" },
  ];

  const currentTabs = showClientTabs ? clientTabs : adminTabs;

  const handleOnChange = (index: number | null) => {
    if (index === null) return;
    const tab = currentTabs[index];
    if ('action' in tab && tab.action === "toggle") {
      setIsAdmin(!isAdmin);
      // Optional: automatically navigate to the default route of the new view
      // router.push(showClientTabs ? "/dashboard" : "/dashboard/portal");
    } else if ('href' in tab && tab.href) {
      router.push(tab.href);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-max shadow-2xl rounded-2xl md:hidden">
      <ExpandableTabs 
        tabs={currentTabs} 
        onChange={handleOnChange} 
        activeColor="text-primary" 
      />
    </div>
  );
}
