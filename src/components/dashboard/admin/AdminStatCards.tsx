import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AdminStatCards() {
  const stats = [
    { label: "Total Views", value: "12,450", trend: "+14%" },
    { label: "Active Projects", value: "8", trend: "+2" },
    { label: "New Inquiries", value: "3", trend: "-1" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="pb-2">
            <CardDescription>{stat.label}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-baseline gap-3">
            <span className="text-3xl font-medium">{stat.value}</span>
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 shadow-none border-none">
              {stat.trend}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
