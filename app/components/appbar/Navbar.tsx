"use client";
import React, { useState } from "react";
import NavButton from "./NavButton";
import { ExpandMore } from "@mui/icons-material";

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

interface NavbarProps {
  navs: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navs }) => {
  const [inFocus, setInFocus] = useState(false);

  const handleHover = () => {
    setInFocus(true);
  };

  const handleExit = () => {
    setInFocus(false);
  };

  return (
    <div className="flex-none hidden lg:block px-0 mx-0">
      <ul className="menu menu-horizontal px-0 mx-0">
        {/* Navbar menu content here */}
        {navs.map((nav) => (
          <React.Fragment key={nav.id}>
            {nav.subNavs && nav.subNavLinks ? (
              <div className="dropdown dropdown-hover">
                <NavButton
                  name={nav.name}
                  handleHover={handleHover}
                  handleExit={handleExit}
                >
                  <ExpandMore
                    sx={{ transform: inFocus ? "rotate(180deg)" : undefined }}
                  />
                </NavButton>
                <ul
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  onMouseOver={handleHover}
                  onMouseLeave={handleExit}
                >
                  {nav.subNavLinks.map((subNav) => (
                    <li key={subNav.id}>
                      <a>{subNav.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavButton key={nav.id} name={nav.name} />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
