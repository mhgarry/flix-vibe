import { Link } from "react-router-dom";
import menuDown from "../../assets/Flix_Icons/MenuDown.svg"; // Ensure correct path
import settingsIcon from "../../assets/Flix_Icons/Settings.svg"; // Ensure correct path
import "./nav.css"; // Ensure correct path

const NavItem = ({ path, content, isSettings, isLogin }) => {
  // Use individual props instead of an item object

  let className = "no-underline text-md text-white";
  if (isLogin || isSettings) {
    className += " text-sm items-center align-center justify-center"; // Removed duplicate text-white and added space
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
    <>
      {content}
      {(isLogin || isSettings) && (
        <div className="icon-container">{renderIcon()}</div>
      )}
    </>
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
