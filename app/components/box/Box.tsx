import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  classes?: string;
}

const Box = ({ children, classes }: BoxProps) => {
  const style = `${classes} lg:max-w-7xl lg:w-full`;

  return <div className={style}>{children}</div>;
};

export default Box;
