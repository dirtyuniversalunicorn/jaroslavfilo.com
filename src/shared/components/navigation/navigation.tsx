"use client";

import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "../brand/brand";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigationButton, MobileNavigationMenu } from "./mobile-navigation";
import type { NavigationProps } from "./navigation-types";

export const Navigation = ({ navigation }: NavigationProps) => {
	const currentPath = usePathname();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setMobileMenuOpen((isOpen) => !isOpen);
	const closeMobileMenu = () => setMobileMenuOpen(false);

	return (
		<>
			<Flex align="center" h="16" justify="space-between">
				<Brand />
				<DesktopNavigation currentPath={currentPath} navigation={navigation} />
				<MobileNavigationButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
			</Flex>

			<MobileNavigationMenu currentPath={currentPath} isOpen={isMobileMenuOpen} navigation={navigation} onNavigate={closeMobileMenu} />
		</>
	);
};
