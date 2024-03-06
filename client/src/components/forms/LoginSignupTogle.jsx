import { useState } from "react";

const LoginSignupToggle = () => {
  const [isMode, setMode] = useState(
    `let toggleMode === "login" ? "signup" : "login"`
  );

  const handleMode = () => {
    setMode(!isMode);
  };

  return (
    <div>
      <button onClick={handleMode}>Switch to {isMode}</button>
    </div>
  );
};

export default LoginSignupToggle;
