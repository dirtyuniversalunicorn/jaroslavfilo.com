import { Stack } from "@chakra-ui/react";
import { Section } from "../../ui/section";
import { FooterGrid } from "./footer-grid";
import { FooterTitle } from "./footer-title";
import { LastBand } from "./last-band";

export const Footer = () => {
	return (
		<Stack
			as="footer"
			id="footer_section"
			bg="#09090b"
			backgroundImage="linear-gradient(rgba(9, 9, 11, 0.76), rgba(9, 9, 11, 0.94)), url('/background_footer.jpg')"
			backgroundPosition="center bottom"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
		>
			<Section py={{ base: 14, md: 16, lg: 18 }}>
				<Stack gap={{ base: 10, md: 14 }} maxW="7xl" mx="auto" width="100%">
					<FooterTitle
						fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
						title="Do you have a question, an idea, or would you just like to get in touch?"
						width={{ base: "100%" }}
						fontWeight={300}
						lineHeight="1.2"
					/>
					<FooterGrid />
				</Stack>
			</Section>
			<LastBand />
		</Stack>
	);
};
