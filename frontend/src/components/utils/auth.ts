import React from "react";

const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  accessToken: "",
  userId: ""
});

export default AuthenticationContext;
