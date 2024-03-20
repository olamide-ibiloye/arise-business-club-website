import React, { ReactNode, MouseEvent } from "react";

interface NavButtonProps {
  name: string;
  children?: ReactNode;
  handleHover?: (event: MouseEvent<HTMLDivElement>) => void;
  handleExit?: (event: MouseEvent<HTMLDivElement>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  name,
  children,
  handleHover,
  handleExit,
}) => {
  return (
    <div
      className="mx-2 p-3 cursor-pointer font-semibold bg-transparent hover:bg-base-300"
      onMouseOver={handleHover}
      onMouseLeave={handleExit}
    >
      <span>{name}</span> <span>{children}</span>
    </div>
  );
};

export default NavButton;
