import { Box, Circle, Float, Stack, Text } from "@chakra-ui/react";

export type StatsITemProps = {
	number: number;
	category: string;
};

export const StatsItem = ({ number, category }: StatsITemProps) => {
	return (
		<Stack width="100%" alignItems="center" gap={1}>
			<Box position="relative" w={{ base: "56px", md: "64px" }} h={{ base: "56px", md: "64px" }}>
				<Float top={4} right={4}>
					<Circle size="7" backgroundColor="transparent" color="white">
						+
					</Circle>
				</Float>
				<Text textAlign="center" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1">
					{number}
				</Text>
			</Box>
			<Text fontSize="sm" textAlign="center">
				{category}
			</Text>
		</Stack>
	);
};
