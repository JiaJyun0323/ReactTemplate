import React, { useRef, useState } from "react";

export default function Demo20_useRef5() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <input type="text" value={count} readOnly />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
