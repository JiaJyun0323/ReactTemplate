import React from "react";

export default function Demo11_UserList({ users }) {
  return (
    <div>
      <h3>使用者清單</h3>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>沒有符合條件的使用者.</p>
      )}
    </div>
  );
}
