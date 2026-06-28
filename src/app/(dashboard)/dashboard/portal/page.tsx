import { Metadata } from "next";
import { ClientProjectProgress } from "@/components/dashboard/client/ClientProjectProgress";
import { ClientLatestDeliverables } from "@/components/dashboard/client/ClientLatestDeliverables";
import { ClientOutstandingInvoices } from "@/components/dashboard/client/ClientOutstandingInvoices";

export const metadata: Metadata = {
  title: "Client Portal | Flexxy",
  description: "Client portal overview.",
};

export default function ClientPortalOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-serif-italic font-semibold mb-2">Project Progress</h1>
        <p className="text-muted-foreground text-sm">Welcome back, Nike Team. Here is the current status of your active projects.</p>
      </div>

      <ClientProjectProgress />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <ClientLatestDeliverables />
        <ClientOutstandingInvoices />
      </div>
    </div>
  );
}
