import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout, Nav } from '@/lib/components';
import "@/lib/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NJImages",
	description: "Simple app for sharing images",
};

export default async function RootLayout(
	{ children }: Readonly<{ children: React.ReactNode }>
) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				<Layout>
					{children}
				</Layout>
			</body>
		</html>
	);
}
