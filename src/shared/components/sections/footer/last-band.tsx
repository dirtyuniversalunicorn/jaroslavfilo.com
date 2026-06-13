import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CurrentYear } from "./current-year";

export const LastBand = () => {
	return (
		<Flex
			borderTopWidth="1px"
			borderColor="whiteAlpha.100"
			justifyContent="center"
			mt="auto"
			px={{ base: 4, md: 6 }}
			py={{ base: 4, md: 5 }}
			textAlign="center"
			width="100%"
		>
			<Text color="whiteAlpha.700" fontSize={{ base: "sm", md: "md" }}>
				&copy;
				<CurrentYear /> Designed by{" "}
				<Link href="https://www.behance.net/swifttech03" target="_blank">
					Naeem
				</Link>
				, coded by Me
			</Text>
		</Flex>
	);
};
