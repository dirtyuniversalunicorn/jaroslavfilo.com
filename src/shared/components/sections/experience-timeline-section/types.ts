export type CareerTimelineIconKey = "briefcase" | "laptop" | "science";

export type CareerTimelineViewModel = {
	id: string;
	title: string;
	description: string;
	text: string;
	iconKey: CareerTimelineIconKey;
};
