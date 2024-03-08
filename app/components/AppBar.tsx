import React from "react";
import Image from "next/image";

interface NavItem {
  id: string;
  name: string;
  subNavs: boolean;
  navs?: NavItem[];
}

const navs: NavItem[] = [
  { id: "about-us", name: "About Us", subNavs: false },
  {
    id: "services",
    name: "Services",
    subNavs: true,
    navs: [
      {
        id: "financial-education",
        name: "Financial Education",
        subNavs: false,
      },
      { id: "networking-events", name: "Networking Events", subNavs: false },
      {
        id: "investment-opportunities",
        name: "Investment Opportunities",
        subNavs: false,
      },
    ],
  },
  { id: "testimonials", name: "Testimonials", subNavs: false },
  { id: "news", name: "News", subNavs: false },
  { id: "join-now", name: "Join now", subNavs: false },
];

const AppBar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-0 mx-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-0 mx-0">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo.png"
              alt="Next.js Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="flex-none hidden lg:block px-0 mx-0">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navs.map((nav) => (
                <li key={nav.id}>
                  <a>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default AppBar;
