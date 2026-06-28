import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AdminRecentActivity() {
  return (
    <Card className="lg:col-span-2 flex flex-col min-h-[300px]">
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center border-2 border-dashed border-border/60 rounded-xl bg-muted/20 text-muted-foreground text-sm m-6 mt-0">
        Activity chart will go here
      </CardContent>
    </Card>
  );
}
