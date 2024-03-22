import React from "react";
import { Email, Phone } from "@mui/icons-material";

const iconStyle = { color: "white", fontSize: { xs: 20, md: 30 } };

interface ContactCardProps {
  type: string;
  value: string;
  name: string;
}

const ContactCard = ({ type, value, name }: ContactCardProps) => {
  return (
    <div className="flex flex-row justify-start md:justify-around items-center gap-4">
      <div className="flex justify-center items-center w-10 md:w-14  h-10 md:h-14 bg-accent rounded-full">
        {type === "email" ? <Email sx={iconStyle} /> : <Phone sx={iconStyle} />}
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p className="info-text">{value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
