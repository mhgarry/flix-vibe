// LogoutButton.jsx
import { useAuth } from "../components/AuthContext";

const LogoutButton = () => {
  const { logout, isLoggingOut } = useAuth();

  return (
    <button
      onClick={logout}
      disabled={isLoggingOut} // Disable the button when logging out
      className="bg-white text-black text-md w-bigButton h-[100px] rounded-[8px] login-username"
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
