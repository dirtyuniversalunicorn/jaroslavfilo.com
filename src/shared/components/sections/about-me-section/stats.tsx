import { Grid } from "@chakra-ui/react";
import { StatsItem } from "./stats-item";

export const Stats = () => {
	return (
		<Grid
			gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, auto)" }}
			gap={{ base: 6, md: 10 }}
			order={{ base: 3 }}
			justifyContent={{ base: "center", md: "start" }}
			placeItems="center"
		>
			<StatsItem number={2} category="years of experience" />
			<StatsItem number={3} category="projects completed" />
		</Grid>
	);
};
