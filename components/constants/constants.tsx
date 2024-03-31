import React from "react";
import {
  CurrencyExchange,
  Hub,
  CandlestickChart,
  LinkedIn,
  Instagram,
  Facebook,
  Email,
  Phone,
} from "@mui/icons-material";

const iconStyle = { color: "white", fontSize: { xs: 15, md: 20 } };

const contactIconStyle = { color: "white", fontSize: { xs: 20, md: 30 } };

export const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case "Financial Education":
      icon = <CurrencyExchange className="icon-class" />;
      break;
    case "Networking Events":
      icon = <Hub className="icon-class" />;
      break;
    case "Investment Opportunities":
      icon = <CandlestickChart className="icon-class" />;
      break;
    case "Email":
      icon = <Email sx={contactIconStyle} />;
      break;
    case "Phone":
      icon = <Phone sx={contactIconStyle} />;
      break;
    case "LinkedIn":
      icon = <LinkedIn sx={iconStyle} />;
      break;
    case "Instagram":
      icon = <Instagram sx={iconStyle} />;
      break;
    case "Facebook":
      icon = <Facebook sx={iconStyle} />;
      break;

    default:
      icon = <CurrencyExchange className="icon-class" />;
      break;
  }

  return icon;
};

export interface SubNavItem {
  id: string;
  name: string;
}

export interface NavItem {
  id: string;
  name: string;
  subNavs: boolean;
  subNavLinks?: SubNavItem[];
}

export const navs: NavItem[] = [
  { id: "about-us", name: "About Us", subNavs: false },
  {
    id: "our-services",
    name: "Our Services",
    subNavs: true,
    subNavLinks: [
      {
        id: "financial-education",
        name: "Financial Education",
      },
      { id: "networking-events", name: "Networking Events" },
      {
        id: "investment-opportunities",
        name: "Investment Opportunities",
      },
    ],
  },
  // { id: "testimonials", name: "Testimonials", subNavs: false },
  { id: "news", name: "News", subNavs: false },
];

export const disclaimerMessage =
  "By submitting this form, you agree to our data storage terms. Your personal information will be stored securely and used solely for the purpose of communication.";

export const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={iconStyle} />,
    url: "",
  },

  {
    name: "Instagram",
    icon: <Instagram sx={iconStyle} />,
    url: "https://www.instagram.com/arisebusinessclub?igsh=MTJhMjd1NmRuOHQ2Mw==",
  },
  {
    name: "Facebook",
    icon: <Facebook sx={iconStyle} />,
    url: "https://m.facebook.com/groups/384520050968771/",
  },
];
