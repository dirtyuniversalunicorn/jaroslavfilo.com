import { Grid, GridItem } from "@chakra-ui/react";
import { ContactForm } from "@/features/contact-me/components/contact-form";
import { navigation } from "@/shared/components/navigation/navigation-config";
import { socials } from "@/shared/const/socials";
import { Socials } from "../../socials";
import { FooterGridList } from "./footer-grid-list";

const footerPages = navigation.map((item) => ({
	page: item.pageTitle,
	url: item.href.replace(/^\//, ""),
}));

export const FooterGrid = () => {
	return (
		<Grid
			templateColumns={{
				base: "1fr",
				md: "minmax(0, 1.2fr) minmax(0, 1.2fr)",
				lg: "minmax(10rem, 0.7fr) minmax(10rem, 0.7fr) minmax(0, 1.8fr)",
			}}
			gap={{ base: 10, md: 12, lg: 16 }}
			alignItems="start"
		>
			<GridItem>
				<Socials
					showTitle
					socials={socials}
					display="flex"
					flexDirection={{ base: "row", lg: "column" }}
					gap={{ base: 4, md: 5 }}
					justify={{ base: "center", md: "flex-start" }}
					mx="0"
					order="initial"
				/>
			</GridItem>
			<GridItem>
				<FooterGridList footerPages={footerPages} />
			</GridItem>
			<GridItem gridColumn={{ base: "1", md: "1 / -1", lg: "3" }} gridRow={{ lg: "1 / span 2" }} width="100%">
				<ContactForm />
			</GridItem>
		</Grid>
	);
};
