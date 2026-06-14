import { Box, Stack, Text } from "@chakra-ui/react";

type EmptyStateProps = {
	title: string;
	description: string;
};

export const EmptyState = ({ title, description }: EmptyStateProps) => {
	return (
		<Box borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 5, md: 8 }} py={{ base: 8, md: 10 }}>
			<Stack gap={3} maxW="42rem">
				<Text as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={400}>
					{title}
				</Text>
				<Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
					{description}
				</Text>
			</Stack>
		</Box>
	);
};
