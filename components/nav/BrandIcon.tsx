"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface BrandIconProps {
  size: number;
  style?: string;
}

const BrandIcon = ({ size = 70, style = "" }: BrandIconProps) => {
  const { resolvedTheme } = useTheme();
  const classes = `flex-1 px-0 mx-0 ${style}`;
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/logo.png";
      break;
    case "dark":
      src = "/abc.png";
      break;
    default:
      src = "/logo.png";
      break;
  }

  return (
    <Link href="/" className={classes}>
      <Image
        src={src}
        alt="Arise Business Club Logo"
        width={size}
        height={size}
        placeholder="blur"
        blurDataURL="/logo.png"
      />
    </Link>
  );
};

export default BrandIcon;
