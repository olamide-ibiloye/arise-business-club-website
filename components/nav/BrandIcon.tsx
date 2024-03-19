"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const BrandIcon = ({ size = 70 }) => {
  const { resolvedTheme } = useTheme();
  let src;

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
    <a href="/" className="flex-1 px-0 mx-0">
      <Image
        src="/logo.png"
        alt="Arise Business Club Logo"
        width={size}
        height={size}
        priority
      />
    </a>
  );
};

export default BrandIcon;
