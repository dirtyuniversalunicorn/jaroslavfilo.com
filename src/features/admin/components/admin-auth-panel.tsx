"use client";

import { Avatar, Badge, Box, Heading, HStack, Separator, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { signIn, signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/shared/components/ui/button";

type SessionUserWithRole = {
	email?: string | null;
	image?: string | null;
	name?: string | null;
	role?: "user" | "admin";
};

const getUserRole = (user?: SessionUserWithRole | null) => user?.role ?? "user";

type AdminAuthPanelProps = {
	isAdminSession: boolean;
};

export const AdminAuthPanel = ({ isAdminSession }: AdminAuthPanelProps) => {
	const { data: session, isPending } = useSession();
	const router = useRouter();
	const [isSigningIn, setIsSigningIn] = useState(false);
	const [isSigningOut, setIsSigningOut] = useState(false);
	const user = session?.user as SessionUserWithRole | undefined;
	const role = getUserRole(user);
	const isAdmin = role === "admin";

	useEffect(() => {
		if (!isPending && session?.user && !isAdmin) {
			router.replace("/");
		}
	}, [isAdmin, isPending, router, session?.user]);

	const handleGithubSignIn = async () => {
		setIsSigningIn(true);
		await signIn.social({
			provider: "github",
			callbackURL: "/admin",
		});
		setIsSigningIn(false);
	};

	const handleSignOut = async () => {
		setIsSigningOut(true);
		await signOut();
		setIsSigningOut(false);
	};

	return (
		<Box
			borderWidth="1px"
			borderColor="whiteAlpha.200"
			bg="rgba(10, 12, 16, 0.82)"
			boxShadow="0 24px 80px rgba(0, 0, 0, 0.38)"
			maxW="30rem"
			p={{ base: 6, md: 8 }}
			width="100%"
		>
			<Stack gap={{ base: 6, md: 8 }}>
				<Stack gap={3}>
					<Badge alignSelf="start" colorPalette={isAdminSession ? "green" : "gray"} variant="outline" borderRadius={0}>
						{isAdminSession ? "Protected session" : "Admin access"}
					</Badge>

					<Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} fontWeight={400} lineHeight={1.05}>
						{isAdminSession ? "Welcome back" : "Sign in to continue"}
					</Heading>

					<Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
						{isAdminSession ? "Your GitHub account has admin access for this portfolio." : "Use your GitHub account to access the protected admin area."}
					</Text>
				</Stack>

				<Separator borderColor="whiteAlpha.200" />

				{isPending ? (
					<Text color="whiteAlpha.700">Checking your session...</Text>
				) : session?.user && isAdmin ? (
					<Stack gap={5}>
						<HStack gap={4} align="center">
							<Avatar.Root size="lg">
								<Avatar.Fallback name={user?.name ?? "Admin"} />
								<Avatar.Image src={user?.image ?? undefined} />
							</Avatar.Root>

							<Stack gap={1} minW={0}>
								<Text fontSize="lg" fontWeight={500}>
									{user?.name ?? "Signed in user"}
								</Text>
								<Text color="whiteAlpha.700" overflowWrap="anywhere">
									{user?.email}
								</Text>
							</Stack>
						</HStack>

						<Box borderWidth="1px" borderColor="green.400" p={4}>
							<Text color="green.200" fontWeight={500}>
								You are logged in as admin.
							</Text>
						</Box>

						<Button alignSelf="start" buttonTitle="Sign out" loading={isSigningOut} onClick={handleSignOut} variant="outline" />
					</Stack>
				) : (
					<Stack gap={5}>
						<Box borderWidth="1px" borderColor="whiteAlpha.200" p={4}>
							<Text color="whiteAlpha.700" fontSize="sm">
								This area is reserved for the owner account. Other GitHub accounts are redirected to the homepage.
							</Text>
						</Box>

						<Button
							width="100%"
							buttonTitle={
								<HStack gap={2} justify="center">
									<FaGithub aria-hidden />
									<Text as="span">Continue with GitHub</Text>
								</HStack>
							}
							loading={isSigningIn}
							onClick={handleGithubSignIn}
							variant="outline"
						/>
					</Stack>
				)}
			</Stack>
		</Box>
	);
};
