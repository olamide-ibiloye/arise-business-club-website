"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProp {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProp) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
