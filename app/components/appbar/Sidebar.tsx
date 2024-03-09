"use client";
import React, { useState } from "react";

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

const Sidebar: React.FC<{ navs: NavItem[] }> = ({ navs }) => {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const toggleSubNav = (navId: string) => {
    setActiveNav(activeNav === navId ? null : navId);
  };

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 min-h-full bg-base-100">
        {navs.map((nav) => (
          <li key={nav.id} className="py-2">
            <a onClick={() => toggleSubNav(nav.id)}>{nav.name}</a>
            {nav.subNavs && activeNav === nav.id && (
              <ul>
                {nav.subNavLinks &&
                  nav.subNavLinks.map((subNavItem) => (
                    <li key={subNavItem.id} className="py-2 pl-4">
                      <a>{subNavItem.name}</a>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
