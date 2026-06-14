import { Box, Grid, Image } from "@chakra-ui/react";
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
				<Grid gap={4} alignContent="start">
					{projectDetails.imageUrl.map((imageUrl) => (
						<Box
							key={imageUrl}
							alignItems="center"
							aspectRatio={{ base: "4 / 3", md: "16 / 10" }}
							bg="transparent"
							borderColor="whiteAlpha.200"
							borderWidth="1px"
							display="flex"
							justifyContent="center"
							maxH={{ base: "22rem", lg: "28rem" }}
							minH={{ base: "12rem", md: "18rem" }}
							overflow="hidden"
							width="100%"
						>
							<Image src={imageUrl} alt={`${projectDetails.title} preview`} maxH="100%" maxW="100%" objectFit="contain" width="100%" />
						</Box>
					))}
				</Grid>
			) : null}
		</Grid>
	);
}
