// LogoutButton.jsx
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout, isLoggingOut } = useAuth();
  const navigate = useNavigate();
  if (logout) {
    navigate("/");
  }

  return (
    <button
      onClick={logout}
      disabled={isLoggingOut}
      className="bg-white text-black text-md w-bigButton h-[100px] rounded-[8px] login-username"
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
