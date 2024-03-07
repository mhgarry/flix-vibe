import closeMenu from "../../assets/Flix_Icons/Close-Mobile-Menu.svg";
import { Link } from "react-router-dom";
import login from "../../assets/Flix_Icons/Login-Mobile.svg";
import textLogo from "/Flix-Text-Logo-Mobile-Black.svg";
import { useState } from "react";

const MobileDrawer = ({ isOpen, onClose }) => {
  const navItems = [
    {
      id: 1,
      path: "/your-spaces",
      content: "YOUR SPACES",
    },
    {
      id: 2,
      path: "/favorites",
      content: "FAVORITES",
    },
  ];

  return (
    <nav className={`mobileMenu ${isOpen ? "open" : ""} bg-light-gray`}>
      <div className="closeButtonContainer bg">
        <img src={closeMenu} alt="Close Menu" onClick={onClose} />
      </div>
      <div className="flex flex-col gap-[31px] pl-[13px]">
        {navItems.map((item) => {
          return (
            <Link
              to={item.path}
              key={item.id}
              className="text-black text-xmd no-underline"
            >
              {item.content}
            </Link>
          );
        })}
      </div>
      <Link
        to="/login"
        className="text-black text-md no-underline mx-globalPadding pb-[31px] flex flex-col items-center"
      >
        <div className="flex flex-row w-[91%] h-[61px] bg-black rounded-custom mt-[31px] mb-[31px]  align-center items-center px-globalPadding justify-between">
          <Link to="/login">
            <p className="no-underline text-white text-sm">Login/Sign Up</p>
          </Link>

          <Link to="/login">
            <img src={login} alt="Login" className="h-8 w-8" />
          </Link>
        </div>
      </Link>
      <div className="flex flex-row justify-end items-center pr-[7px] pb-[7px]">
        <img src={textLogo} alt="FlixVibe" />
      </div>
    </nav>
  );
};

export default MobileDrawer;
