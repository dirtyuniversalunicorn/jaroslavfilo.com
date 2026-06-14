import { Box, Stack } from "@chakra-ui/react";
import { Section } from "@/shared/components/ui/section";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { getCertificates } from "./certificates";
import { CertificatesClient } from "./certificates-client";

export const EducationSection = async () => {
	const certificates = await getCertificates();

	return (
		<Box as="section" id="education_section">
			<Section py={{ base: 16, md: 20, lg: 24 }}>
				<Stack gap={{ base: 8, md: 10 }} maxW="6xl" mx="auto">
					<SectionHeading
						eyebrow="Education"
						title="Certificates and learning"
						description="Certificates I picked up along the way to becoming a frontend developer, with more learning still ahead."
					/>

					<CertificatesClient certificates={certificates} />
				</Stack>
			</Section>
		</Box>
	);
};
