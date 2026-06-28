import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AdminPendingTasks() {
  const tasks = [
    "Review intro cut for Nike",
    "Send final invoice to Linear",
    "Respond to new inquiry from Vercel"
  ];

  return (
    <Card className="flex flex-col min-h-[300px]">
      <CardHeader>
        <CardTitle className="text-lg">Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div key={task} className="flex items-center gap-3 text-sm">
            <div className="w-4 h-4 rounded border border-border flex-shrink-0" />
            <span className="text-foreground/80">{task}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
