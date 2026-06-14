"use client";

import { Badge, Box, Collapsible, Link, Stack, Text, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { ProjectViewModel } from "../types";
import { getProjectActionLabel, getProjectTypeColor, getProjectTypeLabel } from "./project-display";

type ProjectCharacteristicsProps = {
	projectDetails: ProjectViewModel;
};

export const ProjectCharacteristics = ({ projectDetails }: ProjectCharacteristicsProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Stack gap={5}>
			<Stack gap={4} alignItems="start">
				<Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
					{projectDetails.title}
				</Text>
				<Wrap gap={2}>
					<Badge borderRadius={0} colorPalette={getProjectTypeColor(projectDetails.projectType)} variant="outline">
						{getProjectTypeLabel(projectDetails)}
					</Badge>
					<Badge borderRadius={0} colorPalette={projectDetails.wasContributor ? "blue" : "gray"} variant="outline">
						{projectDetails.wasContributor ? "Contributor" : "Primary work"}
					</Badge>
					{projectDetails.websiteUrl && (
						<Link href={projectDetails.websiteUrl} target="_blank" rel="noreferrer" display="inline-flex" alignItems="center" gap={2}>
							<FaExternalLinkAlt />
							{getProjectActionLabel(projectDetails)}
						</Link>
					)}
					{projectDetails.technologies.map((technology) => (
						<Badge key={technology} borderRadius={0} variant="outline">
							{technology}
						</Badge>
					))}
				</Wrap>
			</Stack>
			<Text color="whiteAlpha.800" lineHeight="1.7">
				{projectDetails.shortDescription}
			</Text>
			{projectDetails.longDescription && (
				<Collapsible.Root open={isOpen} onOpenChange={(event) => setIsOpen(event.open)}>
					<Collapsible.Trigger paddingY="3" color="whiteAlpha.700">
						{isOpen ? "Hide details" : "More details"}
					</Collapsible.Trigger>
					<Collapsible.Content>
						<Box>
							<Text color="whiteAlpha.800" lineHeight="1.7">
								{projectDetails.longDescription}
							</Text>
						</Box>
					</Collapsible.Content>
				</Collapsible.Root>
			)}
		</Stack>
	);
};
