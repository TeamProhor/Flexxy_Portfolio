import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const mockInvoices = [
  { id: "INV-2026-001", client: "Nike", amount: "$15,000", status: "paid", date: "Sep 01, 2026" },
  { id: "INV-2026-002", client: "Linear", amount: "$8,500", status: "pending", date: "Oct 10, 2026" },
  { id: "INV-2026-003", client: "Vercel", amount: "$12,000", status: "overdue", date: "Sep 15, 2026" },
  { id: "INV-2026-004", client: "Acme Corp", amount: "$4,200", status: "paid", date: "Aug 20, 2026" },
];

export function InvoicesTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  {invoice.status === "paid" && <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 shadow-none border-none hover:bg-emerald-500/20">Paid</Badge>}
                  {invoice.status === "pending" && <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 shadow-none border-none hover:bg-amber-500/20">Pending</Badge>}
                  {invoice.status === "overdue" && <Badge variant="destructive">Overdue</Badge>}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" title="Download PDF">
                    <DownloadSimple />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
