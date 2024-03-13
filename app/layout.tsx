import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Meta from "./components/seo/Meta";
import Providers from "./components/providers/Providers";
import AppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";

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
    <html lang="en" data-theme="lofi" suppressHydrationWarning>
      <Meta />
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-between px-5">
            <AppBar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
