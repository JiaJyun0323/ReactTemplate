import React, { useState } from "react";

export default function Demo05_State4() {
  const [users, setUsers] = useState([
    { id: 1, name: "mary", age: 18 },
    { id: 2, name: "john", age: 20 },
  ]);

  function changeEvent() {
    setUsers((prev) =>
      prev.map((item) => (item.name === "john" ? { ...item, age: 33 } : item))
    );
  }

  return (
    <>
      <div>Demo05_State4</div>

      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.age}
        </div>
      ))}

      <button onClick={() => changeEvent()}>change</button>
    </>
  );
}
