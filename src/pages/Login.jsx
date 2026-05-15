import React, { useState } from "react";
import { loginUser } from "../services/auth.service";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
    const {setUser} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e)=>{
    e.preventDefault()
    try {
        const user = await loginUser(email, password)
        setUser(user)
    } catch (error) {
        setError(error.message)
        
    }


  }
  return (
    <div >
      <form onSubmit={handleLogin}>
        <h2 className="text-red-600">Login</h2>
        {
            error && <p>{error}</p>
        }
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
