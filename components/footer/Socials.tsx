import React from "react";
import { socials } from "../constants/constants";

const Socials = () => {
  return (
    <div className="flex items-center gap-5 mt-5">
      {socials.map((social) => (
        <a key={social.name} className="icon" href={social.url}>
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
