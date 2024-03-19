import React from "react";
import { LinkedIn, Instagram, Twitter } from "@mui/icons-material";

const iconStyle = { color: "white", fontSize: { xs: 15, md: 20 } };

const Socials = () => {
  return (
    <div className="flex items-center gap-5 mt-5">
      <div className="icon">
        <LinkedIn sx={iconStyle} />
      </div>

      <div className="icon">
        <Twitter sx={iconStyle} />
      </div>

      <div className="icon">
        <Instagram sx={iconStyle} />
      </div>
    </div>
  );
};

export default Socials;
