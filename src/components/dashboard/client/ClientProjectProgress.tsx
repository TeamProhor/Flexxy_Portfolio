import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ClientProjectProgress() {
  const steps = [
    { label: "Brief", status: "completed" },
    { label: "Storyboarding", status: "completed" },
    { label: "First Draft", status: "active" },
    { label: "Revisions", status: "pending" },
    { label: "Final Delivery", status: "pending" },
  ];

  return (
    <Card className="flex flex-col gap-8">
      <CardContent className="pt-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-medium mb-1">Summer Campaign Intro</h2>
            <p className="text-sm text-muted-foreground">Due: Oct 15, 2026</p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 w-max shadow-none border-none">
            In Progress
          </Badge>
        </div>

        {/* Mock Timeline Tracker */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/2 rounded-full" />
          </div>
          
          <div className="relative flex justify-between w-full">
            {steps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  step.status === 'completed' ? 'bg-primary border-primary' : 
                  step.status === 'active' ? 'bg-background border-primary shadow-[0_0_0_4px_var(--color-primary-10)]' : 
                  'bg-background border-muted'
                }`} />
                <span className={`text-xs font-medium absolute -bottom-6 whitespace-nowrap ${
                  step.status === 'active' ? 'text-primary' : 'text-muted-foreground'
                }`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8" />
      </CardContent>
    </Card>
  );
}
