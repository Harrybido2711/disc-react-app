import { createContext, useState } from "react";

export const AuthContext = createContext();   // ⭐ 必须是 export const

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function login(userData) {
    setIsLoggedIn(true);
    setUser(userData);
  }

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
