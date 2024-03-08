import React from "react";

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

interface SidebarProps {
  navs: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navs }) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        {navs.map((nav) => (
          <li key={nav.id}>
            <a>{nav.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
