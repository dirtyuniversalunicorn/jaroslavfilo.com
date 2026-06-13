import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(): Promise<Response> {
	const { env } = getCloudflareContext();

	const { results } = await env.jaroslavfilo_db
		.prepare("SELECT * FROM Customers WHERE CompanyName = ?")
		.bind("Bs Beverages")
		.all();

	return Response.json(results);
}
