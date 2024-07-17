import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";

function UserAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username });
    setUsername("");
    setPassword("");
  };

  if (user) {
    return (
      <div>
        <p>Welcome, {user.username}!</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default UserAuth;
