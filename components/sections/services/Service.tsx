import { getIcon } from "@/components/constants/constants";
import React from "react";

interface ServiceProps {
  title: string;
  body: string;
  icon: string;
}

const Service = ({ title, body, icon }: ServiceProps) => {
  return (
    <div className="card leading-relaxed text-center mb-10 md:mb-5 rounded-md py-[70px] px-[25px]">
      <div className="flex justify-center items-center mb-8">
        <div className="box-border h-16 w-16 p-4 bg-accent">
          {getIcon(icon)}
        </div>
      </div>
      <h3 className="sub-text">{title}</h3>
      <p className="info-text">{body}</p>
    </div>
  );
};

export default Service;
