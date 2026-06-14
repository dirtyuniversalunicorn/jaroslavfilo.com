import { Stack } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import type { ProjectViewModel } from "../types";
import { ProjectList } from "./project-list";

type ProjectsPageContentProps = {
	projects?: ProjectViewModel[];
};

export const ProjectsPageContent = ({ projects = [] }: ProjectsPageContentProps) => {
	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<SectionHeading
					eyebrow="Projects"
					title="Selected work"
					description="A collection of selected applications, enterprise tools, and collaboration work I have built or contributed to."
					titleAs="h1"
					titleFontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
					descriptionFontSize={{ base: "lg", md: "xl" }}
					maxW="48rem"
				/>

				<ProjectList projects={projects} />
			</Stack>
		</Section>
	);
};
