import React, { useState, useEffect } from "react";
import Demo14_Child from "./Demo14_Child.jsx";

export default function Demo14_NoEffect2() {
  const [selectedUserId, setSelectedUserId] = useState("tony");
  const handleUserIdChange = (e) => setSelectedUserId(e.target.value);
  //*note: use "key" let child component know it's a different param , so useState should be re-render
  return (
    <>
      User ID:
      <select onChange={handleUserIdChange}>
        <option value="tony">tony</option>
        <option value="steve">steve</option>
      </select>
      <br />
      <Demo14_Child userId={selectedUserId} key={selectedUserId} />
    </>
  );
}
