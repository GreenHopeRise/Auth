import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await api.get("/dashboard-data");
      setData(res.data);
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={logout}>Logout</button>
    </div>
  );
}