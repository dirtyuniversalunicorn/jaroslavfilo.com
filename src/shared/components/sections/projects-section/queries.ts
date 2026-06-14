import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { ProjectViewModel } from "./types";

type ProjectRow = {
	ProjectId: number;
	ProjectSlug: string;
	Title: string;
	Abbr: string;
	ShortDesc: string;
	LongDesc: string;
	WasContributor: boolean | number;
	Highlighted: boolean | number;
	ProjectUrl: string | null;
	GithubUrl: string | null;
	ProjectType: "live" | "enterprise" | "enterprise-internal" | "private";
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
	slug: row.ProjectSlug || createSlug(row.Title, row.Abbr),
	title: row.Title,
	websiteUrl: row.ProjectUrl ?? "",
	githubUrl: row.GithubUrl ?? "",
	projectType: row.ProjectType,
	shortDescription: row.ShortDesc,
	longDescription: row.LongDesc,
	wasContributor: row.WasContributor === true || row.WasContributor === 1,
	highlighted: row.Highlighted === true || row.Highlighted === 1,
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

export const getHighlightedProjects = async (): Promise<ProjectViewModel[]> => {
	const { env } = getCloudflareContext();
	const { results } = await env.jaroslavfilo_db.prepare("SELECT * FROM Projects WHERE Highlighted = TRUE ORDER BY ProjectId DESC").all<ProjectRow>();

	return results.map(mapProjectRow);
};

export const getProjectsCount = async (): Promise<number> => {
	const { env } = getCloudflareContext();
	const { results } = await env.jaroslavfilo_db.prepare("SELECT COUNT(*) AS Count FROM Projects").all<{ Count: number }>();

	return results[0]?.Count ?? 0;
};

export const getProjectBySlug = async (slug: string): Promise<ProjectViewModel | null> => {
	const projects = await getProjects();

	return projects.find((project) => project.slug === slug) ?? null;
};
