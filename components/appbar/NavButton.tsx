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
      className="btn m-1 bg-transparent border-transparent shadow-none hover:shadow"
      onMouseOver={handleHover}
      onMouseLeave={handleExit}
    >
      <span>{name}</span> <span>{children}</span>
    </div>
  );
};

export default NavButton;
