import { Flex, Link, Text, Wrap, type WrapProps } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// Type for a single social item
export type SocialItem = {
	index: number;
	name: string;
	url: string;
	pictureUrl: string;
};

// Props for Socials component
export type SocialsProps = {
	socials: SocialItem[];
	showTitle?: boolean;
} & WrapProps;

// Props for AboutSection (can reuse SocialItem type)
export type AboutSectionProps = {
	socials: SocialItem[];
};

export const Socials = ({ socials, showTitle, ...props }: SocialsProps) => {
	const getIcon = (name: string) => {
		const lowerName = name.toLowerCase();

		if (lowerName === "github") {
			return <FaGithub size={35} />;
		} else if (lowerName === "facebook") {
			return <FaFacebook size={35} />;
		} else if (lowerName === "linkedin") {
			return <FaLinkedin size={35} />;
		} else {
			return null;
		}
	};

	return (
		<Wrap order={{ base: 1, md: 2 }} mx={{ base: "auto", md: 0 }} {...props}>
			{socials.map((social) => (
				<Flex key={social.index} alignItems="center" gap={2}>
					<Link href={social.url} target="_blank">
						{getIcon(social.name)}
						{showTitle && <Text display={{ base: "none", md: "block" }}>{social.name}</Text>}
					</Link>
				</Flex>
			))}
		</Wrap>
	);
};
