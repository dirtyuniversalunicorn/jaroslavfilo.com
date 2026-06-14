import { Box, Stack, Text, Timeline } from "@chakra-ui/react";
import type { ElementType } from "react";
import { LuBriefcaseBusiness, LuFlaskConical, LuLaptop } from "react-icons/lu";
import { Section } from "@/shared/components/ui/section";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { getCareerTimelineItems } from "./queries";
import type { CareerTimelineIconKey } from "./types";

const timelineIcons = {
	briefcase: LuBriefcaseBusiness,
	laptop: LuLaptop,
	science: LuFlaskConical,
} satisfies Record<CareerTimelineIconKey, ElementType>;

export const ExperienceTimelineSection = async () => {
	const timelineItems = await getCareerTimelineItems();

	return (
		<Box as="section" bg="#09090b" color="white">
			<Section py={{ base: 16, md: 20, lg: 24 }}>
				<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
					<SectionHeading
						eyebrow="Timeline"
						title="Work and growth"
						description="A short look at my transition into frontend development and the experience I am building along the way."
					/>

					<Timeline.Root colorPalette="gray" size="xl" variant="outline" maxW="4xl">
						{timelineItems.map((item) => {
							const Icon = timelineIcons[item.iconKey];

							return (
								<Timeline.Item key={item.id}>
									<Timeline.Connector>
										<Timeline.Separator borderColor="whiteAlpha.300" />
										<Timeline.Indicator bg="#09090b" borderColor="whiteAlpha.500" color="white">
											<Icon />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>
											<Stack gap={1}>
												<Text color="white" fontSize={{ base: "lg", md: "xl" }} fontWeight={500}>
													{item.title}
												</Text>
												<Text color="whiteAlpha.700" fontSize={{ base: "sm", md: "md" }}>
													{item.description}
												</Text>
											</Stack>
										</Timeline.Title>
										<Timeline.Description color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
											{item.text}
										</Timeline.Description>
									</Timeline.Content>
								</Timeline.Item>
							);
						})}
					</Timeline.Root>
				</Stack>
			</Section>
		</Box>
	);
};
