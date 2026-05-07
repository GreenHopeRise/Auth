import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./routers/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* default route FIX */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;