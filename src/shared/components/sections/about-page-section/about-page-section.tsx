import { Box, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { type SocialItem, Socials } from "@/shared/components/socials";
import { Section } from "@/shared/components/ui/section";

const highlights = ["Responsive interfaces", "Modern React and Next.js", "Clean component structure", "Performance-minded delivery"];

type AboutPageSectionProps = {
	socials: SocialItem[];
};

export const AboutPageSection = ({ socials }: AboutPageSectionProps) => {
	return (
		<Box as="main" bg="#09090b" color="white" minH="100svh">
			<Section py={{ base: 24, md: 28, lg: 32 }}>
				<Grid templateColumns={{ base: "1fr", lg: "minmax(0, 0.9fr) minmax(0, 1.1fr)" }} gap={{ base: 10, md: 12, lg: 16 }} alignItems="center">
					<Image
						alt="Jaroslav Filo"
						src="/my_picture.jpg"
						width="100%"
						maxW={{ base: "22rem", md: "28rem", lg: "100%" }}
						mx={{ base: "auto", lg: "0" }}
						aspectRatio={{ base: "4 / 5", md: "3 / 4" }}
						maxH={{ base: "31rem", lg: "40rem" }}
						objectFit="cover"
					/>

					<Stack gap={{ base: 8, md: 10 }}>
						<Stack gap={{ base: 4, md: 5 }} textAlign={{ base: "center", lg: "left" }}>
							<Text textTransform="uppercase" fontSize="sm" color="whiteAlpha.700">
								About me
							</Text>
							<Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight={400} lineHeight="1">
								Frontend developer from Olomouc.
							</Heading>
							<Text color="whiteAlpha.700" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7" maxW="42rem" mx={{ base: "auto", lg: "0" }}>
								I build responsive websites and applications with a focus on clear structure, usable interfaces, and steady attention to detail. I enjoy turning
								early ideas into polished experiences that work comfortably across screens.
							</Text>
						</Stack>

						<SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: 3, md: 4 }}>
							{highlights.map((highlight) => (
								<Box key={highlight} borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 4, md: 5 }} py={{ base: 3, md: 4 }}>
									<Text fontSize={{ base: "sm", md: "md" }}>{highlight}</Text>
								</Box>
							))}
						</SimpleGrid>

						<Socials socials={socials} showTitle justify={{ base: "center", lg: "flex-start" }} mx="0" />
					</Stack>
				</Grid>
			</Section>
		</Box>
	);
};
