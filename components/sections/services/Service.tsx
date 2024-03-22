import React, { ReactNode } from "react";

interface ServiceProps {
  title: string;
  body: string;
  icon: ReactNode;
}

const Service = ({ title, body, icon }: ServiceProps) => {
  return (
    <div className="leading-relaxed text-center mb-10 md:mb-5 rounded-md py-[70px] px-[25px] shadow-3xl">
      <div className="flex justify-center items-center mb-8">
        <div className="box-border h-16 w-16 p-4 bg-accent">{icon}</div>
      </div>
      <h3 className="sub-text">{title}</h3>
      <p className="info-text">{body}</p>
    </div>
  );
};

export default Service;
