import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!token

  // reStoreSession
  useEffect(()=>{
    const saveToken = localStorage.getItem('token')
    if(saveToken){
      setToken(saveToken)
      setUser({naem:'khalid'})
    }
    setLoading(false)
  },[])

  const login = async(email, password){
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
    <AuthContext value={{user,token,loading,isAuthenticated,login,logout}}>{children}</AuthContext>
  )
}

export const useAuth = useContext(AuthContext)