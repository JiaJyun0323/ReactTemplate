import React, { useReducer, useState } from "react";
import MyReducer, { initialState } from "./Demo03_MyReducer";

export default function Demo03() {
  const [state, dispatch] = useReducer(MyReducer, initialState);

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {state.count}</p>
      <input
        type="text"
        onChange={(e) => setCount(Number.parseInt(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "increment", count: count })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", count: count })}>
        -
      </button>
    </div>
  );
}
