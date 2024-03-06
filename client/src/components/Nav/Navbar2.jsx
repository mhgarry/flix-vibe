import NavItem from "./NavItems";
import { Link } from "react-router-dom";
import MenuOpen from "../../assets/Flix_Icons/MenuOpen.svg";
import { useState } from "react";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = window.innerWidth <= 1024;
  console.log(isMobile);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
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
    {
      id: 3,
      path: "/filler",
      content: "FILLER",
    },
    {
      id: 4,
      path: "/filler",
      content: "FILLER",
    },
  ];
  const withIcon = [
    {
      id: 1,
      path: "/settings",
      content: "SETTINGS",
      isSettings: true,
    },
    {
      id: 2,
      path: "/login",
      content: "LOGIN",
      isLogin: true,
    },
  ];

  return (
    <nav className="flex flex-row items-center justify-center max-w-full w-full">
      <div className="flex flex-row justify-between lg:w-full lg:max-w-full align-center px-21 w-tabletContainer">
        {isMobile ? (
          <div className="flex flex-row justify-between lg:pr-globalPadding pt-globalPadding lg:max-w-container w-tabletContainer ">
            <div className="w-logo ">
              <Link to="/">
                <img
                  src="flix-vibe-logo.png"
                  alt="FlixVibe logo"
                  className="w-logo h-logo"
                />
              </Link>
            </div>
            <div className="lg:hidden flex flex-row justify-between w-[305px]">
              <div className="flex flex-row  ">
                <ul className="flex flex-row text-small text-white list-none w-[100px] text-center ">
                  {withIcon.map((item) => (
                    <NavItem
                      key={item.id}
                      path={item.path}
                      content={item.content}
                      isSettings={item.isSettings}
                      isLogin={item.isLogin}
                    />
                  ))}
                </ul>
              </div>
              <div className="lg:hidden">
                <img
                  src={MenuOpen}
                  alt="Close Menu"
                  className="bg-transparent"
                  onClick={handleDrawer}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between w-container">
            <div>
              <Link to="/">
                <img
                  src="flix-vibe-logo.png"
                  alt="FlixVibe logo"
                  className="w-logo bg-black"
                />
              </Link>
            </div>
          </div>
        )}
        <div className="justify-between flex flex-row lg:w-nav">
          <ul className="flex-row text-medium text-white list-none w-[660px] justify-between hidden lg:flex">
            {navItems.map((item) => (
              <NavItem key={item.id} path={item.path} content={item.content} />
            ))}
          </ul>
        </div>
        <div className=" flex-row items-center justify-center w-[204px] hidden lg:flex">
          <ul className="flex flex-row text-small text-white list-none w-[203px] text-center justify-between">
            {withIcon.map((item) => (
              <NavItem
                key={item.id}
                path={item.path}
                content={item.content}
                isSettings={item.isSettings}
                isLogin={item.isLogin}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
