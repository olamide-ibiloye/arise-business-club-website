"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import { Toaster } from "@/components/ui";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider enableSystem={false}>
          <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar />
            {children}
            <Footer />
          </main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
