import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { navigation } from "@/shared/components/navigation/navigation-config";
import { NavigationShell } from "@/shared/components/navigation/navigation-shell";
import { Footer } from "@/shared/components/sections/footer";
import { Provider } from "@/shared/components/ui/provider";
import { Toaster } from "@/shared/components/ui/toaster";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jaroslav Filo",
	description: "Welcome to my portfolio page!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark" lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Provider>
					<NavigationShell navigation={navigation} />
					{children}
					<Footer />
					<Toaster />
				</Provider>
			</body>
		</html>
	);
}
