import { Grid } from "@chakra-ui/react";
import { StatsItem } from "./stats-item";

type StatsProps = {
	yearsOfExperience: number;
	projectsCompleted: number;
};

export const Stats = ({ yearsOfExperience, projectsCompleted }: StatsProps) => {
	return (
		<Grid
			gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, auto)" }}
			gap={{ base: 6, md: 10 }}
			order={{ base: 3 }}
			justifyContent={{ base: "center", md: "start" }}
			placeItems="center"
		>
			<StatsItem number={yearsOfExperience} category="years of experience" />
			<StatsItem number={projectsCompleted} category="projects completed" />
		</Grid>
	);
};
