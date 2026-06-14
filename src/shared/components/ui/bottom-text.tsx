import { Flex, Text } from "@chakra-ui/react";

export const BottomText = ({ text }: { text: string }) => {
	return (
		<Flex alignItems="flex-end" mx="auto" minW={0} overflow="hidden" pb={{ base: 2, md: 3, lg: 4 }} width="100%" css={{ containerType: "inline-size" }}>
			<Text
				as="h1"
				fontSize={{ base: "clamp(1.75rem, 11cqw, 4rem)", md: "clamp(4.5rem, 10.5cqw, 9.5rem)", lg: "clamp(5.5rem, 10.5cqw, 10.5rem)" }}
				fontWeight={400}
				lineHeight="1"
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
