import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { ProjectDetails } from "@/components/landing/ProjectDetails";
import { ProjectHero } from "@/components/landing/ProjectHero";
import dict from "@/dictionaries/en.json";
import { allProjects } from "@/lib/data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>): Promise<ReactElement> {
  const resolvedParams = await params;
  const projectTranslation = dict.data.projects.find(
    (p) => p.slug === resolvedParams.slug,
  );
  const projectAsset = allProjects.find((p) => p.slug === resolvedParams.slug);

  if (!projectTranslation || !projectAsset) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-20 md:gap-32 px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
      <ProjectHero
        dict={dict.project}
        title={projectTranslation.title}
        client={projectTranslation.client}
        src={projectAsset.src}
      />
      <ProjectDetails
        dict={dict.project}
        role={projectTranslation.role}
        year={projectTranslation.year}
        description={projectTranslation.description}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const project of allProjects) {
    params.push({
      slug: project.slug,
    });
  }
  return params;
}
