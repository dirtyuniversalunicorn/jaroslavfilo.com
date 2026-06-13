import { Box, Collapsible, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { LuChevronRight } from "react-icons/lu";

type TechStackItem = {
	index: number;
	name: string;
	icon: IconType;
	docsUrl: string;
};

type TechStack = {
	category: string;
	items: TechStackItem[];
}[];

type CollapseProps = {
	techStackItems: TechStack;
};

export const Collapse = ({ techStackItems }: CollapseProps) => {
	return (
		<Box zIndex={1}>
			{techStackItems.map((stackItem, index) => (
				<Collapsible.Root key={stackItem.category} borderBottom="1px solid" borderColor="whiteAlpha.400" defaultOpen={index === 0}>
					<Collapsible.Trigger
						paddingY={{ base: 4, md: 5 }}
						display="flex"
						gap={{ base: 3, md: 4 }}
						alignItems="center"
						width="100%"
						fontSize={{ base: "lg", md: "xl" }}
						textTransform="uppercase"
						textAlign="left"
					>
						<Collapsible.Indicator transition="transform 0.2s" _open={{ transform: "rotate(90deg)" }}>
							<LuChevronRight />
						</Collapsible.Indicator>
						<Text as="span" minW={0}>
							{stackItem.category}
						</Text>
						<Text as="span" ml="auto" fontSize={{ base: "sm", md: "md" }} whiteSpace="nowrap">
							( {stackItem.items.length} )
						</Text>
					</Collapsible.Trigger>
					<Collapsible.Content>
						<SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gap={{ base: 3, md: 4 }} pb={{ base: 5, md: 6 }}>
							{stackItem.items.map((item) => {
								const IconComponent = item.icon;

								if (typeof IconComponent !== "function") {
									console.error("Invalid icon for:", item.name);
									return null;
								}

								return (
									<Link key={item.index} href={item.docsUrl} target="_blank">
										<Flex
											alignItems="center"
											gap={{ base: 3, md: 4 }}
											minH={{ base: "4rem", md: "4.5rem" }}
											px={{ base: 4, md: 5 }}
											py={{ base: 3, md: 4 }}
											borderWidth="1px"
											borderColor="whiteAlpha.200"
											transition="border-color 160ms ease, background-color 160ms ease"
											_hover={{ borderColor: "whiteAlpha.500", bg: "whiteAlpha.100" }}
										>
											<Box flexShrink={0} fontSize={{ base: "2rem", md: "2.5rem" }} lineHeight="1">
												<IconComponent />
											</Box>
											<Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.25" minW={0}>
												{item.name}
											</Text>
										</Flex>
									</Link>
								);
							})}
						</SimpleGrid>
					</Collapsible.Content>
				</Collapsible.Root>
			))}
		</Box>
	);
};
