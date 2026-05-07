import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  console.log("loading:", loading);
  console.log("auth:", isAuthenticated);

  if (loading) return <h2>Loading...</h2>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoutes;