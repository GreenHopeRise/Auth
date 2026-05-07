import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
        const fakeToken ='123abc'
        const fakeUser = 'khalid'
        log
    }
  return (
    <div>
        <input type='email' />
        <input type="password" />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login