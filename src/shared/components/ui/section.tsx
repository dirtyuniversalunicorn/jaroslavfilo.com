import { Box, type BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {
	children: React.ReactNode;
}

export const Section = ({ children, ...props }: SectionProps) => {
	return (
		<Box maxW="7xl" mx="auto" px={{ base: "4", md: "6" }} width="100%" {...props}>
			{children}
		</Box>
	);
};
