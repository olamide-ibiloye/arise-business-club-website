import React from "react";
import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";
import NavElements from "./NavElements";
import BrandIcon from "./BrandIcon";
import { navs } from "../constants/constants";

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

const NavBar = () => {
  return (
    <header className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-0 mx-0">
          <BrandIcon size={80} />

          <NavElements navs={navs} />

          <MenuButton />
        </div>
      </div>
      <Sidebar navs={navs} />
    </header>
  );
};

export default NavBar;
