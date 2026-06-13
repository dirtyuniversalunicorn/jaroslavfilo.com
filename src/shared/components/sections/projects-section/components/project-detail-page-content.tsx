import { Stack } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import { ProjectDetail } from "./project-detail";

export const ProjectDetailPageContent = ({ slug }: { slug: string }) => {
	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack maxW="7xl" mx="auto">
				<ProjectDetail slug={slug} />
			</Stack>
		</Section>
	);
};
