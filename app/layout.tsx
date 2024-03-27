"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import { Toaster } from "@/components/ui";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="mcjs">
          {`
          !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/8e68430ecf8fa289502db0874/83c24030351ca0fcda5449589.js")
          `}
        </Script>
      </head>
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
