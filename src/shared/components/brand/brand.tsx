import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Brand = () => {
	return (
		<Link href="/">
			<Flex alignItems="baseline" gap="1">
				<Text as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight={400} lineHeight="1">
					Jaroslav
				</Text>
				<Text as="h2" fontSize={{ base: "sm", md: "lg" }} lineHeight="1">
					Filo
				</Text>
			</Flex>
		</Link>
	);
};
