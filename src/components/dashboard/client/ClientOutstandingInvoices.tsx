"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "@phosphor-icons/react";

export function ClientOutstandingInvoices() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Outstanding Invoices</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3 justify-center items-center py-8">
          <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2 text-emerald-500">
            <CheckCircle weight="fill" className="size-6" />
          </div>
          <p className="text-sm font-medium">All caught up!</p>
          <p className="text-xs text-muted-foreground">You have no outstanding invoices.</p>
      </CardContent>
    </Card>
  );
}
