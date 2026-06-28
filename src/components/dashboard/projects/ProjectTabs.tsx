import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./ProjectCard";

const mockProjects = [
  { id: 1, title: "Summer Campaign Intro", client: "Nike", status: "active", date: "Oct 15, 2026" },
  { id: 2, title: "Product Launch Video", client: "Linear", status: "active", date: "Nov 01, 2026" },
  { id: 3, title: "Rebranding Anthem", client: "Vercel", status: "completed", date: "Aug 12, 2026" },
  { id: 4, title: "Social Media Ads", client: "Acme Corp", status: "completed", date: "Jul 05, 2026" },
  { id: 5, title: "Documentary Short", client: "Red Bull", status: "archived", date: "Jan 10, 2025" },
];

export function ProjectTabs() {
  const groupedProjects = mockProjects.reduce((acc, project) => {
    if (!acc[project.status]) {
      acc[project.status] = [];
    }
    acc[project.status].push(project);
    return acc;
  }, {} as Record<string, typeof mockProjects>);

  return (
    <Tabs defaultValue="active" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      
      {["active", "completed", "archived"].map((status) => {
        const projects = groupedProjects[status] || [];
        return (
          <TabsContent key={status} value={status} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} status={status} />
              ))}
              
              {projects.length === 0 && (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-border/60 rounded-xl bg-muted/10">
                  <p className="text-muted-foreground text-sm">No {status} projects found.</p>
                </div>
              )}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
