// Context creation and custom hook creation to enable easily using `useContext` without needing to import `useContext` to children components
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);