import React, { useRef } from "react";

export default function Demo17_useRef2() {
  let countRef = useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
    console.log("count:", countRef.current);
  }
  return (
    <div>
      count: {countRef.current}
      <button onClick={handleClick}>增加count</button>
    </div>
  );
}
