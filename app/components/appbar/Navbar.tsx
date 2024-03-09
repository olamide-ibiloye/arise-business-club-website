import React from "react";
import DropDownIcon from "./DropDownIcon";
import NavButton from "./NavButton";

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

const Navbar = ({ navs }: NavbarProps) => {
  return (
    <div className="flex-none hidden lg:block px-0 mx-0">
      <ul className="menu menu-horizontal px-0 mx-0">
        {/* Navbar menu content here */}
        {navs.map((nav) => {
          return nav.subNavs && nav.subNavLinks ? (
            <div key={nav.id} className="dropdown dropdown-hover ">
              <NavButton name={nav.name}>
                <DropDownIcon />
              </NavButton>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
