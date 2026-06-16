import { HStack } from "@chakra-ui/react";
import { NavigationLink } from "./navigation-item";
import { NavigationSignOut } from "./navigation-sign-out";
import type { DesktopNavigationProps } from "./navigation-types";

export const DesktopNavigation = ({ currentPath, navigation }: DesktopNavigationProps) => {
	return (
		<HStack as="nav" display={{ base: "none", md: "flex" }} gap="1">
			{navigation.map((item) => (
				<NavigationLink key={item.href} href={item.href} pageTitle={item.pageTitle} isCurrent={currentPath === item.href} />
			))}
			<NavigationSignOut />
		</HStack>
	);
};
