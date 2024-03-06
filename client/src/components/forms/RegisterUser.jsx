import { useState } from "react";
import { useRegisterMutation } from "../../hooks/useRegisterMutation";
import { useAuth } from "../AuthContext";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const { registerUser, loading, error } = useRegisterMutation();

  const handleRegisterAttempt = async (e) => {
    e.preventDefault();
    await register(username, email, password, registerUser);
  };

  return (
    <form onSubmit={handleRegisterAttempt}>
      {/* Username field */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      {/* Email field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      {/* Password field */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {/* Submit button */}
      <button type="submit" disabled={loading}>
        Register
      </button>

      {/* Error message */}
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default RegisterForm;
