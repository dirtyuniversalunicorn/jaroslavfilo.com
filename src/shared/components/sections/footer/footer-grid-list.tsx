import { Box, List } from "@chakra-ui/react";
import Link from "next/link";

export type FooterGridItemProps = {
	page: string;
	url: string;
};

export type FooteGridListProps = {
	footerPages: FooterGridItemProps[];
};

export const FooterGridList = ({ footerPages }: FooteGridListProps) => {
	return (
		<Box textAlign={{ base: "center", md: "left" }} textTransform="uppercase">
			<List.Root as="ul" listStyleType="none" display="flex" flexDirection="column" gap={{ base: 2, md: 4 }}>
				{footerPages.map((footerPage) => (
					<List.Item key={footerPage.page}>
						<Link href={`/${footerPage.url}`}>{footerPage.page}</Link>
					</List.Item>
				))}
			</List.Root>
		</Box>
	);
};
