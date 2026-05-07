import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeToken = "abc123";
    const fakeUser = { name: "khalid" };

    login(fakeToken, fakeUser);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <input placeholder="email" />
      <input placeholder="password" />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}