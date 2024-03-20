"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface BrandIconProps {
  size: number;
  style?: string;
}

const BrandIcon = ({ size = 70, style = "" }: BrandIconProps) => {
  const { resolvedTheme } = useTheme();
  let src;

  const classes = `flex-1 px-0 mx-0 ${style}`;

  switch (resolvedTheme) {
    case "light":
      src = "/logo.png";
      break;
    case "dark":
      src = "/abc.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    <a href="/" className={classes}>
      <Image
        src="/logo.png"
        alt="Arise Business Club Logo"
        width={size}
        height={size}
        placeholder="blur"
        blurDataURL="/logo.png"
      />
    </a>
  );
};

export default BrandIcon;
