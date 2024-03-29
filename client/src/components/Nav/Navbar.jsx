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
      <nav className="navbar  z-50">
        <div className="navbar flex flex-row items-center justify-center max-w-full w-full">
          <div className="flex flex-row justify-between align-center w-full">
            {isMobile ? (
              <div className="flex flex-row justify-between max-w-full w-tabletContainer">
                <div className="w-logo ">
                  <Link to="/">
                    <img
                      src="flix-vibe-logo.png"
                      alt="FlixVibe logo"
                      className="w-logo h-logo"
                    />
                  </Link>
                </div>
                <div className="lg:hidden flex flex-row justify-between w-[32vw] items-top align-top">
                  <ul className="flex flex-row text-small w-[64%] text-white list-none text-center ">
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
                  <div className="lg:hidden cursor-pointer w-[23.3%] p-0 m-0  z-100 flex">
                    <img
                      src={MenuOpen}
                      alt="Close Menu"
                      className="bg-transparent p-0 m-0 h-[72px] w-[72px] z-100"
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
            <div className="hidden lg:flex lg:flex-row lg:w-nav lg:align-top lg:items-top">
              <ul className="flex flex-row w-navText justify-between text-white list-none">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    path={item.path}
                    content={item.content}
                  />
                ))}
              </ul>
              <ul className="flex flex-row w-iconBox justify-around">
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
