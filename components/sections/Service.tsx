import React, { ReactNode } from "react";

interface ServiceProps {
  title: string;
  body: string;
  icon: ReactNode;
}

const Service = ({ title, body, icon }: ServiceProps) => {
  return (
    <div className="text-lg leading-relaxed text-center">
      <div className="flex justify-center items-center mb-8">
        <div className="box-border h-16 w-16 p-4 bg-accent">{icon}</div>
      </div>
      <h3 className="mb-4 text-2xl lg:text-3xl leading-tight">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Service;
