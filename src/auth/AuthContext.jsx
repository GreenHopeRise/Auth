import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!token

  // reStoreSession
  useEffect(() => {
  const restoreSession = async () => {
    const savedToken = localStorage.getItem("token");

    if (!savedToken) {
      setLoading(false);
      return;
    }

    try {
      setToken(savedToken);

      const res = await api.get("/me");
      setUser(res.data.user);
    } catch {
      logout();
    }

    setLoading(false);
  };

  restoreSession();
}, []);

  const login = async(email, password)=>{
    try{
      const res = await api.post('/login',{
        email,password
      })
      const {user, token} = res.data
      localStorage.setItem('token', token)
      setToken(token)
      setUser(user)
      return true
    }
    catch(err){
      return false
    
    }
  }
  const logout = ()=>{
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
  }
  return(
    <AuthContext.Provider value={{user,token,loading,isAuthenticated,login,logout}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = ()=>useContext(AuthContext)