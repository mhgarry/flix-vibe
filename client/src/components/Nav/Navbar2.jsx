// Navbar.js
import React from "react";
import NavItem from "./NavItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, path: "/your-spaces", content: "YOUR SPACES", isButton: false },
    { id: 2, path: "/favorites", content: "FAVORITES", isButton: false },
    {
      id: 3,
      path: "#",
      content: "FILLER",
      isButton: false,
    },
    {
      id: 4,
      path: "#",
      content: "FILLER",
      isButton: false,
    },
  ];
  const withIcon = [
    { id: 1, path: "/settings", content: "SETTINGS", isSettings: true },
    { id: 2, path: "/login", content: "LOGIN", isLogin: true },
  ];

  return (
    <nav className="flex flex-row items-center justify-center">
      <div className="flex flex-row justify-between w-container m-w-container align-center px-21 ">
        <div>
          <Link to="/">
            <img
              src="flix-vibe-logo.png"
              alt="Flix Vibes Logo"
              className="w-logo"
            />
          </Link>
        </div>
        <div className="justify-between flex-row flex w-nav">
          <ul className="flex flex-row text-medium text-white list-none w-[660px] justify-between">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
          <ul className="flex flex-row text-medium text-white list-none justify-between w-[203px] text-center">
            {withIcon.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
