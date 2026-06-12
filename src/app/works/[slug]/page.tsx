import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectDetails } from "@/components/ProjectDetails";
import { Navbar } from "@/components/Navbar";
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
        
        <Navbar links={[
          { href: "/works", label: "Works" },
          { href: "/about", label: "About" },
          { href: "/#contact", label: "Contact" },
        ]} />

        <ProjectHero title={project.title} client={project.client} src={project.src} />
        <ProjectDetails role={project.role} year={project.year} description={project.description} />

        <Footer />
      </main>
    </>
  );
}
