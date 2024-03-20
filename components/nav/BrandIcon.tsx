"use client";
import React from "react";
import Image from "next/image";

interface BrandIconProps {
  size: number;
  style?: string;
}

const BrandIcon = ({ size = 70, style = "" }: BrandIconProps) => {
  const classes = `flex-1 px-0 mx-0 ${style}`;

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
