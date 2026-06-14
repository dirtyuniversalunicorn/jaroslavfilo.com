export type ProjectViewModel = {
	id: string;
	slug: string;
	title: string;
	websiteUrl: string;
	projectType: "live" | "enterprise" | "enterprise-internal" | "private";
	shortDescription: string;
	longDescription: string;
	wasContributor: boolean;
	highlighted: boolean;
	technologies: string[];
	imageUrl: string[];
};
