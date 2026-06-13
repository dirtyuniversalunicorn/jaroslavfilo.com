import { Box, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";

export const TestimonialsPageContent = () => {
	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<Stack gap={{ base: 4, md: 5 }} maxW="48rem">
					<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
						Testimonials
					</Text>
					<Text as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} lineHeight="1" fontWeight={400}>
						Client feedback
					</Text>
				</Stack>

				<Box borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 5, md: 8 }} py={{ base: 8, md: 10 }}>
					<Stack gap={3} maxW="42rem">
						<Text as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={400}>
							Testimonials are coming soon.
						</Text>
						<Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
							There are no testimonials to display yet.
						</Text>
					</Stack>
				</Box>
			</Stack>
		</Section>
	);
};
