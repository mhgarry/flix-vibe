// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import LOGOUT_USER from "../mutations/logout_user";
import LOGIN_USER from "../mutations/login_user";
import REGISTER_USER from "../mutations/register_user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    loading: false,
    error: null,
  });

  // LOGIN mutation
  const [loginUserMutation] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      const { loginUser } = data;
      setAuthState({
        token: loginUser.token,
        user: loginUser.user,
        loading: false,
        error: null,
      });
      localStorage.setItem("token", loginUser.token);
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
      setAuthState({
        token: null,
        user: null,
        loading: false,
        error: null,
        setLoggingOut: false,
      });
      localStorage.removeItem("token");
    },
    onError: (error) => {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
        setLoggingOut: false,
      }));
    },
  });

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

  // Context actions
  const login = async (username, password) => {
    setAuthState((prevState) => ({ ...prevState, loading: true }));
    await loginUserMutation({
      variables: { login: username, password },
    });
  };

  const logout = async () => {
    setAuthState((prevState) => ({ ...prevState, loading: true }));

    await logoutUserMutation({
      variables: { token: authState.token },
    });
  };

  const register = async (username, email, password) => {
    setAuthState((prevState) => ({ ...prevState, loading: true }));
    await registerUserMutation({
      variables: { username, email, password },
    });
  };

  // Provide the state and actions to the context
  const value = {
    ...authState,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
