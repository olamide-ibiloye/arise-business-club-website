import React from "react";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BrandIcon from "./BrandIcon";

interface SubNavItem {
  id: string;
  name: string;
}

interface NavItem {
  id: string;
  name: string;
  subNavs: boolean;
  subNavLinks?: SubNavItem[];
}

const navs: NavItem[] = [
  { id: "about-us", name: "About Us", subNavs: false },
  {
    id: "services",
    name: "Services",
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
  { id: "testimonials", name: "Testimonials", subNavs: false },
  { id: "news", name: "News", subNavs: false },
  { id: "join-now", name: "Join now", subNavs: false },
];

const AppBar = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-0 mx-0">
          <BrandIcon />

          <Navbar navs={navs} />

          <MenuIcon />
        </div>
      </div>
      <Sidebar navs={navs} />
    </div>
  );
};

export default AppBar;
