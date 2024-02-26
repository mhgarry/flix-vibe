import { useState } from "react";
import { useAuth } from "../components/AuthContext.jsx"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../hooks/useLoginMutation.jsx"; // Adjust the import path as necessary

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loading, error } = useLoginMutation(); // Corrected to use useLoginMutation
  const { setAuthState } = useAuth(); // Assuming setAuthState is correctly implemented in your AuthContext
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.data) {
        setAuthState({
          token: response.data.loginUser.token,
          user: response.data.loginUser.user,
          loading: false,
          error: null,
        });
        navigate("/dashboard"); // Redirect to dashboard on successful login
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLoginAttempt}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
      </div>
      <div>
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
      {error && <p>{error.message}</p>} {/* Display error message if present */}
    </form>
  );
};
