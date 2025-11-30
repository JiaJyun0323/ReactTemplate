import React, { useEffect, useState } from "react";
import Demo12_Child from "./Demo12_Child.jsx";

export default function Demo12() {
  const [showChild, setShowChild] = useState(true);

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Demo12掛載與count變動時執行");
  // }, [count]);

  return (
    <>
      <h1>Demo12 - {count}</h1>
      <input
        type="button"
        value="增加計數"
        onClick={() => setCount(count + 1)}
      />
      <input
        type="button"
        value="切換子元件"
        onClick={() => setShowChild(!showChild)}
      />
      {showChild && <Demo12_Child />}
    </>
  );
}
