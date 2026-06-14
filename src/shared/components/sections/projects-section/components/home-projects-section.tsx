import { Stack } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import type { ProjectViewModel } from "../types";
import { ProjectList } from "./project-list";

type HomeProjectsSectionProps = {
	projects?: ProjectViewModel[];
};

export const HomeProjectsSection = ({ projects = [] }: HomeProjectsSectionProps) => {
	return (
		<Section as="section" py={{ base: 16, md: 20, lg: 24 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<SectionHeading eyebrow="Projects" title="Recent work" description="A small preview of highlighted projects from the portfolio database." />

				<ProjectList projects={projects} />
			</Stack>
		</Section>
	);
};
