// App.js
import React, { useState, useEffect } from "react";
import UserCard from "./Components/UserCard";

function App() {
  // 🔹 useState (State)
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 useEffect (API Call)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // 🔹 Filter logic
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Search App</h1>

      {/* 🔹 useState input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔹 Props passing */}
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </div>
  );
}

export default App;