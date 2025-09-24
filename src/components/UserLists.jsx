import React, { useState } from "react";
import { useGetUsersQuery, useAddUserMutation } from "../features/usersApi";

const UserLists = () => {
  const { data: users, error, isLoading } = useGetUsersQuery(undefined, {
    pollingInterval: 10000, // 10s polling
  });

  const [addUser] = useAddUserMutation();
  const [name, setName] = useState("");
  const [localUsers, setLocalUsers] = useState([]); // Local state for instant UI update

  const handleAddUser = async () => {
    if (!name) return;

    // Local update for instant display
    const newUser = { id: Date.now(), name };
    setLocalUsers((prev) => [...prev, newUser]);

    // API call
    await addUser({ name });

    setName(""); // clear input
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching users</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1> Users List (Cached + Polling + Invalidation)</h1>

      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {/* Local users first (instant update), then API users */}
        {localUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <p> Data cached by RTK Query, auto-updated every 10s</p>
    </div>
  );
};

export default UserLists;
