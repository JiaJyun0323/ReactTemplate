import React, { useState } from "react";
import MyContext from "./Demo01_Context";
import Demo01_Child1 from "./Demo01_Child1";

export default function Demo01_Context() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ]);

  const [latestId, setLatestId] = useState(3);

  const addUser = (name) => {
    const newUser = { id: latestId + 1, name };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setLatestId(latestId + 1);
  };

  return (
    <>
      <MyContext value={{ users, addUser }}>
        <h1>Demo01_Context</h1>
        <Demo01_Child1 />
      </MyContext>
    </>
  );
}
