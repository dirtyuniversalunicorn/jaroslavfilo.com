import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { NavigationLinkProps } from "./navigation-types";

export const NavigationLink = ({ href, pageTitle, isCurrent, onClick }: NavigationLinkProps) => {
	return (
		<Link
			asChild
			onClick={onClick}
			aria-current={isCurrent ? "page" : undefined}
			color={isCurrent ? "fg" : "fg.muted"}
			fontSize="sm"
			fontWeight={isCurrent ? "600" : "400"}
			letterSpacing="1.61px"
			px="3"
			py="2"
			rounded="md"
			textDecoration="none"
			transition="background-color 160ms ease, color 160ms ease"
			_hover={{
				bg: "bg.subtle",
				color: "fg",
				textDecoration: "none",
			}}
		>
			<NextLink href={href}>{pageTitle.toLocaleUpperCase()}</NextLink>
		</Link>
	);
};
