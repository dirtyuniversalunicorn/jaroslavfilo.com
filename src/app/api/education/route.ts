import { getCertificates } from "@/shared/components/sections/education-section/certificates";

export async function GET(): Promise<Response> {
	try {
		const education = await getCertificates();

		return Response.json(education);
	} catch (error) {
		console.error(error);

		return Response.json({ error: "Failed to fetch education" }, { status: 500 });
	}
}
