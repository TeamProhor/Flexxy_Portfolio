import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  client: string;
  status: string;
  date: string;
}

export function ProjectCard({ project, status }: { project: Project; status: string }) {
  return (
    <Card className="flex flex-col group">
      <div className="aspect-video w-full bg-muted border-b border-border/40 relative overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Placeholder for video thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs font-medium">
          No Thumbnail
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <div>
            <CardTitle className="text-lg leading-tight mb-1">{project.title}</CardTitle>
            <CardDescription>{project.client}</CardDescription>
          </div>
          {status === 'active' && (
            <Badge variant="outline" className="bg-primary/5 text-primary">Active</Badge>
          )}
        </div>
      </CardHeader>
      <CardFooter className="mt-auto pt-0 flex justify-between items-center text-xs text-muted-foreground">
        <span>Due: {project.date}</span>
        <Button variant="ghost" size="sm">Manage</Button>
      </CardFooter>
    </Card>
  );
}
