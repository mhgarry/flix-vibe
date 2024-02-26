import { createContext, useContext, useState } from "react";
import useLogin from "../utils/handleLogin.jsx";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    loading: false,
    error: null,
  });

  const login = useLogin();
  
  const value = { ...authState, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
