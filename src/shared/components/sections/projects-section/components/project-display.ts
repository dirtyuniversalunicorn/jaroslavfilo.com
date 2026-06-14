import type { ProjectViewModel } from "../types";

export const getProjectTypeLabel = (project: Pick<ProjectViewModel, "projectType" | "websiteUrl">) => {
	if (project.projectType === "internal-enterprise") {
		return "Internal enterprise application";
	}

	if (project.projectType === "private") {
		return "Private project";
	}

	return project.websiteUrl ? "Live project" : "Project";
};

export const getProjectTypeColor = (projectType: ProjectViewModel["projectType"]) => {
	if (projectType === "internal-enterprise") {
		return "orange";
	}

	if (projectType === "private") {
		return "gray";
	}

	return "green";
};
