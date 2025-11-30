import React, { useRef } from "react";

export default function Demo19_useRef4() {
  const input = useRef(null);

  return (
    <>
      <input type="text" ref={input} />
      <button
        onClick={() => {
          input.current.value = parseInt(input.current.value) + 1;
        }}
      >
        increment
      </button>
    </>
  );
}
