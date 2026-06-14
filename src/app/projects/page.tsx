import { ProjectsPageContent } from "@/shared/components/sections/projects-section/components/projects-page-content";
import { getProjects } from "@/shared/components/sections/projects-section/queries";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
	const projects = await getProjects();

	return <ProjectsPageContent projects={projects} />;
}
