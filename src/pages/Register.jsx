import React, { useState } from "react";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // const {setUser} = useAuth()
  const navigare = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      navigare('/dashboard')
      // setUser(user)
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
