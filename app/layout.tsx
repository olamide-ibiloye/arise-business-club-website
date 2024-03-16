import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Providers from "../components/providers/Providers";
import AppBar from "../components/appbar/AppBar";
import Footer from "../components/footer/Footer";

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
