import React, { ReactNode } from "react";

interface ContactCardProps {
  value: string;
  name: string;
  icon: ReactNode;
}

const ContactCard = ({ value, name, icon }: ContactCardProps) => {
  return (
    <div className="flex flex-row justify-start md:justify-around items-center gap-4">
      <div className="flex justify-center items-center w-10 md:w-14  h-10 md:h-14 bg-accent rounded-full">
        {icon}
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p className="info-text">{value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
