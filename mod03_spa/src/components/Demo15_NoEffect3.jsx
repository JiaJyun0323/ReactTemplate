import React, { use, useEffect, useState } from "react";

export default function Demo15_NoEffect3() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    if (users.length === 0) return;
    console.log("Users已經更新");
  }, [users]);

  const handleAddUser = () => {
    if (newUser) {
      setUsers([...users, newUser]);
    }
  };

  const handleAddGuest = () => {
    if (users.includes("Guest")) return;
    setUsers([...users, "Guest"]);
  };

  //   function handleAddCustomUser(newUser) {
  //     setUsers([...users, newUser]);
  //     console.log("Users已經更新");
  //   }

  //   const handleAddUser = () => {
  //     if (newUser && !users.includes(newUser)) {
  //       handleAddCustomUser(newUser);
  //     }
  //   };

  //   const handleAddGuest = () => {
  //     if (!users.includes("Guest")) {
  //       handleAddCustomUser("Guest");
  //     }
  //   };

  return (
    <>
      <h1>Demo15_NoEffect3</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      <br />
      <button onClick={handleAddGuest}>Add Guest</button>
    </>
  );
}
