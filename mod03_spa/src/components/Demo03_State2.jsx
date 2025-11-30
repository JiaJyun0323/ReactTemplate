import React, { useState } from "react";

export default function Demo03_State2() {
  const [count, setCount] = useState(0);

  function changeEvent() {
    setCount(count + 1);
  }

  return (
    <>
      <div>Demo03_State2</div>
      <p>count: {count}</p>

      <button onClick={() => changeEvent()}>change</button>
    </>
  );
}
