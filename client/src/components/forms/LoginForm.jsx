import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import LoginIcon from "../../assets/Flix_Icons/Login-Desktop.svg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    try {
      await login(username, password); // Use the login from the AuthContext
      // If login is successful, the AuthContext will update the authState and navigate should be called
      console.log("Login attempt was successful!");
      navigate("/your-spaces");
    } catch (error) {
      console.error(
        "Login attempt was unsuccessful, please check your credentials and try again."
      );
    }
  };

  return (
    <div className="grid grid-cols-12 ml-paddingGlobal mr-paddingGlobal login-form">
      <div className="grid col-span-5 col-start-1">
        <div className="w-full text-white">
          <h6 className="text-white text-md">
            Tune In. Zone Out. What Are You Waiting For?
            <br />
            <span className="text-sm">All Your Favorites. All The Time. </span>
          </h6>
        </div>

        <form
          onSubmit={handleLoginAttempt}
          className="text-white login-username login-text"
        >
          <div className="h-[37.22vh] flex flex-col justify-between">
            <input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              className="w-[600px] h-[100px] bg-light-gray text-black no-underline rounded-[8px] text-md login-username"
              placeholder="Username or Password"
            />

            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                placeholder="Password"
                className="w-[600px] h-[100px] bg-light-gray text-black no-underline rounded-[8px] text-md login-password"
              />
            </div>
            <p className="text-white text-sm login-forgot-pass">
              Forgot your password?
            </p>
            <button
              className="w-[400px] h-[100px] bg-light-gray text-black no-underline rounded-custom text-lg flex flex-row items-center px-[8px] justify-between login-submit"
              type="submit"
              disabled={loading}
            >
              <p> Log In</p>
              <img src={LoginIcon} alt="Login" />
            </button>
          </div>
          {error && (
            <p className="text-white">
              Login attempt was unsuccessful, please try check your credentials
              and try again.
            </p>
          )}
        </form>
      </div>
      <div className="col-span-3 col-start-9 col-end-12">
        <img src="login-image.png" alt="Login" />
      </div>
      <div className="col-span-12 mt-[102px]">
        <h2 className="text-white text-lg p-0 m-0">
          Don’t have an account yet? Come chill and sign up for Flix Vibes
          <a className="cursor-pointer text-lg text-blue-600"> here!</a>
        </h2>
        <p className="text-white text-sm font-thin p-0 m-0">
          We’ll never send you annoying promotional material or put you on any
          lists. We’re just here to help you chill out and enjoy endless hours
          of flix and vibes.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
