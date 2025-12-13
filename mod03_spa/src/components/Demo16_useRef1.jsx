import React, { useState, useRef } from "react";

export default function Demo16_useRef() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  let direction = count > prevCountRef.current ? "上升" : "下降";

  // console.log(`root : ref: ${prevCountRef.current} , count: ${count}`);

  const addCount = (number) => {
    //*note: count will be change when render, so prevCountRef could get correct value
    setCount((prevCount) => prevCount + number);
    // 更新 ref 為目前值
    prevCountRef.current = count;

    // console.log(`function : ref: ${prevCountRef.current} , count: ${count}`);
  };

  return (
    <div>
      <h2>目前數值：{count}</h2>
      <h3>前一次數值：{prevCountRef.current}</h3>
      <h3>變化方向：{direction}</h3>
      <button onClick={() => addCount(1)}>增加</button>
      <button onClick={() => addCount(-1)}>減少</button>
    </div>
  );
}
