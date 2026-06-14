import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { CertificateViewModel } from "./types";

type EducationRow = {
	EducationId: number;
	Title: string;
	ImageUrl: string;
	Issuer: string;
};

const getPublicR2ImageUrl = (imageUrl: string) => {
	if (/^https?:\/\//i.test(imageUrl)) {
		return imageUrl;
	}

	const publicR2Url = process.env.R2_PUBLIC_DEVELOPMENT_URL;

	if (!publicR2Url) {
		return imageUrl;
	}

	return `${publicR2Url.replace(/\/$/, "")}/${imageUrl.replace(/^\//, "")}`;
};

const mapEducationRow = (row: EducationRow): CertificateViewModel => ({
	id: String(row.EducationId),
	title: row.Title,
	imageUrl: getPublicR2ImageUrl(row.ImageUrl),
	issuer: row.Issuer,
});

export const getCertificates = async (): Promise<CertificateViewModel[]> => {
	const { env } = getCloudflareContext();
	const { results } = await env.jaroslavfilo_db.prepare("SELECT * FROM Education ORDER BY EducationId DESC").all<EducationRow>();

	return results.map(mapEducationRow);
};
