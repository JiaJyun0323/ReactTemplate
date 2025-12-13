import React, { useRef } from "react";

export default function Demo18_useRef3() {
  const inputRef = useRef(null);
  // can use useRef to currently control DOM tree
  const focusInput = () => {
    inputRef.current.focus();
    console.log(`Input focused: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Demo18_useRef3</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
