import { Link } from "react-router-dom";
import menuDown from "../../assets/Flix_Icons/MenuDown.svg";
import settingsIcon from "../../assets/Flix_Icons/Settings.svg";
import "./nav.css";

const NavItem = ({ path, content, isSettings, isLogin }) => {
  let className =
    "no-underline text-md text-white hover:text-dark-gray whitespace-nowrap";
  if (isLogin || isSettings) {
    className += " text-sm items-center align-center justify-center";
  }

  const renderIcon = () => {
    if (isLogin) {
      return <img src={menuDown} alt="Login" />;
    }
    if (isSettings) {
      return <img src={settingsIcon} alt="Settings" />;
    }
    return null;
  };

  const contentWithIcon = (
    <div className=" flex flex-col items-center">
      {content}
      {(isLogin || isSettings) && (
        <div className="icon-container">{renderIcon()}</div>
      )}
    </div>
  );

  return (
    <li>
      <Link to={path} className={className}>
        {contentWithIcon}
      </Link>
    </li>
  );
};

export default NavItem;
