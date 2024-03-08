import React from "react";
import Image from "next/image";

const BrandIcon = () => {
  return (
    <div className="flex-1 px-0 mx-0">
      <Image
        src="/logo.png"
        alt="Next.js Logo"
        width={110}
        height={110}
        priority
      />
    </div>
  );
};

export default BrandIcon;
