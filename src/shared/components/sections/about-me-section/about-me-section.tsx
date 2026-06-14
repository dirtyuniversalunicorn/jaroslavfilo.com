import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { type SocialItem, Socials } from "../../socials";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Description } from "./description";
import { Photo } from "./photo";
import { Stats } from "./stats";

export type AboutMeSectionProps = {
	socials: SocialItem[];
	yearsOfExperience: number;
	projectsCompleted: number;
};

export const AboutMeSection = ({ socials, yearsOfExperience, projectsCompleted }: AboutMeSectionProps) => {
	return (
		<Box as="section">
			<Section py={{ base: 16, md: 20, lg: 24 }}>
				<Grid
					templateColumns={{ base: "1fr", lg: "minmax(0, 0.85fr) minmax(0, 1fr)" }}
					gap={{ base: 10, md: 12, lg: 16 }}
					alignItems="center"
					maxW="6xl"
					mx="auto"
				>
					<Photo />
					<Box display="flex" flexDirection="column" gap={{ base: 7, md: 8 }} justifyContent="space-between">
						<Description />
						<Socials socials={socials} justify={{ base: "center", md: "flex-start" }} mx="0" />
						<Stats projectsCompleted={projectsCompleted} yearsOfExperience={yearsOfExperience} />
						<Box order={{ base: 4 }} textAlign={{ base: "center", md: "left" }}>
							<Link href="/about">
								<Button variant="transparent" buttonTitle="More about me..." mt="auto" />
							</Link>
						</Box>
					</Box>
				</Grid>
			</Section>
		</Box>
	);
};
