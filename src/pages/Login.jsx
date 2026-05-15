import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Login Failed!');
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Practice Login</h2>
      <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Pass" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}