// src/pages/UserProfile.js
import React from 'react';
import { useUser } from '../contexts/UserContext';

function UserProfile() {
  const { user, logout } = useUser();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserProfile;