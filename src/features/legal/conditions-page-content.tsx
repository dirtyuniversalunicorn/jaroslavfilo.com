import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";

const terms = [
	{
		title: "Purpose of the Website",
		body: [
			"This website is a personal portfolio created to showcase my skills, projects, and experience as a junior frontend developer. All content is provided for informational and presentation purposes only.",
		],
	},
	{
		title: "Intellectual Property",
		body: [
			"All content on this website, including text, images, designs, and code examples, belongs to me unless stated otherwise.",
			"You may view and share links to this website.",
			"You may not copy, reuse, or distribute any content without my permission.",
		],
	},
	{
		title: "Projects and Code Examples",
		body: [
			"Projects and code shown on this website are for demonstration purposes. They may be simplified, unfinished, or not suitable for production use.",
			"I am not responsible for any issues caused by using code from this website in your own projects.",
		],
	},
	{
		title: "External Links",
		body: [
			"This website may contain links to third-party websites, such as GitHub and LinkedIn. I am not responsible for the content or privacy practices of those websites.",
		],
	},
	{
		title: "No Guarantees",
		body: ["I try to keep the information on this website accurate and up to date, but I do not guarantee that everything is always correct or complete."],
	},
	{
		title: "Limitation of Liability",
		body: ["I am not responsible for any damages or losses resulting from the use of this website."],
	},
	{
		title: "Changes to These Terms",
		body: ["I may update these Terms & Conditions at any time. Any changes will be posted on this page."],
	},
	{
		title: "Contact",
		body: ["If you have any questions about these Terms & Conditions, feel free to contact me via the contact information provided on this website."],
	},
];

export const ConditionsPageContent = () => {
	return (
		<Box as="main" bg="#09090b" color="white" minH="100svh">
			<Section py={{ base: 24, md: 28, lg: 32 }}>
				<Stack gap={{ base: 10, md: 12 }} maxW="5xl" mx="auto">
					<Stack gap={{ base: 4, md: 5 }} maxW="48rem">
						<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
							Legal
						</Text>
						<Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight={400} lineHeight="1">
							Terms & Conditions
						</Heading>
						<Text color="whiteAlpha.600" fontSize={{ base: "sm", md: "md" }}>
							Last updated: 06.01.2026
						</Text>
						<Text color="whiteAlpha.800" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7">
							Welcome to my portfolio website. By using this website, you agree to the terms below. If you do not agree, please do not use this site.
						</Text>
					</Stack>

					<Stack gap={{ base: 4, md: 5 }}>
						{terms.map((term, index) => (
							<Box key={term.title} borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 4, md: 6 }} py={{ base: 5, md: 6 }}>
								<Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight={500} mb={{ base: 3, md: 4 }}>
									{index + 1}. {term.title}
								</Heading>
								<Stack gap={3}>
									{term.body.map((paragraph) => (
										<Text key={paragraph} color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
											{paragraph}
										</Text>
									))}
								</Stack>
							</Box>
						))}
					</Stack>
				</Stack>
			</Section>
		</Box>
	);
};
