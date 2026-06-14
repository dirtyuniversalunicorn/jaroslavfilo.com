import { ProjectDetailPageContent } from "@/shared/components/sections/projects-section/components/project-detail-page-content";

export const dynamic = "force-dynamic";

type ProjectDetailPageProps = {
	params: Promise<{
		projectSlug: string;
	}>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { projectSlug } = await params;

	return <ProjectDetailPageContent slug={projectSlug} />;
}
