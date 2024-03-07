import { useState } from "react";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { loginUser, loading, error } = useLoginMutation();

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    navigate("/your-spaces");
    await login(userName, password, loginUser);
    // await login(loginName, password, loginUser);
  };

  return (
    <div className="w-container mt-10">
      {" "}
      <form onSubmit={handleLoginAttempt} className="w-screen bg-white ">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="w-bigButton bg-white text-black h-10"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-bigButton bg-white text-black h-10"
          required
        />
        {error && <p>{error.message}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-bigButton bg-white text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
