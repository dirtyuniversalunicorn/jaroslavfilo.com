import { Flex, Text } from "@chakra-ui/react";

export const Band = () => {
	return (
		<Flex
			alignItems={{ base: "flex-start", md: "center" }}
			flexDirection={{ base: "column", md: "row" }}
			fontSize={{ base: "sm", sm: "md", md: "lg" }}
			fontWeight={100}
			gap={{ base: "5", md: "0" }}
			justifyContent={{ md: "space-between" }}
			letterSpacing="2px"
			mt={{ base: "18svh", md: "26svh" }}
			opacity={0.72}
			textTransform="uppercase"
			width="100%"
		>
			<Text>Frontend</Text>
			<Text>Developer</Text>
			<Text>Olomouc, Czech Republic</Text>
		</Flex>
	);
};
