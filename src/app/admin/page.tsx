import { Stack } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { AdminAuthPanel } from "@/features/admin/components/admin-auth-panel";
import { getAuthSession, hasAdminRole } from "@/lib/auth-session";
import { Section } from "@/shared/components/ui/section";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
	const session = await getAuthSession();

	if (!session) {
		redirect("/login");
	}

	if (!hasAdminRole(session)) {
		redirect("/");
	}

	return (
		<Section as="main" py={{ base: 24, md: 28, lg: 32 }}>
			<Stack align="center" justify="center" minH="55vh">
				<AdminAuthPanel isAdminSession />
			</Stack>
		</Section>
	);
}
