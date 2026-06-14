import { AboutPageSection } from "@/shared/components/sections/about-page-section/about-page-section";
import { EducationSection } from "@/shared/components/sections/education-section/education-section";
import { ExperienceTimelineSection } from "@/shared/components/sections/experience-timeline-section/experience-timeline-section";
import { TechStackSection } from "@/shared/components/sections/tech-stack-section/tech-stack-section";
import { socials } from "@/shared/const/socials";

export const dynamic = "force-dynamic";

export default function AboutPage() {
	return (
		<>
			<AboutPageSection socials={socials} />
			<ExperienceTimelineSection />
			<EducationSection />
			<TechStackSection />
		</>
	);
}
