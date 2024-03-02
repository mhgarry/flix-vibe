import { Link } from "react-router-dom";
import menuDown from "../../assets/Flix_Icons/MenuDown.svg";
import settingsIcon from "../../assets/Flix_Icons/Settings.svg";
import "./nav.css";

const NavItem = ({ item }) => {
  let className = "no-underline text-md text-white";
  if (item.isLogin || item.isSettings) {
    className =
      "text-sm text-white no-underline items-center align-center justify-center";
  }

  const renderIcon = () => {
    if (item.isLogin) {
      return <img src={menuDown} alt="Login" />;
    }
    if (item.isSettings) {
      return <img src={settingsIcon} alt="Settings" />;
    }
    return null;
  };

  const content = (
    <Link to={item.path} className={className}>
      {item.content}
      {(item.isLogin || item.isSettings) && (
        <div className="icon-container">{renderIcon()}</div>
      )}
    </Link>
  );

  return <li className="">{content}</li>;
};

export default NavItem;
