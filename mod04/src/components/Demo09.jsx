import React, { useCallback, useState } from "react";
import Demo09_useCallback_memo from "./Demo09_useCallback_memo";

export default function Demo09() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["John", "Jane", "Doe"]);

  //   const addUser = (name) => {
  //     setUsers((prevUsers) => [...prevUsers, name]);
  //   };

  const addUser = useCallback(
    (name) => {
      setUsers((prevUsers) => [...prevUsers, name]);
    },
    [users]
  );

  console.log("Demo09 render");

  return (
    <div>
      <Demo09_useCallback_memo addUser={addUser} />
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <hr />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>count+1</button>
    </div>
  );
}
