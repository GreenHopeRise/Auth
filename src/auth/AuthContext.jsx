import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!token;
  const login = (token, userData)=>{
    localStorage.setItem('token',token)
    setToken(token)
    setUser(userData)
  }
  const logout = ()=>{
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }
  useEffect(()=>{
    const savedToken = localStorage.getItem('token')
    if(savedToken){
        setToken(savedToken)
        setUser({name:'demo user'})

    }
  },[])
  return (
    <AuthContext.Provider value={{ user, token, loading, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> useContext(AuthContext)
