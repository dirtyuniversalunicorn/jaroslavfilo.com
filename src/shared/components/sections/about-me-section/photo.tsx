import { Box, Image, Text } from "@chakra-ui/react";

export const Photo = () => {
	return (
		<Box display="flex" flexDirection="column" maxW={{ base: "22rem", md: "26rem", lg: "100%" }} mx={{ base: "auto", lg: "0" }} width="100%">
			<Text
				as="h3"
				textTransform="uppercase"
				mb={{ base: 4, md: 6 }}
				fontSize={{ base: "sm", md: "md" }}
				fontWeight={300}
				textAlign={{ base: "center", lg: "left" }}
			>
				About me
			</Text>
			<Image
				alt="Jaroslav Filo"
				src="/my_picture.jpg"
				width="100%"
				aspectRatio={{ base: "4 / 5", md: "3 / 4" }}
				maxHeight={{ base: "28rem", lg: "31rem" }}
				objectFit="cover"
			/>
		</Box>
	);
};
