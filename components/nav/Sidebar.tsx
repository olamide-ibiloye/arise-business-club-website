"use client";
import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import Link from "next/link";

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
  const [open, setOpen] = useState(false);

  const toggleSubNav = (navId: string) => {
    setActiveNav(activeNav === navId ? null : navId);
    setOpen(!open);
  };

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 h-full bg-base-100">
        <div className="flex flex-col justify-between min-h-full">
          <div>
            {navs.map((nav) => (
              <li key={nav.id} className="py-2">
                <Link
                  className="flex items-center"
                  onClick={() => toggleSubNav(nav.id)}
                  href=""
                >
                  <div className="flex flex-1 font-semibold">{nav.name}</div>
                  <div className="flex">
                    {nav.subNavs && (
                      <ExpandMore
                        sx={{
                          transform:
                            activeNav === nav.id && open
                              ? "rotate(180deg)"
                              : undefined,
                        }}
                      />
                    )}
                  </div>
                </Link>
                {nav.subNavs && activeNav === nav.id && (
                  <ul>
                    {nav.subNavLinks &&
                      nav.subNavLinks.map((subNavItem) => (
                        <li
                          key={subNavItem.id}
                          className="py-2 pl-2 font-semibold"
                        >
                          <Link href="">{subNavItem.name}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="arise-button w-[200px]">Get Started</button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
