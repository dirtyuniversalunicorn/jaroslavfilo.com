"use client";

import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Brand } from "../brand/brand";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigationButton, MobileNavigationMenu } from "./mobile-navigation";
import type { NavigationProps } from "./navigation-types";

export const Navigation = ({ isMobileMenuOpen, navigation, onMobileMenuClose, onMobileMenuToggle }: NavigationProps) => {
	const currentPath = usePathname();

	return (
		<>
			<Flex align="center" h="16" justify="space-between">
				<Brand />
				<DesktopNavigation currentPath={currentPath} navigation={navigation} />
				<MobileNavigationButton isOpen={isMobileMenuOpen} onClick={onMobileMenuToggle} />
			</Flex>

			<MobileNavigationMenu currentPath={currentPath} isOpen={isMobileMenuOpen} navigation={navigation} onNavigate={onMobileMenuClose} />
		</>
	);
};
