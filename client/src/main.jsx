import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import client from "./utils/apolloClient.js";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./components/AuthContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
