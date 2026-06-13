"use client";

import { Box, Button, Field, Flex, Input, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { z } from "zod";
import { toaster } from "@/shared/components/ui/toaster";
import { CONFIG } from "../../../../portfolio.config";
import { contactSchema } from "../contact-schema";
import { ProgressMessageBar } from "./progress-message-bar";

type ContactFormData = z.infer<typeof contactSchema>;

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
const SEND_EMAIL_TIMEOUT_MS = 15_000;

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
	const [message, setMessage] = useState("");

	const letters = message.length;

	const sendEmailRequest = async (payload: ContactFormData & { token: string }) => {
		let res: Response;
		const controller = new AbortController();
		const timeout = window.setTimeout(() => controller.abort(), SEND_EMAIL_TIMEOUT_MS);

		try {
			res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
				signal: controller.signal,
			});
		} catch (err) {
			if (err instanceof DOMException && err.name === "AbortError") {
				throw new Error("Sending took too long. Please try again in a moment.");
			}

			throw new Error("Could not reach the email service. Please check your connection and try again.");
		} finally {
			window.clearTimeout(timeout);
		}

		const data: unknown = await res.json().catch(() => null);
		const responsePayload = data && typeof data === "object" ? (data as Record<string, unknown>) : {};

		if (!res.ok) {
			throw new Error(typeof responsePayload.error === "string" ? responsePayload.error : "Your message could not be sent. Please try again later.");
		}

		return responsePayload;
	};

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors({});

		if (!formRef.current) return;

		const formData = new FormData(formRef.current);

		const payload: ContactFormData = {
			name: String(formData.get("name") ?? ""),
			email: String(formData.get("email") ?? ""),
			message: String(formData.get("message") ?? ""),
		};

		const result = contactSchema.safeParse(payload);

		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors;
			setErrors({
				name: fieldErrors.name?.[0],
				email: fieldErrors.email?.[0],
				message: fieldErrors.message?.[0],
			});
			return;
		}

		if (!recaptchaSiteKey) {
			toaster.error({
				title: "Sending failed!",
				description: "Contact form verification is not configured.",
			});
			return;
		}

		const token = recaptchaRef.current?.getValue();
		if (!token) {
			toaster.error({
				title: "Verification required",
				description: "Please verify that you are not a robot.",
			});
			return;
		}

		setLoading(true);

		try {
			await sendEmailRequest({ ...result.data, token });
			toaster.success({
				title: "Message sent!",
				description: "Your message was successfully sent.",
			});

			formRef.current.reset();
			setMessage("");
			recaptchaRef.current?.reset();
		} catch (err: unknown) {
			const errorMessage = err instanceof Error ? err.message : "Your message could not be sent. Please try again later.";
			toaster.error({
				title: "Sending failed!",
				description: errorMessage,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<form ref={formRef} onSubmit={sendEmail}>
			<Flex flexDirection="column" gap={{ base: 3, md: 4 }} width="100%">
				<Field.Root invalid={Boolean(errors.name)}>
					<Input name="name" placeholder="Enter your name" borderColor="whiteAlpha.400" borderRadius={0} backgroundColor="whiteAlpha.100" />
					{errors.name && <Field.ErrorText>{errors.name}</Field.ErrorText>}
				</Field.Root>
				<Field.Root invalid={Boolean(errors.email)}>
					<Input name="email" type="email" placeholder="Enter your email" borderColor="whiteAlpha.400" borderRadius={0} backgroundColor="whiteAlpha.100" />
					{errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText>}
				</Field.Root>
				<Field.Root required invalid={Boolean(errors.message)} gap={2}>
					<Textarea
						autoresize
						placeholder="Your message ..."
						variant="outline"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						maxLength={CONFIG.MAX_LETTERS}
						name="message"
						borderColor="whiteAlpha.400"
						backgroundColor="whiteAlpha.100"
						borderRadius={0}
					/>
					<Field.HelperText as="div" width="100%">
						<ProgressMessageBar letters={letters} max={CONFIG.MAX_LETTERS} />
					</Field.HelperText>
					{errors.message && <Field.ErrorText>{errors.message}</Field.ErrorText>}
				</Field.Root>

				{recaptchaSiteKey ? (
					<Box maxW="100%" overflow="hidden">
						<ReCAPTCHA sitekey={recaptchaSiteKey} ref={recaptchaRef} />
					</Box>
				) : null}

				<Button type="submit" loading={loading} mt={1} borderColor="white" borderRadius={0} textAlign="center" width={{ base: "100%", sm: "auto" }}>
					Send
				</Button>
			</Flex>
		</form>
	);
};
