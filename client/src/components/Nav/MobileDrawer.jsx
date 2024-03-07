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
    <nav
      className={`mobileMenu ${
        isOpen ? "open" : ""
      } bg-dark-gray w-container rounded-custom h-4/6 opacity-90 z-index-50`}
    >
      <div className="closeButtonContainer bg flex flex-row justify-between mb-7">
        <div className="w-[45%] h-[50%] flex flex-row justify-between items-center pl-[7px] hover:bg-black p-4 hover:bg-opacity-70">
          <Link to="/">
            <img src="/Text-Logo-Desktop.svg" alt="FlixVibe" />
          </Link>
        </div>
        <div className=" h-[50%]  items-center pr-[7px]">
          <img src={closeMenu} alt="Close Menu" onClick={onClose} />
        </div>
      </div>
      <div className="flex flex-col gap-5 pl-[7px] w-full h-[3rem]">
        {navItems.map((item) => {
          return (
            <Link
              to={item.path}
              key={item.id}
              className="text-black text-lg text-left  font-bold p-1 rounded-full no-underline hover:text-white hover:bg-black hover:bg-opacity-70 w-full focus:bg-black focus:text-white"
            >
              {item.content}
            </Link>
          );
        })}
        <Link
          to="/login"
          className="text-black text-md no-underline mx-globalPadding pb-[31px] flex flex-col items-center"
        >
          <div className="flex flex-row w-[91%] h-[61px] bg-black rounded-custom mb-[31px]  align-center items-center px-globalPadding justify-between">
            <Link to="/login">
              <p className="no-underline text-white text-sm">Login/Sign Up</p>
            </Link>

            <Link to="/login">
              <img src={login} alt="Login" className="h-8 w-8" />
            </Link>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MobileDrawer;
