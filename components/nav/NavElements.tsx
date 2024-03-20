import React from "react";
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

interface NavElementsProps {
  navs: NavItem[];
  handleHover: () => void;
  handleExit: () => void;
  inFocus: boolean;
}

const NavElements: React.FC<NavElementsProps> = ({
  navs,
  handleHover,
  handleExit,
  inFocus,
}) => {
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
                  className="dropdown-content z-[1] menu px-2 pt-4 pb-2 bg-base-200 w-52"
                  onMouseOver={handleHover}
                  onMouseLeave={handleExit}
                >
                  {nav.subNavLinks.map((subNav) => (
                    <NavButton key={subNav.id} name={subNav.name} />
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

export default NavElements;
