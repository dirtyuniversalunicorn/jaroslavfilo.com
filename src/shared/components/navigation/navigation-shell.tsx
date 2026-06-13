import { Box } from "@chakra-ui/react";
import { Navigation } from "./navigation";
import type { NavigationShellProps } from "./navigation-types";

export const NavigationShell = ({ navigation }: NavigationShellProps) => {
	return (
		<Box as="header" bg="bg" borderBottomWidth="1px" borderColor="border" position="sticky" top="0" width="100%" zIndex="sticky">
			<Box maxW="7xl" mx="auto" px={{ base: "4", md: "6" }}>
				<Navigation navigation={navigation} />
			</Box>
		</Box>
	);
};
