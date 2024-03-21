import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import CustomError from "../../errors/CustomError";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const LoginFormTest = () => {
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
     <Card color="black" shadow={false} className="w-conatiner mt-10 bg-black">
      <Typography variant="h4" color="white">
        Welcome back, come chill, come create
      </Typography>
      <Typography color="white" className="mt-1 text-md">
        Sign in to your account to continue
      </Typography>
      <form onSubmit={handleLoginAttempt} className="bg-transparent mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6 w-full">
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
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
      <label htmlFor="password" className="hidden">
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
       
            labelProps={{
              className: "before:content-none after:content-none",
            }}
         />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>

         {error && <CustomError />}
        </div>
         </form>
      </Card>
  );
};


export default LoginFormTest;