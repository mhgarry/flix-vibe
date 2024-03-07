// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import LOGOUT_USER from "../mutations/logout_user";
import LOGIN_USER from "../mutations/login_user";
import REGISTER_USER from "../mutations/register_user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    // Attempt to get a token from localStorage
    const token = localStorage.getItem("token");
    console.log(token);
    return {
      token: token,
      user: null,
      loading: false,
      error: null,
      isLoggingOut: false,
    };
  });

  const [loginUserMutation] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      const { loginUser } = data;
      setAuthState({
        user: loginUser.user,
        token: loginUser.token,

        loading: false,
        error: null,
      });
      localStorage.setItem("token", loginUser.token);
      console.log("Login successful.");
      console.log("Token:", loginUser.token);
    },
    onError: (error) => {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    },
  });

  // LOGOUT mutation
  const [logoutUserMutation] = useMutation(LOGOUT_USER, {
    onCompleted: () => {
      console.log("Logout successful.");
      setAuthState({
        token: null,
        user: null,
        loading: false,
        error: null,
        isLoggingOut: false,
      });
      localStorage.removeItem("token");
    },
    onError: (error) => {
      console.error("Logout error:", error.message); // Error feedback in developer console
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
        isLoggingOut: false,
      }));
    },
  });

  const logout = async () => {
    if (authState.token) {
      setAuthState((prevState) => ({ ...prevState, isLoggingOut: true }));
      try {
        await logoutUserMutation({
          variables: { token: authState.token },
        });
        console.log("Logout successful.");
      } catch (error) {
        console.error("Logout error:", error.message);
        setAuthState((prevState) => ({
          ...prevState,
          loading: false,
          error: error.message,
          isLoggingOut: false,
        }));
      }
    } else {
      console.log("Current token:", authState.token);
      console.error("No token found, cannot log out.");
    }
  };

  // REGISTER mutation
  const [registerUserMutation] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      const { registerUser } = data;
      setAuthState({
        token: registerUser.token,
        user: registerUser.user,
        loading: false,
        error: null,
      });
      localStorage.setItem("token", registerUser.token);
    },
    onError: (error) => {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    },
  });

  // const login = async (username, token, password) => {
  //   setAuthState((prevState) => ({ ...prevState, loading: true }));

  //   await loginUserMutation({
  //     variables: { username, token, password },
  //   });
  // };
  const login = async (login, password) => {
    setAuthState((prevState) => ({ ...prevState, loading: true }));
    try {
      const response = await loginUserMutation({
        variables: { login, password },
      });
      if (response.data) {
        const { token, user } = response.data.loginUser;
        setAuthState((prevState) => ({
          ...prevState,
          token,
          user,
          loading: false,
          error: null,
        }));
        localStorage.setItem("token", token);
      }
    } catch (error) {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
      }));
    }
  };

  const register = async (username, email, password) => {
    setAuthState((prevState) => ({ ...prevState, loading: true }));
    await registerUserMutation({
      variables: { username, email, password },
    });
  };

  const value = {
    ...authState,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
