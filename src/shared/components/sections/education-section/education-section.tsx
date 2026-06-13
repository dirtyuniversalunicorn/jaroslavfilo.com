import { Box, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import { getCertificates } from "./certificates";
import { CertificatesClient } from "./certificates-client";

export const EducationSection = async () => {
	const certificates = await getCertificates();

	return (
		<Box as="section" id="education_section">
			<Section py={{ base: 16, md: 20, lg: 24 }}>
				<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
					<Stack gap={{ base: 4, md: 5 }} maxW="46rem">
						<Text textTransform="uppercase" color="whiteAlpha.700" fontSize="sm">
							Education
						</Text>
						<Text as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} lineHeight="1" fontWeight={400}>
							Certificates and learning
						</Text>
						<Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
							This section is ready for education and certificate data. Once D1 is wired up, records from the database will appear here.
						</Text>
					</Stack>

					<CertificatesClient certificates={certificates} />
				</Stack>
			</Section>
		</Box>
	);
};
