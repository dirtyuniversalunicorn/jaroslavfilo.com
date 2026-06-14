import { Stack } from "@chakra-ui/react";
import { EmptyState } from "@/shared/components/ui/empty-state";
import { Section } from "@/shared/components/ui/section";
import { SectionHeading } from "@/shared/components/ui/section-heading";

export const TestimonialsPageContent = () => {
	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
				<SectionHeading eyebrow="Testimonials" title="Client feedback" titleAs="h1" titleFontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} maxW="48rem" />
				<EmptyState title="Testimonials are coming soon." description="There are no testimonials to display yet." />
			</Stack>
		</Section>
	);
};
