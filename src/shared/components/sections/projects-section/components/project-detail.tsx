import { Grid, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../queries";
import { ProjectCharacteristics } from "./project-characteristics";

export async function ProjectDetail({ slug }: { slug: string }) {
	const projectDetails = await getProjectBySlug(slug);

	if (!projectDetails) {
		notFound();
	}

	return (
		<Grid gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 1fr) minmax(0, 1fr)" }} gap={{ base: 8, md: 10 }}>
			<ProjectCharacteristics projectDetails={projectDetails} />
			{projectDetails.imageUrl.length > 0 ? (
				<Grid gap={4}>
					{projectDetails.imageUrl.map((imageUrl) => (
						<Text key={imageUrl} color="whiteAlpha.700">
							{imageUrl}
						</Text>
					))}
				</Grid>
			) : null}
		</Grid>
	);
}
