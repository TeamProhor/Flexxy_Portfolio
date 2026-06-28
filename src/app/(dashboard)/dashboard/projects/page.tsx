import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { ProjectTabs } from "@/components/dashboard/projects/ProjectTabs";

export const metadata: Metadata = {
  title: "Projects | Flexxy",
  description: "Manage your portfolio projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif-italic font-semibold mb-2">Projects</h1>
          <p className="text-muted-foreground text-sm">Manage your portfolio and active client work.</p>
        </div>
        <Button>
          <Plus weight="bold" className="mr-2" />
          New Project
        </Button>
      </div>

      <ProjectTabs />
    </div>
  );
}
