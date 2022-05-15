import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  token: "",
  name: "",
  signin: () => {},
  signout: () => {},
});
