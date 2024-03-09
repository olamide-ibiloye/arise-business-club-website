import React, { ReactNode } from "react";

interface NavButtonProps {
  name: string;
  children?: ReactNode;
}

const NavButton = ({ name, children }: NavButtonProps) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className="btn m-1 bg-transparent border-transparent shadow-none hover:shadow"
    >
      {name}
      {children}
    </div>
  );
};

export default NavButton;
