import { Box, IconButton, VStack } from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { NavigationLink } from "./navigation-item";
import { NavigationSignOut } from "./navigation-sign-out";
import type { MobileNavigationButtonProps, NavigationItem } from "./navigation-types";

export const MobileNavigationButton = ({ isOpen, onClick }: MobileNavigationButtonProps) => {
	return (
		<IconButton
			aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
			display={{ base: "inline-flex", md: "none" }}
			onClick={onClick}
			size="sm"
			variant="ghost"
		>
			{isOpen ? <LuX /> : <LuMenu />}
		</IconButton>
	);
};

interface MobileNavigationMenuProps {
	currentPath: string;
	isOpen: boolean;
	navigation: NavigationItem[];
	onNavigate: () => void;
}

export const MobileNavigationMenu = ({ currentPath, isOpen, navigation, onNavigate }: MobileNavigationMenuProps) => {
	return (
		<Box as="nav" borderColor="border" borderTopWidth="1px" display={{ base: isOpen ? "block" : "none", md: "none" }} pb="4" pt="3">
			<VStack align="stretch" gap="1">
				{navigation.map((item) => (
					<NavigationLink key={item.href} href={item.href} pageTitle={item.pageTitle} isCurrent={currentPath === item.href} onClick={onNavigate} />
				))}
				<NavigationSignOut onSignOut={onNavigate} />
			</VStack>
		</Box>
	);
};
