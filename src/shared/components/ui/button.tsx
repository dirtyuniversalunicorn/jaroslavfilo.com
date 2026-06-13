import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";

export type ButtonProps = {
	buttonTitle: string | React.ReactNode;
	link?: string;
	variant?: ChakraButtonProps["variant"] | "transparent";
} & ChakraButtonProps;

export const Button = ({ buttonTitle, ...props }: ButtonProps) => {
	return (
		<ChakraButton textTransform="uppercase" fontWeight={400} {...props} borderRadius={0} paddingX={7}>
			{buttonTitle}
		</ChakraButton>
	);
};
