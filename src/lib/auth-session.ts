import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { headers } from "next/headers";
import { createAuth } from "@/lib/auth";

type AuthRole = "user" | "admin";

type SessionWithRole = {
	user?: {
		role?: AuthRole | null;
	};
} | null;

export const getAuthSession = async () => {
	const { env } = getCloudflareContext();

	return createAuth(env).api.getSession({
		headers: await headers(),
	});
};

const getAuthRole = (session: SessionWithRole): AuthRole => session?.user?.role ?? "user";

export const hasAdminRole = (session: SessionWithRole) => getAuthRole(session) === "admin";
