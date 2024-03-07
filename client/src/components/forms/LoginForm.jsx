import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import CustomError from "../errors/CustomError";

import { Input } from "@material-tailwind/react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  let navigate = useNavigate(login);

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    const response = await login(userName, password);
    if (response && response.data) {
      setUserName("");
      setPassword("");

      navigate("/your-spaces");
      console.log("logged in");
    } else if (response && response.error) {
      console.error(response.error);
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div className="w-container mt-10">
      {" "}
      <form onSubmit={handleLoginAttempt} className="w-screen bg-transparent">
        <label htmlFor="username" className="hidden">
          Username:
        </label>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          label="Username"
          color="white"
          autoFocus={false}
          variant="outlined"
          className="w-bigButton bg-transparent text-black h-10 focus:bg-transparent active:bg-transparent hover:bg-transparent enabled:bg-transparent  "
          required
          autoSave="undefined"
          autoComplete="undefined"
        />
        <label htmlFor="username" className="hidden">
          Password:
        </label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-bigButton focus:bg-transparent active:bg-transparent hover:bg-transparent enabled:bg-transparent text-black h-10"
          required
          color="white"
          variant="outlined"
          autoSave="false"
          autoComplete="false"
        />
        {/* {error && <p>{error.message}</p>} */}
        <button
          type="submit"
          // disabled={loading}
          className="w-bigButton bg-white text-black"
        >
          Login
        </button>
      </form>
      {error && <CustomError />}
    </div>
  );
};

export default LoginForm;
