import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { ProjectViewModel } from "./types";

type ProjectRow = {
	ProjectId: number;
	Title: string;
	Abbr: string;
	ShortDesc: string;
	LongDesc: string;
	PictureUrls: string;
	TechStack: string;
};

const parseStringArray = (value: string) => {
	try {
		const parsed: unknown = JSON.parse(value);

		if (Array.isArray(parsed)) {
			return parsed.filter((item): item is string => typeof item === "string");
		}
	} catch {
		return [];
	}

	return [];
};

const createSlug = (title: string, fallback: string) => {
	const slug = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

	return slug || fallback.toLowerCase();
};

const mapProjectRow = (row: ProjectRow): ProjectViewModel => ({
	id: String(row.ProjectId),
	slug: createSlug(row.Title, row.Abbr),
	title: row.Title,
	websiteUrl: "",
	shortDescription: row.ShortDesc,
	longDescription: row.LongDesc,
	technologies: parseStringArray(row.TechStack),
	imageUrl: parseStringArray(row.PictureUrls),
});

export const getProjectStaticParamsSlugs = async () => {
	const projects = await getProjects();

	return projects.map((project) => ({ slug: project.slug }));
};

export const getProjects = async (limit?: number): Promise<ProjectViewModel[]> => {
	const { env } = getCloudflareContext();
	const shouldLimit = typeof limit === "number" && Number.isInteger(limit) && limit > 0;

	const statement = shouldLimit
		? env.jaroslavfilo_db.prepare("SELECT * FROM Projects ORDER BY ProjectId DESC LIMIT ?").bind(limit)
		: env.jaroslavfilo_db.prepare("SELECT * FROM Projects ORDER BY ProjectId DESC");

	const { results } = await statement.all<ProjectRow>();

	return results.map(mapProjectRow);
};

export const getProjectBySlug = async (slug: string): Promise<ProjectViewModel | null> => {
	const projects = await getProjects();

	return projects.find((project) => project.slug === slug) ?? null;
};
