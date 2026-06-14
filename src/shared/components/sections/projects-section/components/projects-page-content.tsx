import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import type { ProjectViewModel } from "../types";
import { ProjectList } from "./project-list";

type ProjectsPageContentProps = {
	projects?: ProjectViewModel[];
};

export const ProjectsPageContent = ({ projects = [] }: ProjectsPageContentProps) => {
	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<Stack gap={{ base: 4, md: 5 }} maxW="48rem">
					<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
						Projects
					</Text>
					<Text as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} lineHeight="1" fontWeight={400}>
						Selected work
					</Text>
					<Text color="whiteAlpha.700" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7">
						A collection of selected applications, enterprise tools, and collaboration work I have built or contributed to.
					</Text>
				</Stack>

				<ProjectList projects={projects} />
			</Stack>
		</Section>
	);
};
