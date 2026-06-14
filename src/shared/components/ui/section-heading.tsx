import { Stack, type StackProps, Text, type TextProps } from "@chakra-ui/react";

type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	description?: string;
	titleAs?: "h1" | "h2";
	titleFontSize?: TextProps["fontSize"];
	descriptionFontSize?: TextProps["fontSize"];
} & Omit<StackProps, "children">;

export const SectionHeading = ({
	eyebrow,
	title,
	description,
	titleAs = "h2",
	titleFontSize = { base: "3xl", md: "4xl", lg: "5xl" },
	descriptionFontSize = { base: "md", md: "lg" },
	...props
}: SectionHeadingProps) => {
	return (
		<Stack gap={{ base: 4, md: 5 }} maxW="46rem" {...props}>
			<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
				{eyebrow}
			</Text>
			<Text as={titleAs} fontSize={titleFontSize} lineHeight="1" fontWeight={400}>
				{title}
			</Text>
			{description && (
				<Text color="whiteAlpha.700" fontSize={descriptionFontSize} lineHeight="1.7">
					{description}
				</Text>
			)}
		</Stack>
	);
};
