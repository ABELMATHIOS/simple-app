import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://simple-app-h71k.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>EagleGlow Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;