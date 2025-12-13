import React, { useState } from "react";
import Demo07_memo from "./Demo07_memo.jsx";

export default function Demo07() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello from Demo07");

  return (
    <div>
      <h2>Demo07</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Current Count: {count}</p>

      <button onClick={() => setMessage("早上好")}>改msg為早上好</button>
      <Demo07_memo msg={message} />
    </div>
  );
}
