import { Badge, Box, Flex, Link, SimpleGrid, Stack, Text, Wrap } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { EmptyState } from "@/shared/components/ui/empty-state";
import type { ProjectViewModel } from "../types";
import { getProjectActionLabel, getProjectTypeColor, getProjectTypeLabel } from "./project-display";

export type ProjectListProps = {
	projects: ProjectViewModel[];
	limit?: number | "all";
};

export function ProjectList({ projects, limit = "all" }: ProjectListProps) {
	const visibleProjects = limit === "all" ? projects : projects.slice(0, limit);

	if (visibleProjects.length === 0) {
		return (
			<EmptyState
				title="Projects are coming soon."
				description="There are no projects to display yet. The UI is ready; when D1 starts returning project rows, they will appear here automatically."
			/>
		);
	}

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 5 }}>
			{visibleProjects.map((project) => (
				<Box key={project.id} borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 5, md: 6 }} py={{ base: 5, md: 6 }}>
					<Stack gap={4} minH="100%">
						<Wrap gap={2}>
							<Badge borderRadius={0} colorPalette={getProjectTypeColor(project.projectType)} variant="outline">
								{getProjectTypeLabel(project)}
							</Badge>
							<Badge borderRadius={0} colorPalette={project.wasContributor ? "blue" : "gray"} variant="outline">
								{project.wasContributor ? "Contributor" : "Primary work"}
							</Badge>
							{project.technologies.map((technology) => (
								<Badge key={technology} borderRadius={0} variant="outline">
									{technology}
								</Badge>
							))}
						</Wrap>
						<Flex direction="column" gap={3}>
							<Link asChild color="white" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={500}>
								<NextLink href={`/projects/${project.slug}`}>{project.title}</NextLink>
							</Link>
							<Text color="whiteAlpha.700" lineHeight="1.7">
								{project.shortDescription}
							</Text>
						</Flex>
						<Flex gap={4} mt="auto" wrap="wrap" alignItems="center">
							<Link asChild color="white" fontSize="sm" fontWeight={500} textTransform="uppercase">
								<NextLink href={`/projects/${project.slug}`}>View details</NextLink>
							</Link>
							{project.websiteUrl && (
								<Link
									href={project.websiteUrl}
									target="_blank"
									rel="noreferrer"
									color="whiteAlpha.800"
									display="inline-flex"
									alignItems="center"
									gap={2}
									fontSize="sm"
									fontWeight={500}
									textTransform="uppercase"
								>
									<FaExternalLinkAlt />
									{getProjectActionLabel(project)}
								</Link>
							)}
						</Flex>
					</Stack>
				</Box>
			))}
		</SimpleGrid>
	);
}
