import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {login} = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const handleLogin = async()=>{
    const success = await login(email,password)
    if(success){
      navigate('/dashboard')
    }else{
      alert('login faild')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" name="" id="" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" name="" id="" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login