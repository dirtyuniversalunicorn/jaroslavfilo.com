"use client";

import { ChakraProvider, createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";
import type { ReactNode } from "react";

const customButton = defineRecipe({
	variants: {
		variant: {
			transparent: {
				backgroundColor: "transparent",
				borderColor: "white",
				color: "white",
				_hover: {
					bg: "colorPalette.solid/90",
					color: "black",
				},
			},
		},
	},
});

const system = createSystem(defaultConfig, {
	theme: {
		recipes: { button: customButton },
	},
});

export function Provider({ children }: { children: ReactNode }) {
	return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
