import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts?_limit=5")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard (Practice)</h1>
      <p>Welcome, <strong>{user?.name}</strong>!</p>
      <button onClick={logout}>Logout</button>
      <hr />
      <h3>Your Posts:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}