import { getProjects } from "@/shared/components/sections/projects-section/queries";

export async function GET(request: Request): Promise<Response> {
	try {
		const url = new URL(request.url);
		const limit = Number(url.searchParams.get("limit"));
		const projects = Number.isInteger(limit) && limit > 0 ? await getProjects(limit) : await getProjects();

		return Response.json(projects);
	} catch (error) {
		console.error(error);

		return Response.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}
