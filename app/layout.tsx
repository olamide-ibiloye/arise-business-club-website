import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Meta from "./components/seo/Meta";
import Providers from "./components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arise Business Club",
  description: "Welcome to Arise Business Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <Meta />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
