"use client";

import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CertificateDialog } from "./certificate-dialog";
import type { CertificateViewModel } from "./types";

export type CertificatesClientProps = {
	certificates: CertificateViewModel[];
};

export const CertificatesClient = ({ certificates }: CertificatesClientProps) => {
	const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

	if (certificates.length === 0) {
		return (
			<Box borderWidth="1px" borderColor="whiteAlpha.200" px={{ base: 5, md: 8 }} py={{ base: 8, md: 10 }}>
				<Stack gap={3} maxW="42rem">
					<Text as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={400}>
						Education entries are coming soon.
					</Text>
					<Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
						There are no certificates or education records to display yet. Once the D1 table is connected, they will render here.
					</Text>
				</Stack>
			</Box>
		);
	}

	return (
		<>
			<Grid gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={{ base: 4, md: 6 }}>
				{certificates.map((certificate) => (
					<Stack key={certificate.id} gap={3}>
						<Image
							src={certificate.imageUrl}
							alt={certificate.title}
							aspectRatio="4 / 3"
							cursor="pointer"
							objectFit="cover"
							borderWidth="1px"
							borderColor="whiteAlpha.200"
							_hover={{ opacity: 0.82 }}
							onClick={() => setActiveImage({ src: certificate.imageUrl, alt: certificate.title })}
						/>
						<Stack gap={1}>
							<Text color="white" fontSize={{ base: "md", md: "lg" }} lineHeight="1.3">
								{certificate.title}
							</Text>
							<Text color="whiteAlpha.700" fontSize="sm" textTransform="uppercase">
								{certificate.issuer}
							</Text>
						</Stack>
					</Stack>
				))}
			</Grid>

			<CertificateDialog activeImage={activeImage} setActiveImage={setActiveImage} />
		</>
	);
};
