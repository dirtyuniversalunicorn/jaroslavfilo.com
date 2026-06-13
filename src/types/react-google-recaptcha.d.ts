declare module "react-google-recaptcha" {
	import type { Component } from "react";

	export type ReCAPTCHAProps = {
		sitekey: string;
		onChange?: (token: string | null) => void;
		onErrored?: () => void;
		onExpired?: () => void;
		size?: "compact" | "normal" | "invisible";
		theme?: "dark" | "light";
	};

	export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
		getValue(): string | null;
		reset(): void;
		execute(): void;
		executeAsync(): Promise<string | null>;
	}
}
