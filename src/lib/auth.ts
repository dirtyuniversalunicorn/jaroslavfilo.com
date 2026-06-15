import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

type AuthEnv = Pick<CloudflareEnv, "jaroslavfilo_db">;
type RequiredAuthEnvName = "ADMIN_GITHUB_USERNAME" | "BETTER_AUTH_SECRET" | "BETTER_AUTH_URL" | "GITHUB_CLIENT_ID" | "GITHUB_CLIENT_SECRET";

const getRequiredEnv = (name: RequiredAuthEnvName) => {
	const value = process.env[name];

	if (!value) {
		throw new Error(`${name} is required to initialize Better Auth.`);
	}

	return value;
};

export const createAuth = (env: AuthEnv) =>
	betterAuth({
		database: env.jaroslavfilo_db,
		secret: getRequiredEnv("BETTER_AUTH_SECRET"),
		baseURL: getRequiredEnv("BETTER_AUTH_URL"),
		user: {
			additionalFields: {
				role: {
					type: ["user", "admin"],
					required: false,
					defaultValue: "user",
					input: false,
				},
			},
		},
		socialProviders: {
			github: {
				clientId: getRequiredEnv("GITHUB_CLIENT_ID"),
				clientSecret: getRequiredEnv("GITHUB_CLIENT_SECRET"),
				mapProfileToUser: (profile) => ({
					role: profile.login.toLowerCase() === getRequiredEnv("ADMIN_GITHUB_USERNAME").trim().toLowerCase() ? "admin" : "user",
				}),
			},
		},
		plugins: [nextCookies()],
	});
