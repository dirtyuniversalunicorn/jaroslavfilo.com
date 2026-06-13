import { Box, Flex, Text } from "@chakra-ui/react";
import { techStackItems } from "@/shared/const/tech-stack-items";
import { Section } from "../../ui/section";
import { Collapse } from "./collapse";

export const TechStackSection = () => {
	return (
		<Box as="section">
			<Section py={{ base: 16, md: 20, lg: 28 }}>
				<Flex maxW="6xl" mx="auto" flexDirection="column" gap={{ base: 6, md: 8 }}>
					<Text textTransform="uppercase" fontSize={{ base: "sm", md: "md" }} fontWeight={300} textAlign={{ base: "center", md: "left" }}>
						technologies in my projects
					</Text>
					<Collapse techStackItems={techStackItems} />
				</Flex>
			</Section>
		</Box>
	);
};
