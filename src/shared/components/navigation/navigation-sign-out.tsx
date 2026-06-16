"use client";

import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { signOut, useSession } from "@/lib/auth-client";

type NavigationSignOutProps = {
	onSignOut?: () => void;
};

export const NavigationSignOut = ({ onSignOut }: NavigationSignOutProps) => {
	const { data: session, isPending } = useSession();
	const [isSigningOut, setIsSigningOut] = useState(false);

	if (isPending || !session?.user) {
		return null;
	}

	const handleSignOut = async () => {
		setIsSigningOut(true);
		await signOut();
		setIsSigningOut(false);
		onSignOut?.();
	};

	return (
		<IconButton
			aria-label="Sign out"
			color="red.300"
			loading={isSigningOut}
			onClick={handleSignOut}
			size="sm"
			variant="ghost"
			_hover={{ bg: "red.950", color: "red.200" }}
		>
			<LuLogOut />
		</IconButton>
	);
};
