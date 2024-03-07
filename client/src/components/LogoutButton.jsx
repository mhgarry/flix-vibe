import { useAuth } from "../components/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="bg-white text-black text-md w-bigButton h-[100px] rounded-[8px] login-username"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
