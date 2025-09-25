
import React, { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Sonu" },
  { id: 2, name: "Monu" },
  { id: 3, name: "Tonu" },
  { id: 4, name: "Pooja" },
  { id: 5, name: "Anu" },
];

const FilteredList = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Filtered List Example</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
