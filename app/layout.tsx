import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Providers from "../components/providers/Providers";
import Footer from "../components/footer/Footer";
import { Theme } from "@radix-ui/themes";
import NavBar from "../components/nav/NavBar";

export const metadata: Metadata = {
  title: "Arise Business Club",
  description: "Welcome to Arise Business Club",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Providers> */}
        <Theme>
          <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar />
            {children}
            <Footer />
          </main>
        </Theme>
        {/* </Providers> */}
      </body>
    </html>
  );
}
