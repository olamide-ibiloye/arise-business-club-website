import Link from "next/link";
import React from "react";

interface NavItemProps {
  name: string;
}

const NavItem = ({ name }: NavItemProps) => {
  return (
    <Link
      href="https://nextjs.org/"
      className="underline hover:text-success duration-200 transition-colors pl-10"
    >
      {name}
    </Link>
  );
};

export default NavItem;
