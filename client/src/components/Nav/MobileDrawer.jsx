import { useState } from "react";
import { CloseMenu } from "../../assets/Flix_Icons/Close-Mobile-Menu.svg";
import { Login } from "../../assets/Flix_Icons/Login-Mobile.svg";

const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="w-[682px] flex flex-col items-center justify-center">
      <div className="flex flex-row justify-end w-full pr-globalPadding pt-globalPadding mb-[21[px]">
        <button onClick={handleDrawer}>
          <img src={CloseMenu} alt="Close Menu" />
        </button>
      </div>
      <div className="flex flex-col w-full pl-global mb-55px">
        <p href="/your-spaces" className="text-black text-[33px]">
          YOUR SPACES
        </p>
      </div>
      <div className="flex flex-col w-full pl-global mb-55px">
        <p href="/favorites" className="text-black text-[33px]">
          FAVORITES
        </p>
      </div>
      <div className="mb-[31.2px] w-full px-global">
        <button
          className="w-full h-[61.8px] rounded-custom flex flex-row"
          type="submit"
          src="/login"
        >
          <p className="text-black text-[33px]">LOGIN/SIGN UP</p>
          <img src={Login} alt="Login" />
        </button>
      </div>
    </div>
  );
};

export default MobileDrawer;
