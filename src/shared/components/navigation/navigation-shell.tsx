"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Section } from "../ui/section";
import { Navigation } from "./navigation";
import type { NavigationShellProps } from "./navigation-types";

export const NavigationShell = ({ navigation }: NavigationShellProps) => {
	const [hasScrolled, setHasScrolled] = useState(false);

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
			bg={hasScrolled ? "rgba(9, 9, 11, 0.96)" : "transparent"}
			borderBottomWidth={hasScrolled ? "1px" : "0"}
			borderColor="whiteAlpha.200"
			position="fixed"
			top="0"
			transition="background-color 180ms ease, border-color 180ms ease"
			width="100%"
			zIndex="sticky"
		>
			<Section>
				<Navigation navigation={navigation} />
			</Section>
		</Box>
	);
};
