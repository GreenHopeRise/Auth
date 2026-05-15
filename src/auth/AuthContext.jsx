import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token;

  useEffect(() => {
    const restoreSession = () => {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        // JSONPlaceholder theke 1 number user-ke fetch korchi test-er jonno
        api.get("/users/1")
          .then(res => setUser(res.data))
          .catch(() => logout());
      }
      setLoading(false);
    };
    restoreSession();
  }, []);

  const login = async (email, password) => {
    try {
      // JSONPlaceholder-e posts create korle success return kore
      const res = await api.post("/posts", { email, password });
      
      if (res.status === 201) {
        const fakeToken = "fake-jwt-token-12345";
        localStorage.setItem("token", fakeToken);
        setToken(fakeToken);
        
        // Ekta fake user data set korchi
        setUser({ id: 1, name: "Khalid", email: email });
        return true;
      }
    } catch (err) {
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);