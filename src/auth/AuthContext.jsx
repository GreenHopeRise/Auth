import { createContext, useState } from "react";

const AuthContext = createContext()
export const AuthProvider =({children})=>{
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const isAuthenticated =!!token
    return(
        <AuthContext.Provider value={{user, token, loading, }}>
            {children}

        </AuthContext.Provider>
    )
}