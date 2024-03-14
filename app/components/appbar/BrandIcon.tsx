"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const BrandIcon = ({ size = 100 }) => {
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
    <div className="flex-1 px-0 mx-0" style={{ height: 70, width: 70 }}>
      <Image
        src={src}
        alt="Arise Business Club Logo"
        width={size}
        height={size}
        priority
      />
    </div>
  );
};

export default BrandIcon;
