"use client";
import React, { useEffect, useState } from "react";
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

  const [src, setSrc] = useState("/logo.png");

  useEffect(() => {
    resolvedTheme === "light" ? setSrc("/logo.png") : setSrc("/abc.png");
  }, [resolvedTheme]);

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
