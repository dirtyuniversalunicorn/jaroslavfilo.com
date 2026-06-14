import { Flex } from "@chakra-ui/react";
import { AboutMeSection } from "@/shared/components/sections/about-me-section/about-me-section";
import { HomeProjectsSection } from "@/shared/components/sections/projects-section/components/home-projects-section";
import { getHighlightedProjects, getProjectsCount } from "@/shared/components/sections/projects-section/queries";
import { TechStackSection } from "@/shared/components/sections/tech-stack-section/tech-stack-section";
import { Band } from "@/shared/components/ui/band";
import { BottomText } from "@/shared/components/ui/bottom-text";
import { Section } from "@/shared/components/ui/section";
import { socials } from "@/shared/const/socials";

export const dynamic = "force-dynamic";

const experienceStartDate = new Date("2024-02-02T00:00:00.000Z");

const getYearsOfExperience = () => {
	const now = new Date();
	let years = now.getUTCFullYear() - experienceStartDate.getUTCFullYear();
	const hasReachedAnniversary =
		now.getUTCMonth() > experienceStartDate.getUTCMonth() ||
		(now.getUTCMonth() === experienceStartDate.getUTCMonth() && now.getUTCDate() >= experienceStartDate.getUTCDate());

	if (!hasReachedAnniversary) {
		years -= 1;
	}

	return Math.max(years, 0);
};

export default async function Home() {
	const [projects, projectsCompleted] = await Promise.all([getHighlightedProjects(), getProjectsCount()]);
	const yearsOfExperience = getYearsOfExperience();

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
			<AboutMeSection socials={socials} projectsCompleted={projectsCompleted} yearsOfExperience={yearsOfExperience} />
			<HomeProjectsSection projects={projects} />
			<TechStackSection />
		</>
	);
}
