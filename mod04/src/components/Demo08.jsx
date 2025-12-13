import React, { useState, useMemo, useRef } from "react";
import Demo08_useMemo_memo from "./Demo08_useMemo_memo.jsx";

export default function Demo08() {
  const [count, setCount] = useState(0);

  const [email, setEmail] = useState("user@example.com");
  const [name, setName] = useState("John Doe");

  //   const user = { email, name };

  const user = useMemo(() => {
    return { email, name };
  }, [email, name]);

  return (
    <>
      <h1>Demo08</h1>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <h2>Count: {count}</h2>
      <Demo08_useMemo_memo user={user} />
    </>
  );
}
