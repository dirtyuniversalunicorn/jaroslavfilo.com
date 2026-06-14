export type ProjectViewModel = {
	id: string;
	slug: string;
	title: string;
	websiteUrl: string;
	projectType: "live" | "internal-enterprise" | "private";
	shortDescription: string;
	longDescription: string;
	wasContributor: boolean;
	highlighted: boolean;
	technologies: string[];
	imageUrl: string[];
};
