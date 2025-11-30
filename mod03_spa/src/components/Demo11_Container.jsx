import React, { useState } from "react";
import Demo11_UserList from "./Demo11_UserList.jsx";

export default function Demo11_Container() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
    { id: 6, name: "David Wilson" },
    { id: 7, name: "Emma Thompson" },
  ]);

  const [keyword, setKeyword] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(keyword.toLowerCase())
  );

  console.log("filteredUsers:", filteredUsers);

  return (
    <div>
      <h2>Demo11_Container1</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search users..."
      />
      <Demo11_UserList users={filteredUsers} />
    </div>
  );
}
