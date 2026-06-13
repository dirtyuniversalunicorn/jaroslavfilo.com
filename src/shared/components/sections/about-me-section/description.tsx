import { Box, Text } from "@chakra-ui/react";

export const Description = () => {
	return (
		<Text order={{ base: 2, md: 1 }} fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} lineHeight="1.25" textAlign={{ base: "center", md: "left" }}>
			I'm a passionate and motivated Frontend Developer with a strong foundation
			<Box as="span" opacity={0.5}>
				{" "}
				in modern web technologies. I enjoy turning ideas into responsive, user-friendly websites and applications.
			</Box>
		</Text>
	);
};
