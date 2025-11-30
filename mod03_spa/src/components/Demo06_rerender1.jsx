import React, { useState } from "react";

export default function Demo06_rerender1() {
  const [count, setCount] = useState(0);

  console.log("觸發重新渲染");

  function changeEvent() {
    setCount(count + 1);
  }

  return (
    <>
      <div>Demo06_rerender1</div>
      <p>count: {count}</p>

      <button onClick={() => changeEvent()}>change</button>
    </>
  );
}
