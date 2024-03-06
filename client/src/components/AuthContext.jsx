// AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    loading: false,
    error: null,
  });
  const register = async (username, email, password, registerUser) => {
    try {
      const response = await registerUser(username, email, password);
      if (response.data) {
        setAuthState((prevState) => ({
          ...prevState,
          token: response.data.registerUser.token,
          user: response.data.registerUser.user,
          loading: false,
          error: null,
        }));
      }
    } catch (error) {
      setAuthState((prevState) => ({
        ...prevState,
        error: error.message,
      }));
    }
  };

  const login = async (login, password, loginUser) => {
    try {
      const response = await loginUser(login, password);
      if (response.data) {
        setAuthState((prevState) => ({
          ...prevState,
          token: response.data.loginUser.token,
          user: response.data.loginUser.user,
          loading: false,
          error: null,
        }));
      }
    } catch (error) {
      setAuthState((prevState) => ({
        ...prevState,
        error: error.message,
      }));
    }
  };

  const value = { ...authState, login, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
