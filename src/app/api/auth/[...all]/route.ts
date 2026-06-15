import { getCloudflareContext } from "@opennextjs/cloudflare";
import { toNextJsHandler } from "better-auth/next-js";
import { createAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

const handler = async (request: Request) => {
	const { env } = getCloudflareContext();

	return createAuth(env).handler(request);
};

export const { GET, POST, PATCH, PUT, DELETE } = toNextJsHandler(handler);
