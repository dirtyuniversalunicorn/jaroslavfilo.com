import type { ProjectViewModel } from "../types";

export const getProjectTypeLabel = (project: Pick<ProjectViewModel, "projectType" | "websiteUrl">) => {
	if (project.projectType === "enterprise") {
		return "Enterprise application";
	}

	if (project.projectType === "enterprise-internal") {
		return "Internal enterprise application";
	}

	if (project.projectType === "private") {
		return "Private project";
	}

	return project.websiteUrl ? "Live project" : "Project";
};

export const getProjectActionLabel = (project: Pick<ProjectViewModel, "projectType">) => {
	if (project.projectType === "live") {
		return "Live project";
	}

	return "Open project";
};

export const getProjectTypeColor = (projectType: ProjectViewModel["projectType"]) => {
	if (projectType === "enterprise" || projectType === "enterprise-internal") {
		return "orange";
	}

	if (projectType === "private") {
		return "gray";
	}

	return "green";
};
