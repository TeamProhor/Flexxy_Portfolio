import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectDetails } from "@/components/ProjectDetails";
import { allProjects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `Alex Reed | ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage(props: Props) {
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white selection:bg-rose-500/30">
        
        <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50">
          <Link href="/" className="font-serif-italic text-2xl tracking-tight text-black hover:opacity-70 transition-opacity">
            Alex Reed
          </Link>
          <Link href="/works" className="text-sm font-medium text-black hover:text-rose-500 transition-colors">
            Back to Works
          </Link>
        </nav>

        <ProjectHero title={project.title} client={project.client} src={project.src} />
        <ProjectDetails role={project.role} year={project.year} description={project.description} />

        <Footer />
      </main>
    </>
  );
}
