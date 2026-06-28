import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { InvoicesTable } from "@/components/dashboard/invoices/InvoicesTable";

export const metadata: Metadata = {
  title: "Invoices | Flexxy",
  description: "Manage client invoices and payments.",
};

export default function InvoicesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif-italic font-semibold mb-2">Invoices</h1>
          <p className="text-muted-foreground text-sm">Track payments and manage billing.</p>
        </div>
        <Button>
          <Plus weight="bold" className="mr-2" />
          Create Invoice
        </Button>
      </div>

      <InvoicesTable />
    </div>
  );
}
