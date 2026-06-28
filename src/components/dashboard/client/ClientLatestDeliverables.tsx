import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ClientLatestDeliverables() {
  const files = [
    { name: "v1_intro_draft.mp4", date: "Today, 10:00 AM" },
    { name: "storyboard_final.pdf", date: "Oct 1, 2026" }
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Latest Deliverables</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-muted/30 transition-colors cursor-pointer group">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{file.name}</span>
              <span className="text-xs text-muted-foreground">{file.date}</span>
            </div>
            <Button variant="link" className="h-auto p-0 opacity-0 group-hover:opacity-100 transition-opacity">
              Download
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
