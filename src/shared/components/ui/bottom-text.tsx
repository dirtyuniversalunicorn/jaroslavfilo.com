import { Flex, Text } from "@chakra-ui/react";

export const BottomText = ({ text }: { text: string }) => {
	return (
		<Flex alignItems="flex-end" mx="auto" width="100%">
			<Text
				as="h1"
				fontSize={{ base: "clamp(3rem, 17vw, 6rem)", md: "clamp(6rem, 13vw, 12rem)" }}
				fontWeight={400}
				lineHeight="0.8"
				opacity={0.22}
				textAlign="center"
				textTransform="uppercase"
				whiteSpace="nowrap"
				width="100%"
			>
				{text}
			</Text>
		</Flex>
	);
};
