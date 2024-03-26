"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";
import NavElements from "./NavElements";
import BrandIcon from "./BrandIcon";
import { navs } from "../constants/constants";

const NavBar = () => {
  const [inFocus, setInFocus] = useState(false);

  const navbarClasses = `z-50 top-0 sticky bg-base-200 w-full flex justify-center items-center h-[70px] border-b-2 ${inFocus ? "border-accent" : "border-base-200"}`;

  const handleHover = () => {
    setInFocus(true);
  };

  const handleExit = () => {
    setInFocus(false);
  };

  return (
    <div className={navbarClasses}>
      <header className="drawer lg:max-w-7xl lg:w-full">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar px-0 mx-0">
            <BrandIcon size={80} />

            <NavElements
              navs={navs}
              handleHover={handleHover}
              handleExit={handleExit}
              inFocus={inFocus}
            />

            <MenuButton />
          </div>
        </div>
        <Sidebar navs={navs} />
      </header>
    </div>
  );
};

export default NavBar;
