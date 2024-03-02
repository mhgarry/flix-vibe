// LoginForm.jsx
import { useState } from "react";
import { useAuth } from "../components/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../hooks/useLoginMutation.jsx";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loading, error } = useLoginMutation();
  const { login: contextLogin } = useAuth();
  const navigate = useNavigate();

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    await contextLogin(login, password, loginUser);
    navigate("/dashboard");
    console.log("User is logged in");
  };

  return (
    <form onSubmit={handleLoginAttempt} className="text-white">
      <div>
        <label htmlFor="login">Username or Email</label>
        <input
          id="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="text-white background-white">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>
      <button type="submit" disabled={loading}>
        Log In
      </button>
      {error && <p>{error.message}</p>}{" "}
    </form>
  );
};

export default LoginForm;
