import React, { useContext } from "react";
import MyContext from "./Demo01_Context";

export default function Demo01_Child2() {
  const { users, addUser } = useContext(MyContext);

  return (
    <div>
      <h4>Demo01_Child2</h4>
      <button onClick={() => addUser(`New User${new Date().getSeconds()}`)}>
        Add User
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
