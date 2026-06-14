import { Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import type { ProjectViewModel } from "../types";
import { ProjectList } from "./project-list";

type HomeProjectsSectionProps = {
	projects?: ProjectViewModel[];
};

export const HomeProjectsSection = ({ projects = [] }: HomeProjectsSectionProps) => {
	return (
		<Section as="section" py={{ base: 16, md: 20, lg: 24 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<Stack gap={{ base: 4, md: 5 }} maxW="46rem">
					<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
						Projects
					</Text>
					<Text as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} lineHeight="1" fontWeight={400}>
						Recent work
					</Text>
					<Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
						A small preview of highlighted projects from the portfolio database.
					</Text>
				</Stack>

				<ProjectList projects={projects} />
			</Stack>
		</Section>
	);
};
