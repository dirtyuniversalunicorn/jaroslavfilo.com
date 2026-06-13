"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Section } from "../ui/section";
import { Navigation } from "./navigation";
import type { NavigationShellProps } from "./navigation-types";

export const NavigationShell = ({ navigation }: NavigationShellProps) => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const hasSolidBackground = hasScrolled || isMobileMenuOpen;

	const toggleMobileMenu = () => setMobileMenuOpen((isOpen) => !isOpen);
	const closeMobileMenu = () => setMobileMenuOpen(false);

	useEffect(() => {
		const updateScrolledState = () => {
			setHasScrolled(window.scrollY > 12);
		};

		updateScrolledState();
		window.addEventListener("scroll", updateScrolledState, { passive: true });

		return () => window.removeEventListener("scroll", updateScrolledState);
	}, []);

	return (
		<Box
			as="header"
			bg={hasSolidBackground ? "rgba(9, 9, 11, 0.96)" : "transparent"}
			borderBottomWidth={hasSolidBackground ? "1px" : "0"}
			borderColor="whiteAlpha.200"
			position="fixed"
			top="0"
			transition="background-color 180ms ease, border-color 180ms ease"
			width="100%"
			zIndex="sticky"
		>
			<Section>
				<Navigation isMobileMenuOpen={isMobileMenuOpen} navigation={navigation} onMobileMenuClose={closeMobileMenu} onMobileMenuToggle={toggleMobileMenu} />
			</Section>
		</Box>
	);
};
