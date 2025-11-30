import React, { useState } from "react";
import Demo07_Child from "./Demo07_Child";

export default function Demo07_rerender2() {
  const [count, setCount] = useState(0);

  console.log("--父組件重新渲染");

  function changeEvent() {
    setCount(count + 1);
  }

  return (
    <>
      <div>Demo07_rerender2</div>
      <p>count: {count}</p>
      <button onClick={() => changeEvent()}>change</button>

      <Demo07_Child />
      <Demo07_Child />
    </>
  );
}
