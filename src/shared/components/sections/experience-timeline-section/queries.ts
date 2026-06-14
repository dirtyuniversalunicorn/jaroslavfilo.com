import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { CareerTimelineIconKey, CareerTimelineViewModel } from "./types";

type CareerTimelineRow = {
	CareerTimelineId: number;
	Title: string;
	Description: string;
	Body: string;
	IconKey: string;
};

const isCareerTimelineIconKey = (value: string): value is CareerTimelineIconKey => {
	return value === "briefcase" || value === "laptop" || value === "science";
};

const mapCareerTimelineRow = (row: CareerTimelineRow): CareerTimelineViewModel => ({
	id: String(row.CareerTimelineId),
	title: row.Title,
	description: row.Description,
	text: row.Body,
	iconKey: isCareerTimelineIconKey(row.IconKey) ? row.IconKey : "briefcase",
});

export const getCareerTimelineItems = async (): Promise<CareerTimelineViewModel[]> => {
	const { env } = getCloudflareContext();
	const { results } = await env.jaroslavfilo_db.prepare("SELECT * FROM CareerTimeline ORDER BY DisplayOrder ASC").all<CareerTimelineRow>();

	return results.map(mapCareerTimelineRow);
};
