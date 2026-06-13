import { Flex } from "@chakra-ui/react";
import { AboutMeSection } from "@/shared/components/sections/about-me-section/about-me-section";
import { HomeProjectsSection } from "@/shared/components/sections/projects-section/components/home-projects-section";
import { TechStackSection } from "@/shared/components/sections/tech-stack-section/tech-stack-section";
import { Band } from "@/shared/components/ui/band";
import { BottomText } from "@/shared/components/ui/bottom-text";
import { Section } from "@/shared/components/ui/section";
import { socials } from "@/shared/const/socials";

export default function Home() {
	return (
		<>
			<Flex
				as="section"
				backgroundImage="url('/landing_page_image.png')"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				minH="100svh"
			>
				<Section display="flex" flexDirection="column" justifyContent="space-between" minH="100svh" py={{ base: "8", md: "10" }}>
					<Band />
					<BottomText text="jaroslav filo" />
				</Section>
			</Flex>
			<AboutMeSection socials={socials} />
			<HomeProjectsSection />
			<TechStackSection />
		</>
	);
}
