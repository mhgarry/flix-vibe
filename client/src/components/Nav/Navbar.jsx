import NavItem from "./NavItems";
import { Link } from "react-router-dom";
import MenuOpen from "../../assets/Flix_Icons/MenuOpen.svg";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const isMobile = window.innerWidth <= 1024;
  console.log(isMobile);
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
    <>
      <nav className="navbar mb-[.1rem] z-50">
        <div className="navbar flex flex-row items-center justify-center max-w-full w-full">
          <div className="flex flex-row justify-between lg:w-full lg:max-w-full align-center w-tabletContainer">
            {isMobile ? (
              <div className="flex flex-row justify-between lg:pr-globalPadding  lg:max-w-full w-tabletContainer">
                <div className="w-logo ">
                  <Link to="/">
                    <img
                      src="flix-vibe-logo.png"
                      alt="FlixVibe logo"
                      className="w-logo h-logo"
                    />
                  </Link>
                </div>
                <div className="lg:hidden flex flex-row justify-between w-[29.9%]">
                  <div className="flex flex-row justify-between">
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
                  <div className="lg:hidden cursor-pointer z-100 block">
                    <img
                      src={MenuOpen}
                      alt="Close Menu"
                      className="bg-transparent"
                      onClick={handleDrawer}
                    />
                    <MobileDrawer
                      isOpen={isDrawerOpen}
                      onClose={handleDrawer}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between w-full">
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
              <ul className="flex-row text-medium text-white list-none w-[41.25rem] justify-between hidden lg:flex">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    path={item.path}
                    content={item.content}
                  />
                ))}
              </ul>
            </div>
            <div className=" flex-row items-center justify-center w-[12.688rem] hidden lg:flex">
              <ul className="flex flex-row text-sm text-white list-none w-[12.688rem] text-center justify-between">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
