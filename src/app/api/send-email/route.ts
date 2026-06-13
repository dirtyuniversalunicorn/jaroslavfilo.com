import { Resend } from "resend";
import { contactSchema } from "@/features/contact-me/contact-schema";
import { EmailTemplate } from "@/features/contact-me/email-template";

const getErrorMessage = (error: unknown, fallback: string) => {
	if (!error) return fallback;
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	if (typeof error === "object" && "message" in error && typeof error.message === "string") return error.message;
	return fallback;
};

const withTimeout = async <T>(operation: (signal: AbortSignal) => Promise<T>, timeoutMs: number) => {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), timeoutMs);

	try {
		return await operation(controller.signal);
	} finally {
		clearTimeout(timeout);
	}
};

export async function POST(req: Request) {
	try {
		const apiKey = process.env.RESEND_API_KEY;
		const secretKey = process.env.RECAPTCHA_SECRET_KEY;

		if (!apiKey) return Response.json({ error: "Email service is not configured." }, { status: 500 });
		if (!secretKey) return Response.json({ error: "Verification service is not configured." }, { status: 500 });

		const resend = new Resend(apiKey);

		const body: unknown = await req.json().catch(() => null);
		const payload = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
		const token = typeof payload.token === "string" ? payload.token : "";
		const contactResult = contactSchema.safeParse(payload);

		if (!contactResult.success || !token) {
			return Response.json({ error: "Please check the form and try again." }, { status: 400 });
		}

		const { name, email, message } = contactResult.data;

		const recaptchaRes = await withTimeout(
			(signal) =>
				fetch("https://www.google.com/recaptcha/api/siteverify", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						secret: secretKey,
						response: token,
					}),
					signal,
				}),
			8_000,
		);

		if (!recaptchaRes.ok) {
			return Response.json({ error: "Could not verify reCAPTCHA. Please try again." }, { status: 502 });
		}

		const recaptchaData: unknown = await recaptchaRes.json().catch(() => null);
		const recaptchaPayload = recaptchaData && typeof recaptchaData === "object" ? (recaptchaData as Record<string, unknown>) : {};

		if (recaptchaPayload.success !== true) {
			return Response.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 403 });
		}

		const { data, error } = await withTimeout(
			() =>
				resend.emails.send({
					from: "Acme <onboarding@resend.dev>",
					to: ["jaroslavfilo95@gmail.com"],
					subject: "Message from Contact Form",
					replyTo: email,
					react: EmailTemplate({ name, message, email }),
				}),
			8_000,
		);

		if (error) {
			return Response.json({ error: getErrorMessage(error, "Email provider failed to send the message.") }, { status: 500 });
		}

		return Response.json({ success: true, data });
	} catch (err) {
		console.error(err);
		return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
	}
}
